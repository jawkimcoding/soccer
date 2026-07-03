const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const SQUAD_FILE = path.join(__dirname, 'data', 'squad.json');
const FORMATION_FILE = path.join(__dirname, 'data', 'formation.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Helper to run shell commands as promises
function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    console.log(`Executing: ${cmd}`);
    exec(cmd, { cwd: __dirname }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Command failed: ${cmd}\nError:`, error);
        reject({ error, stderr });
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

// Init git configuration if not set
async function ensureGitConfig() {
  try {
    try {
      await runCommand('git config user.name');
    } catch (e) {
      await runCommand('git config --global user.name "Jawkim Football Board"');
    }
    try {
      await runCommand('git config user.email');
    } catch (e) {
      await runCommand('git config --global user.email "jawkimcoding@gmail.com"');
    }
  } catch (err) {
    console.warn('Failed to configure git globally, configuring locally...');
    try {
      await runCommand('git config user.name "Jawkim Football Board"');
      await runCommand('git config user.email "jawkimcoding@gmail.com"');
    } catch (localErr) {
      console.error('Failed to configure git locally:', localErr);
    }
  }
}

// 1. Get Squad 명단
app.get('/api/squad', (req, res) => {
  if (!fs.existsSync(SQUAD_FILE)) {
    return res.status(404).json({ error: 'Squad list not found' });
  }
  fs.readFile(SQUAD_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read squad file' });
    }
    res.json(JSON.parse(data));
  });
});

// 2. Get Current Formation
app.get('/api/formation', (req, res) => {
  if (!fs.existsSync(FORMATION_FILE)) {
    return res.json({ tactics: '4-4-2', players: [] });
  }
  fs.readFile(FORMATION_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read formation file' });
    }
    try {
      res.json(JSON.parse(data));
    } catch (parseErr) {
      res.json({ tactics: '4-4-2', players: [] });
    }
  });
});

// 3. Save Formation and Push to GitHub
app.post('/api/save', async (req, res) => {
  const formationData = req.body; // { tactics: string, players: [{ id, name, positionCode, x, y }] }

  if (!formationData) {
    return res.status(400).json({ error: 'Invalid formation data' });
  }

  // Save to file
  fs.writeFile(FORMATION_FILE, JSON.stringify(formationData, null, 2), 'utf8', async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save formation file locally' });
    }

    console.log('Saved formation locally. Starting Git Push process...');

    try {
      // 1. Ensure git config is set (so commit doesn't fail)
      await ensureGitConfig();

      // 2. Git status check to see if there are actual changes
      const statusOutput = await runCommand('git status --porcelain data/formation.json');
      
      if (!statusOutput) {
        console.log('No changes detected in formation.json. Skipping git push.');
        return res.json({ 
          success: true, 
          message: '로컬에 포메이션이 저장되었습니다. (변경 사항 없음 - Git 푸시 생략)',
          gitPushed: false 
        });
      }

      // 3. Add, Commit and Push
      await runCommand('git add data/formation.json');
      
      const tacticsName = formationData.tactics || 'Custom';
      const commitMessage = `Update formation: ${tacticsName} (${new Date().toLocaleString()})`;
      await runCommand(`git commit -m "${commitMessage}"`);
      
      // Get current branch name
      let branchName = 'main';
      try {
        branchName = await runCommand('git rev-parse --abbrev-ref HEAD');
      } catch (e) {
        branchName = 'master';
      }

      console.log(`Pushing to branch: ${branchName}`);
      
      // Try to push to remote. 
      // Using -u origin branchName or simple git push
      await runCommand(`git push origin ${branchName}`);

      console.log('Git push completed successfully!');
      res.json({ 
        success: true, 
        message: `포메이션 저장 및 깃허브 푸시 성공! (전술: ${tacticsName})`,
        gitPushed: true 
      });

    } catch (gitErr) {
      console.error('Git integration failed:', gitErr);
      res.json({ 
        success: true, 
        message: '포메이션은 로컬에 성공적으로 저장되었으나, 깃허브 푸시 과정에서 오류가 발생했습니다. (Git 설정/권한 확인 필요)',
        gitPushed: false,
        gitError: gitErr.stderr || gitErr.message || 'Unknown error'
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Football Formation Server running at http://localhost:${PORT}`);
});

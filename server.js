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
const FORMATIONS_DIR = path.join(__dirname, 'data', 'formations');

// Ensure data & formations directories exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(FORMATIONS_DIR)) {
  fs.mkdirSync(FORMATIONS_DIR, { recursive: true });
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

// 2. Get All Saved Formations (List of names)
app.get('/api/formations', (req, res) => {
  fs.readdir(FORMATIONS_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read formations directory' });
    }
    // Filter only .json files and remove extension
    const formationNames = files
      .filter(file => file.endsWith('.json'))
      .map(file => path.basename(file, '.json'));
    res.json(formationNames);
  });
});

// 3. Get Specific Formation
app.get('/api/formations/:name', (req, res) => {
  const name = req.params.name;
  // Prevent path traversal
  const safeName = path.basename(name);
  const filePath = path.join(FORMATIONS_DIR, `${safeName}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Formation not found' });
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read formation file' });
    }
    try {
      res.json(JSON.parse(data));
    } catch (parseErr) {
      res.status(500).json({ error: 'Invalid formation file format' });
    }
  });
});

// 4. Save Formation and Push to GitHub (Silent Push)
app.post('/api/save', async (req, res) => {
  const { name, tactics, players } = req.body;

  if (!name || !tactics || !players) {
    return res.status(400).json({ error: 'Invalid formation data. "name", "tactics", and "players" are required.' });
  }

  // Prevent path traversal and clean name
  const safeName = path.basename(name).trim();
  if (!safeName) {
    return res.status(400).json({ error: 'Invalid squad name' });
  }

  const filePath = path.join(FORMATIONS_DIR, `${safeName}.json`);
  const formationData = { name: safeName, tactics, players, updatedAt: new Date().toISOString() };

  // Save to file
  fs.writeFile(filePath, JSON.stringify(formationData, null, 2), 'utf8', async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save formation file locally' });
    }

    console.log(`Saved formation "${safeName}" locally. Starting Git Push process...`);

    try {
      // 1. Ensure git config is set
      await ensureGitConfig();

      // 2. Git status check to see if there are actual changes
      const gitPath = `data/formations/${safeName}.json`;
      const statusOutput = await runCommand(`git status --porcelain "${gitPath}"`);
      
      // Even if statusOutput is empty, it might be an untracked new file. Check if untracked.
      const isNewFile = await runCommand(`git status --porcelain "${gitPath}"`).then(out => out.includes('??'));

      if (!statusOutput && !isNewFile) {
        console.log(`No changes detected in ${gitPath}. Skipping git push.`);
        return res.json({ 
          success: true, 
          message: `"${safeName}" 스쿼드가 로컬에 저장되었습니다. (변경 사항 없음)`,
          gitPushed: false 
        });
      }

      // 3. Add, Commit and Push
      await runCommand(`git add "${gitPath}"`);
      
      const commitMessage = `Save squad: ${safeName} (${new Date().toLocaleString()})`;
      await runCommand(`git commit -m "${commitMessage}"`);
      
      // Get current branch name
      let branchName = 'main';
      try {
        branchName = await runCommand('git rev-parse --abbrev-ref HEAD');
      } catch (e) {
        branchName = 'master';
      }

      console.log(`Pushing to branch: ${branchName}`);
      await runCommand(`git push origin ${branchName}`);

      console.log('Git push completed successfully!');
      res.json({ 
        success: true, 
        message: `"${safeName}" 스쿼드가 성공적으로 저장 및 백업되었습니다.`,
        gitPushed: true 
      });

    } catch (gitErr) {
      console.error('Git integration failed:', gitErr);
      // We still return success: true because the local save was successful, 
      // but we indicate that Git push failed.
      res.json({ 
        success: true, 
        message: `"${safeName}" 스쿼드가 로컬에 저장되었습니다. 단, 서버 백업 과정에서 오류가 발생했습니다.`,
        gitPushed: false,
        gitError: gitErr.stderr || gitErr.message || 'Unknown error'
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Football Formation Server running at http://localhost:${PORT}`);
});

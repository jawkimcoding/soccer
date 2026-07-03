// Tactics Formation Configuration (coordinates in %)
const formations = {
  '4-4-2': [
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 90 },
    { id: 'lb', label: 'LB', role: '좌측 수비수', x: 15, y: 70 },
    { id: 'lcb', label: 'LCB', role: '좌중앙 수비수', x: 38, y: 72 },
    { id: 'rcb', label: 'RCB', role: '우중앙 수비수', x: 62, y: 72 },
    { id: 'rb', label: 'RB', role: '우측 수비수', x: 85, y: 70 },
    { id: 'lm', label: 'LM', role: '좌측 미드필더', x: 15, y: 45 },
    { id: 'lcm', label: 'LCM', role: '좌중앙 미드필더', x: 38, y: 48 },
    { id: 'rcm', label: 'RCM', role: '우중앙 미드필더', x: 62, y: 48 },
    { id: 'rm', label: 'RM', role: '우측 미드필더', x: 85, y: 45 },
    { id: 'lst', label: 'LS', role: '좌측 스트라이커', x: 35, y: 20 },
    { id: 'rst', label: 'RS', role: '우측 스트라이커', x: 65, y: 20 }
  ],
  '4-3-3': [
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 90 },
    { id: 'lb', label: 'LB', role: '좌측 수비수', x: 15, y: 70 },
    { id: 'lcb', label: 'LCB', role: '좌중앙 수비수', x: 38, y: 72 },
    { id: 'rcb', role: 'RCB', role: '우중앙 수비수', x: 62, y: 72 },
    { id: 'rb', label: 'RB', role: '우측 수비수', x: 85, y: 70 },
    { id: 'dm', label: 'DM', role: '수비형 미드필더', x: 50, y: 58 },
    { id: 'lcm', label: 'LCM', role: '좌중앙 미드필더', x: 30, y: 44 },
    { id: 'rcm', label: 'RCM', role: '우중앙 미드필더', x: 70, y: 44 },
    { id: 'lw', label: 'LW', role: '좌측 윙어', x: 15, y: 22 },
    { id: 'st', label: 'ST', role: '중앙 스트라이커', x: 50, y: 18 },
    { id: 'rw', label: 'RW', role: '우측 윙어', x: 85, y: 22 }
  ],
  '3-5-2': [
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 90 },
    { id: 'lcb', label: 'LCB', role: '좌측 센터백', x: 28, y: 72 },
    { id: 'cb', label: 'CB', role: '중앙 센터백', x: 50, y: 75 },
    { id: 'rcb', label: 'RCB', role: '우측 센터백', x: 72, y: 72 },
    { id: 'lwb', label: 'LWB', role: '좌측 윙백', x: 12, y: 55 },
    { id: 'rwb', label: 'RWB', role: '우측 윙백', x: 88, y: 55 },
    { id: 'ldm', label: 'LDM', role: '좌측 수미', x: 35, y: 52 },
    { id: 'rdm', label: 'RDM', role: '우측 수미', x: 65, y: 52 },
    { id: 'am', label: 'AM', role: '공격형 미드필더', x: 50, y: 35 },
    { id: 'lst', label: 'LS', role: '좌측 스트라이커', x: 35, y: 18 },
    { id: 'rst', label: 'RS', role: '우측 스트라이커', x: 65, y: 18 }
  ],
  '4-2-3-1': [
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 90 },
    { id: 'lb', label: 'LB', role: '좌측 수비수', x: 15, y: 70 },
    { id: 'lcb', label: 'LCB', role: '좌중앙 수비수', x: 38, y: 72 },
    { id: 'rcb', label: 'RCB', role: '우중앙 수비수', x: 62, y: 72 },
    { id: 'rb', label: 'RB', role: '우측 수비수', x: 85, y: 70 },
    { id: 'ldm', label: 'LDM', role: '좌측 수미', x: 35, y: 55 },
    { id: 'rdm', label: 'RDM', role: '우측 수미', x: 65, y: 55 },
    { id: 'lam', label: 'LAM', role: '좌측 공미', x: 20, y: 35 },
    { id: 'cam', label: 'CAM', role: '중앙 공미', x: 50, y: 32 },
    { id: 'ram', label: 'RAM', role: '우측 공미', x: 80, y: 35 },
    { id: 'st', label: 'ST', role: '스트라이커', x: 50, y: 16 }
  ],
  '5-3-2': [
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 90 },
    { id: 'lwb', label: 'LWB', role: '좌측 윙백', x: 12, y: 65 },
    { id: 'lcb', label: 'LCB', role: '좌중앙 수비수', x: 32, y: 72 },
    { id: 'cb', label: 'CB', role: '중앙 수비수', x: 50, y: 74 },
    { id: 'rcb', label: 'RCB', role: '우중앙 수비수', x: 68, y: 72 },
    { id: 'rwb', label: 'RWB', role: '우측 윙백', x: 88, y: 65 },
    { id: 'lcm', label: 'LCM', role: '좌중앙 미드필더', x: 30, y: 46 },
    { id: 'cm', label: 'CM', role: '중앙 미드필더', x: 50, y: 48 },
    { id: 'rcm', label: 'RCM', role: '우중앙 미드필더', x: 70, y: 46 },
    { id: 'lst', label: 'LS', role: '좌측 스트라이커', x: 35, y: 20 },
    { id: 'rst', label: 'RS', role: '우측 스트라이커', x: 65, y: 20 }
  ]
};

// Application State
let squad = [];
let activeFormation = '4-4-2';
let placedPlayers = {}; // slotId -> playerObject { id, name }
let selectedSquadName = ''; // currently loaded squad file name

// DOM Elements
const pitch = document.getElementById('pitch');
const guidesOverlay = document.getElementById('guidesOverlay');
const playersOverlay = document.getElementById('playersOverlay');
const squadList = document.getElementById('squadList');
const squadCount = document.getElementById('squadCount');
const playerSearch = document.getElementById('playerSearch');
const squadSelector = document.getElementById('squadSelector');
const saveBtn = document.getElementById('saveBtn');
const overlayLoader = document.getElementById('overlayLoader');
const loaderTitle = document.getElementById('loaderTitle');
const loaderDesc = document.getElementById('loaderDesc');
const closeLoaderBtn = document.getElementById('closeLoaderBtn');

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  setupTacticsButtons();
  setupDragAndDrop();
  setupSearch();
  setupSaveButton();
  setupSquadSelector();
  
  await fetchSquad();
  await fetchFormationsList();
  
  // Default pitch setup
  renderPitchGuides();
  renderPlacedPlayers();
});

// 1. Fetch Squad List from Server
async function fetchSquad() {
  try {
    const res = await fetch('/api/squad');
    if (!res.ok) throw new Error('Failed to fetch squad');
    squad = await res.json();
    squad.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    squadCount.textContent = squad.length;
    renderSquadList();
  } catch (err) {
    console.error(err);
    squadList.innerHTML = '<div class="loading">명단을 가져오지 못했습니다.</div>';
  }
}

// 2. Fetch List of Saved Formations
async function fetchFormationsList(selectNameAfterFetch = '') {
  try {
    const res = await fetch('/api/formations');
    if (!res.ok) throw new Error('Failed to fetch formations list');
    const list = await res.json();
    
    // Clear old options except the first one
    squadSelector.innerHTML = '<option value="">-- 새 스쿼드 작성 --</option>';
    
    list.forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      squadSelector.appendChild(opt);
    });

    if (selectNameAfterFetch) {
      squadSelector.value = selectNameAfterFetch;
      selectedSquadName = selectNameAfterFetch;
    } else {
      squadSelector.value = selectedSquadName;
    }
  } catch (err) {
    console.error('Failed to load formations list:', err);
  }
}

// 3. Load Selected Squad Data
async function loadSquadData(name) {
  if (!name) {
    // Reset to empty board
    placedPlayers = {};
    selectedSquadName = '';
    renderPitchGuides();
    renderPlacedPlayers();
    renderSquadList(playerSearch.value);
    return;
  }

  try {
    const res = await fetch(`/api/formations/${encodeURIComponent(name)}`);
    if (!res.ok) throw new Error('Failed to fetch squad data');
    const data = await res.json();
    
    selectedSquadName = name;
    
    if (data.tactics && formations[data.tactics]) {
      activeFormation = data.tactics;
      
      // Update buttons active status
      document.querySelectorAll('.tactics-btn').forEach(btn => {
        if (btn.dataset.formation === activeFormation) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    placedPlayers = {};
    if (data.players && Array.isArray(data.players)) {
      data.players.forEach(p => {
        if (p.positionCode) {
          placedPlayers[p.positionCode] = { id: p.id, name: p.name };
        }
      });
    }

    renderPitchGuides();
    renderPlacedPlayers();
    renderSquadList(playerSearch.value);
  } catch (err) {
    console.error('Failed to load squad data:', err);
    alert('스쿼드 데이터를 불러오는 데 실패했습니다.');
  }
}

function setupSquadSelector() {
  squadSelector.addEventListener('change', (e) => {
    loadSquadData(e.target.value);
  });
}

// 4. Render Squad List Pool
function renderSquadList(searchTerm = '') {
  squadList.innerHTML = '';
  const filtered = squad.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    squadList.innerHTML = '<div class="loading">검색 결과가 없습니다.</div>';
    return;
  }

  // Check if player is already placed
  const placedIds = Object.values(placedPlayers).map(p => p.id);

  filtered.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.draggable = true;
    card.dataset.id = player.id;
    card.dataset.name = player.name;

    const isPlaced = placedIds.includes(player.id);
    if (isPlaced) {
      card.classList.add('placed');
      card.draggable = false;
    }

    card.innerHTML = `
      <span class="player-card-icon">👕</span>
      <span class="player-card-name" title="${player.name}">${player.name}</span>
    `;

    // Web Drag Events
    card.addEventListener('dragstart', handleDragStart);
    
    // Mobile Touch Events
    setupMobileTouchForCard(card);

    squadList.appendChild(card);
  });
}

// 5. Render Pitch Slots/Guides
function renderPitchGuides() {
  guidesOverlay.innerHTML = '';
  const currentSlots = formations[activeFormation] || [];

  currentSlots.forEach(slot => {
    const el = document.createElement('div');
    el.className = 'position-slot';
    el.id = `slot-${slot.id}`;
    el.style.left = `${slot.x}%`;
    el.style.top = `${slot.y}%`;
    el.dataset.slotId = slot.id;

    el.innerHTML = `
      <span class="position-slot-label">${slot.label}</span>
      <span class="position-slot-role">${slot.role || ''}</span>
    `;

    // Drop Events
    el.addEventListener('dragover', handleDragOver);
    el.addEventListener('dragleave', handleDragLeave);
    el.addEventListener('drop', handleDrop);

    guidesOverlay.appendChild(el);
  });
}

// 6. Render Placed Players on Pitch
function renderPlacedPlayers() {
  playersOverlay.innerHTML = '';
  const currentSlots = formations[activeFormation] || [];

  currentSlots.forEach(slot => {
    const player = placedPlayers[slot.id];
    if (!player) return; // Empty slot

    const el = document.createElement('div');
    el.className = 'placed-player';
    el.style.left = `${slot.x}%`;
    el.style.top = `${slot.y}%`;
    el.dataset.slotId = slot.id;
    el.dataset.playerId = player.id;

    el.innerHTML = `
      <div class="placed-player-card"></div>
      <div class="placed-player-name">${player.name}</div>
      <button class="remove-player-btn" title="제거">×</button>
    `;

    el.querySelector('.remove-player-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      removePlayer(slot.id);
    });

    playersOverlay.appendChild(el);
  });
}

// 7. Remove Player from Slot
function removePlayer(slotId) {
  if (placedPlayers[slotId]) {
    delete placedPlayers[slotId];
    renderPlacedPlayers();
    renderSquadList(playerSearch.value);
  }
}

// 8. Change Tactics Formation
function setupTacticsButtons() {
  const buttons = document.querySelectorAll('.tactics-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const oldFormationSlots = formations[activeFormation] || [];
      const newFormationName = btn.dataset.formation;
      const newFormationSlots = formations[newFormationName] || [];

      // Smart migration
      const oldPlaced = { ...placedPlayers };
      placedPlayers = {};

      newFormationSlots.forEach(slot => {
        if (oldPlaced[slot.id]) {
          placedPlayers[slot.id] = oldPlaced[slot.id];
          delete oldPlaced[slot.id];
        }
      });

      const remainingPlayers = Object.values(oldPlaced);
      if (remainingPlayers.length > 0) {
        newFormationSlots.forEach(slot => {
          if (!placedPlayers[slot.id] && remainingPlayers.length > 0) {
            placedPlayers[slot.id] = remainingPlayers.shift();
          }
        });
      }

      activeFormation = newFormationName;
      renderPitchGuides();
      renderPlacedPlayers();
      renderSquadList(playerSearch.value);
    });
  });
}

// 9. Search Functionality
function setupSearch() {
  playerSearch.addEventListener('input', (e) => {
    renderSquadList(e.target.value);
  });
}

// 10. Desktop Drag and Drop Logic
let draggedPlayer = null;

function handleDragStart(e) {
  draggedPlayer = {
    id: parseInt(this.dataset.id),
    name: this.dataset.name
  };
  e.dataTransfer.setData('text/plain', this.dataset.id);
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  e.preventDefault();
  this.classList.add('drag-over');
}

function handleDragLeave() {
  this.classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  this.classList.remove('drag-over');

  if (!draggedPlayer) return;

  const slotId = this.dataset.slotId;
  placePlayerInSlot(draggedPlayer, slotId);
  draggedPlayer = null;
}

function placePlayerInSlot(player, slotId) {
  Object.keys(placedPlayers).forEach(sid => {
    if (placedPlayers[sid].id === player.id) {
      delete placedPlayers[sid];
    }
  });

  placedPlayers[slotId] = player;
  renderPlacedPlayers();
  renderSquadList(playerSearch.value);
}

// 11. Mobile Touch Drag and Drop Implementation
let touchDragEl = null;
let touchActiveSlot = null;

function setupMobileTouchForCard(card) {
  card.addEventListener('touchstart', function(e) {
    if (card.classList.contains('placed')) return;

    e.stopPropagation();

    const playerData = {
      id: parseInt(card.dataset.id),
      name: card.dataset.name
    };

    // Create a floating clone
    touchDragEl = document.createElement('div');
    touchDragEl.className = 'placed-player-card';
    touchDragEl.style.position = 'fixed';
    touchDragEl.style.pointerEvents = 'none';
    touchDragEl.style.zIndex = '1000';
    touchDragEl.style.width = '55px';
    touchDragEl.style.height = '55px';
    touchDragEl.style.border = '3px solid var(--accent-color)';
    touchDragEl.style.borderRadius = '50%';
    touchDragEl.style.background = 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-primary) 100%)';
    touchDragEl.style.display = 'flex';
    touchDragEl.style.alignItems = 'center';
    touchDragEl.style.justify = 'center';
    touchDragEl.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
    touchDragEl.innerHTML = '👕';

    const touch = e.touches[0];
    moveTouchDragEl(touch.clientX, touch.clientY);
    document.body.appendChild(touchDragEl);

    document.querySelectorAll('.position-slot').forEach(s => {
      s.style.borderColor = 'var(--accent-color)';
    });

    const touchMoveHandler = function(moveEvent) {
      moveEvent.preventDefault();
      const currentTouch = moveEvent.touches[0];
      moveTouchDragEl(currentTouch.clientX, currentTouch.clientY);
      checkActiveSlotUnderTouch(currentTouch.clientX, currentTouch.clientY);
    };

    const touchEndHandler = function(endEvent) {
      document.removeEventListener('touchmove', touchMoveHandler);
      document.removeEventListener('touchend', touchEndHandler);

      if (touchDragEl) {
        touchDragEl.remove();
        touchDragEl = null;
      }

      document.querySelectorAll('.position-slot').forEach(s => {
        s.style.borderColor = '';
        s.classList.remove('drag-over');
      });

      if (touchActiveSlot) {
        placePlayerInSlot(playerData, touchActiveSlot.dataset.slotId);
        touchActiveSlot = null;
      }
    };

    document.addEventListener('touchmove', touchMoveHandler, { passive: false });
    document.addEventListener('touchend', touchEndHandler);
  });
}

function moveTouchDragEl(clientX, clientY) {
  if (touchDragEl) {
    touchDragEl.style.left = `${clientX - 27}px`;
    touchDragEl.style.top = `${clientY - 27}px`;
  }
}

function checkActiveSlotUnderTouch(clientX, clientY) {
  if (touchActiveSlot) {
    touchActiveSlot.classList.remove('drag-over');
    touchActiveSlot = null;
  }

  const elements = document.elementsFromPoint(clientX, clientY);
  const slot = elements.find(el => el.classList.contains('position-slot'));

  if (slot) {
    touchActiveSlot = slot;
    slot.classList.add('drag-over');
  }
}

// 12. Save and Git Push Integration
function setupSaveButton() {
  saveBtn.addEventListener('click', async () => {
    // Generate default squad name based on date: YYYY-MM-DD 스쿼드
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const defaultSquadName = selectedSquadName || `${formattedDate} 스쿼드`;

    // Prompt for squad name
    const squadNameInput = prompt('저장할 스쿼드 이름을 입력하세요:', defaultSquadName);
    
    if (squadNameInput === null) return; // user cancelled
    
    const squadName = squadNameInput.trim();
    if (!squadName) {
      alert('스쿼드 이름을 올바르게 입력해주세요.');
      return;
    }

    // Show loading overlay
    overlayLoader.classList.add('active');
    closeLoaderBtn.style.display = 'none';
    
    updateLoaderState('스쿼드 저장 중...', '서버에 스쿼드와 포메이션 구성을 기록하고 있습니다.', 'loading');

    // Build payload
    const playersPayload = [];
    const currentSlots = formations[activeFormation] || [];
    
    currentSlots.forEach(slot => {
      const player = placedPlayers[slot.id];
      if (player) {
        playersPayload.push({
          id: player.id,
          name: player.name,
          positionCode: slot.id
        });
      }
    });

    const payload = {
      name: squadName,
      tactics: activeFormation,
      players: playersPayload
    };

    try {
      const res = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('API server returned error');
      
      const result = await res.json();

      if (result.success) {
        // Refresh dropdown list and select the saved squad
        await fetchFormationsList(squadName);
        
        updateLoaderState(
          '저장 완료!', 
          `"${squadName}" 스쿼드가 성공적으로 기록되었습니다.`, 
          'success'
        );
      } else {
        throw new Error(result.message || 'Unknown save error');
      }

    } catch (err) {
      console.error(err);
      updateLoaderState(
        '저장 실패', 
        `오류가 발생했습니다: ${err.message || '네트워크 상태를 확인하세요.'}`, 
        'error'
      );
    } finally {
      closeLoaderBtn.style.display = 'block';
    }
  });

  closeLoaderBtn.addEventListener('click', () => {
    overlayLoader.classList.remove('active');
  });
}

function updateLoaderState(title, desc, status) {
  loaderTitle.textContent = title;
  loaderDesc.textContent = desc;

  const spinner = document.querySelector('.spinner');
  if (status === 'loading') {
    spinner.style.display = 'block';
    spinner.style.borderColor = 'rgba(16, 185, 129, 0.1)';
    spinner.style.borderTopColor = 'var(--accent-color)';
  } else if (status === 'success' || status === 'error') {
    spinner.style.display = 'none';
  }
}

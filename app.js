// 조우킴 축구단 선수 명단
const SQUAD_DATA = [
  { "id": 1, "name": "김재욱" },
  { "id": 2, "name": "감사" },
  { "id": 3, "name": "강혜성" },
  { "id": 4, "name": "강희수" },
  { "id": 5, "name": "규환" },
  { "id": 6, "name": "김건한" },
  { "id": 7, "name": "김남주" },
  { "id": 8, "name": "김시형" },
  { "id": 9, "name": "김영락" },
  { "id": 10, "name": "김주노" },
  { "id": 11, "name": "김창모" },
  { "id": 12, "name": "김태민" },
  { "id": 13, "name": "김학주(남주동생)" },
  { "id": 14, "name": "노상우" },
  { "id": 15, "name": "노유찬" },
  { "id": 16, "name": "도티" },
  { "id": 17, "name": "라퓨타_101" },
  { "id": 18, "name": "배강수" },
  { "id": 19, "name": "배신영" },
  { "id": 20, "name": "배원권" },
  { "id": 21, "name": "서한열" },
  { "id": 22, "name": "손준호" },
  { "id": 23, "name": "아들^^" },
  { "id": 24, "name": "이동욱" },
  { "id": 25, "name": "이승혁" },
  { "id": 26, "name": "이재진" },
  { "id": 27, "name": "이창식" },
  { "id": 28, "name": "재영" },
  { "id": 29, "name": "정주식" },
  { "id": 30, "name": "준형" },
  { "id": 31, "name": "진우" },
  { "id": 32, "name": "쯘" },
  { "id": 33, "name": "최재열" },
  { "id": 34, "name": "최현동(Joel)" },
  { "id": 35, "name": "한규호" },
  { "id": 36, "name": "허경식" },
  { "id": 37, "name": "황정훈" }
];

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
    { id: 'rcb', label: 'RCB', role: '우중앙 수비수', x: 62, y: 72 },
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
let squad = [...SQUAD_DATA];
let currentQuarter = 1;

// Quarters Data Model (No storage - always fresh load)
let quarters = {
  1: { tactics: '4-4-2', placedPlayers: {} },
  2: { tactics: '4-4-2', placedPlayers: {} },
  3: { tactics: '4-4-2', placedPlayers: {} },
  4: { tactics: '4-4-2', placedPlayers: {} }
};

// Active state shortcuts
let activeFormation = '4-4-2';
let placedPlayers = {};

// DOM Elements
const pitch = document.getElementById('pitch');
const guidesOverlay = document.getElementById('guidesOverlay');
const playersOverlay = document.getElementById('playersOverlay');
const squadList = document.getElementById('squadList');
const squadCount = document.getElementById('squadCount');
const playerSearch = document.getElementById('playerSearch');
const resetBtn = document.getElementById('resetBtn');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  squad.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  squadCount.textContent = squad.length;

  setupQuarterTabs();
  setupTacticsButtons();
  setupDragAndDrop();
  setupSearch();
  setupResetButton();
  
  // Render initial quarter
  renderCurrentQuarter();
});

// Setup 1~4 Quarter Tabs
function setupQuarterTabs() {
  const tabs = document.querySelectorAll('.quarter-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Save current state in memory
      quarters[currentQuarter] = {
        tactics: activeFormation,
        placedPlayers: { ...placedPlayers }
      };

      // Switch quarter
      currentQuarter = parseInt(tab.dataset.quarter);
      renderCurrentQuarter();
    });
  });
}

// Render selected quarter configuration
function renderCurrentQuarter() {
  const quarterData = quarters[currentQuarter];
  activeFormation = quarterData.tactics || '4-4-2';
  placedPlayers = quarterData.placedPlayers || {};

  // Update active tactics button
  const tacticsButtons = document.querySelectorAll('.tactics-btn');
  tacticsButtons.forEach(btn => {
    if (btn.dataset.formation === activeFormation) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderPitchGuides();
  renderPlacedPlayers();
  renderSquadList(playerSearch.value);
}

// Render Squad List Pool
function renderSquadList(searchTerm = '') {
  squadList.innerHTML = '';
  const filtered = squad.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    squadList.innerHTML = '<div class="loading">검색 결과가 없습니다.</div>';
    return;
  }

  // Check if player is already placed in CURRENT quarter
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

    card.addEventListener('dragstart', handleDragStart);
    setupMobileTouchForCard(card);

    squadList.appendChild(card);
  });
}

// Render Pitch Slots/Guides
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

    el.addEventListener('dragover', handleDragOver);
    el.addEventListener('dragleave', handleDragLeave);
    el.addEventListener('drop', handleDrop);

    guidesOverlay.appendChild(el);
  });
}

// Render Placed Players on Pitch
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

// Remove Player from Slot
function removePlayer(slotId) {
  if (placedPlayers[slotId]) {
    delete placedPlayers[slotId];
    
    // Sync memory
    quarters[currentQuarter].placedPlayers = { ...placedPlayers };

    renderPlacedPlayers();
    renderSquadList(playerSearch.value);
  }
}

// Change Tactics Formation
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
      
      // Sync memory
      quarters[currentQuarter].tactics = activeFormation;
      quarters[currentQuarter].placedPlayers = { ...placedPlayers };

      renderPitchGuides();
      renderPlacedPlayers();
      renderSquadList(playerSearch.value);
    });
  });
}

// Search
function setupSearch() {
  playerSearch.addEventListener('input', (e) => {
    renderSquadList(e.target.value);
  });
}

// Desktop Drag and Drop Logic
let draggedPlayer = null;

function handleDragStart(e) {
  draggedPlayer = {
    id: parseInt(this.dataset.id),
    name: this.dataset.name
  };
  e.dataTransfer.setData('text/plain', this.dataset.id);
  e.dataTransfer.effectAllowed = 'move';
}

// Drag and Drop implementation
function setupDragAndDrop() {
  pitch.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
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

  // Sync memory
  quarters[currentQuarter].placedPlayers = { ...placedPlayers };

  renderPlacedPlayers();
  renderSquadList(playerSearch.value);
}

// Mobile Touch Drag and Drop Implementation
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

// Reset Button Logic
function setupResetButton() {
  resetBtn.addEventListener('click', () => {
    if (confirm(`정말 ${currentQuarter}쿼터 포메이션을 비우시겠습니까?`)) {
      placedPlayers = {};
      activeFormation = '4-4-2';

      quarters[currentQuarter] = {
        tactics: activeFormation,
        placedPlayers: {}
      };
      
      renderCurrentQuarter();
    }
  });
}

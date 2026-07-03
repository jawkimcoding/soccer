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
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 88 },
    { id: 'lb', label: 'LB', role: '좌측 수비수', x: 15, y: 68 },
    { id: 'lcb', label: 'LCB', role: '좌중앙 수비수', x: 38, y: 70 },
    { id: 'rcb', label: 'RCB', role: '우중앙 수비수', x: 62, y: 70 },
    { id: 'rb', label: 'RB', role: '우측 수비수', x: 85, y: 68 },
    { id: 'lm', label: 'LM', role: '좌측 미드필더', x: 15, y: 44 },
    { id: 'lcm', label: 'LCM', role: '좌중앙 미드필더', x: 38, y: 47 },
    { id: 'rcm', label: 'RCM', role: '우중앙 미드필더', x: 62, y: 47 },
    { id: 'rm', label: 'RM', role: '우측 미드필더', x: 85, y: 44 },
    { id: 'lst', label: 'LS', role: '좌측 스트라이커', x: 35, y: 20 },
    { id: 'rst', label: 'RS', role: '우측 스트라이커', x: 65, y: 20 }
  ],
  '4-3-3': [
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 88 },
    { id: 'lb', label: 'LB', role: '좌측 수비수', x: 15, y: 68 },
    { id: 'lcb', label: 'LCB', role: '좌중앙 수비수', x: 38, y: 70 },
    { id: 'rcb', label: 'RCB', role: '우중앙 수비수', x: 62, y: 70 },
    { id: 'rb', label: 'RB', role: '우측 수비수', x: 85, y: 68 },
    { id: 'dm', label: 'DM', role: '수비형 미드필더', x: 50, y: 57 },
    { id: 'lcm', label: 'LCM', role: '좌중앙 미드필더', x: 30, y: 43 },
    { id: 'rcm', label: 'RCM', role: '우중앙 미드필더', x: 70, y: 43 },
    { id: 'lw', label: 'LW', role: '좌측 윙어', x: 15, y: 21 },
    { id: 'st', label: 'ST', role: '중앙 스트라이커', x: 50, y: 17 },
    { id: 'rw', label: 'RW', role: '우측 윙어', x: 85, y: 21 }
  ],
  '3-5-2': [
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 88 },
    { id: 'lcb', label: 'LCB', role: '좌측 센터백', x: 28, y: 70 },
    { id: 'cb', label: 'CB', role: '중앙 센터백', x: 50, y: 73 },
    { id: 'rcb', label: 'RCB', role: '우측 센터백', x: 72, y: 70 },
    { id: 'lwb', label: 'LWB', role: '좌측 윙백', x: 12, y: 54 },
    { id: 'rwb', label: 'RWB', role: '우측 윙백', x: 88, y: 54 },
    { id: 'ldm', label: 'LDM', role: '좌측 수미', x: 35, y: 51 },
    { id: 'rdm', role: 'RDM', role: '우측 수미', x: 65, y: 51 },
    { id: 'am', label: 'AM', role: '공격형 미드필더', x: 50, y: 34 },
    { id: 'lst', label: 'LS', role: '좌측 스트라이커', x: 35, y: 18 },
    { id: 'rst', label: 'RS', role: '우측 스트라이커', x: 65, y: 18 }
  ],
  '4-2-3-1': [
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 88 },
    { id: 'lb', label: 'LB', role: '좌측 수비수', x: 15, y: 68 },
    { id: 'lcb', label: 'LCB', role: '좌중앙 수비수', x: 38, y: 70 },
    { id: 'rcb', label: 'RCB', role: '우중앙 수비수', x: 62, y: 70 },
    { id: 'rb', label: 'RB', role: '우측 수비수', x: 85, y: 68 },
    { id: 'ldm', label: 'LDM', role: '좌측 수미', x: 35, y: 54 },
    { id: 'rdm', label: 'RDM', role: '우측 수미', x: 65, y: 54 },
    { id: 'lam', label: 'LAM', role: '좌측 공미', x: 20, y: 34 },
    { id: 'cam', label: 'CAM', role: '중앙 공미', x: 50, y: 31 },
    { id: 'ram', label: 'RAM', role: '우측 공미', x: 80, y: 34 },
    { id: 'st', label: 'ST', role: '스트라이커', x: 50, y: 16 }
  ],
  '5-3-2': [
    { id: 'gk', label: 'GK', role: '골키퍼', x: 50, y: 88 },
    { id: 'lwb', label: 'LWB', role: '좌측 윙백', x: 12, y: 64 },
    { id: 'lcb', label: 'LCB', role: '좌중앙 수비수', x: 32, y: 70 },
    { id: 'cb', label: 'CB', role: '중앙 수비수', x: 50, y: 72 },
    { id: 'rcb', label: 'RCB', role: '우중앙 수비수', x: 68, y: 70 },
    { id: 'rwb', label: 'RWB', role: '우측 윙백', x: 88, y: 64 },
    { id: 'lcm', label: 'LCM', role: '좌중앙 미드필더', x: 30, y: 45 },
    { id: 'cm', label: 'CM', role: '중앙 미드필더', x: 50, y: 47 },
    { id: 'rcm', label: 'RCM', role: '우중앙 미드필더', x: 70, y: 45 },
    { id: 'lst', label: 'LS', role: '좌측 스트라이커', x: 35, y: 20 },
    { id: 'rst', label: 'RS', role: '우측 스트라이커', x: 65, y: 20 }
  ]
};

// Application State
let squad = [...SQUAD_DATA];
let currentQuarter = 1;

// Quarters Data Model (No storage)
let quarters = {
  1: { tactics: '4-4-2', placedPlayers: {} },
  2: { tactics: '4-4-2', placedPlayers: {} },
  3: { tactics: '4-4-2', placedPlayers: {} },
  4: { tactics: '4-4-2', placedPlayers: {} }
};

// Active state shortcuts
let activeFormation = '4-4-2';
let placedPlayers = {};

// Click-to-Place Selection State Tracker
let selectedPlayerForPlacement = null;

// DOM Elements
const pitch = document.getElementById('pitch');
const guidesOverlay = document.getElementById('guidesOverlay');
const playersOverlay = document.getElementById('playersOverlay');
const squadList = document.getElementById('squadList');
const squadCount = document.getElementById('squadCount');
const playerSearch = document.getElementById('playerSearch');
const resetBtn = document.getElementById('resetBtn');
const liveBoardQuarter = document.getElementById('liveBoardQuarter');

// Vector SVG Jersey Designer (LINEUP11 Replica)
function getJerseySvg(isGk) {
  const mainColor = isGk ? '#2ecc71' : '#1e3a5f'; // Bright Green/Lime vs Deep Navy
  const trimColor = isGk ? '#27ae60' : '#15253b'; // Secondary sleeves color
  const outlineColor = '#ffffff';

  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="50" cy="88" rx="26" ry="6" fill="rgba(0,0,0,0.25)" filter="blur(2px)"/>
      <!-- Jersey Silhouette -->
      <path d="M 28 22 
               L 42 14 
               A 11 11 0 0 1 58 14 
               L 72 22 
               L 84 32 
               L 74 43 
               L 66 36 
               L 66 84 
               L 34 84 
               L 34 36 
               L 26 43 
               L 16 32 
               Z" 
            fill="${mainColor}" 
            stroke="${outlineColor}" 
            stroke-width="3" 
            stroke-linejoin="round"/>
      <!-- Sleeves trims -->
      <path d="M 16 32 L 26 43" stroke="${trimColor}" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M 84 32 L 74 43" stroke="${trimColor}" stroke-width="4.5" stroke-linecap="round"/>
      <!-- V-Neck Collar -->
      <path d="M 42 14 A 11 11 0 0 0 58 14 L 50 23 Z" fill="${trimColor}" stroke="${outlineColor}" stroke-width="1.5"/>
      <!-- Chest Emblem Badge -->
      <circle cx="39" cy="32" r="3.5" fill="#f1c40f"/>
      <line x1="39" y1="30" x2="39" y2="34" stroke="#fff" stroke-width="1"/>
      <line x1="37" y1="32" x2="41" y2="32" stroke="#fff" stroke-width="1"/>
    </svg>
  `;
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  squad.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  squadCount.textContent = squad.length;

  setupQuarterTabs();
  setupTacticsButtons();
  setupDragAndDrop();
  setupSearch();
  setupResetButton();
  setupOutsideClickCancel();
  
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

      cancelPlacementSelection();

      // Save current state in memory
      quarters[currentQuarter] = {
        tactics: activeFormation,
        placedPlayers: { ...placedPlayers }
      };

      // Switch quarter
      currentQuarter = parseInt(tab.dataset.quarter);
      liveBoardQuarter.textContent = currentQuarter;
      
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

    if (selectedPlayerForPlacement && 
        selectedPlayerForPlacement.id === player.id && 
        selectedPlayerForPlacement.fromSlotId === null) {
      card.classList.add('selected');
    }

    card.innerHTML = `
      <span class="player-card-icon">👕</span>
      <span class="player-card-name" title="${player.name}">${player.name}</span>
    `;

    // Desktop HTML5 dragstart
    card.addEventListener('dragstart', handleDragStart);

    // Hybrid click selection (No mobile touch listeners to prevent click suppression)
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPlaced) return;
      handleSquadPlayerClick(player);
    });

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

    if (selectedPlayerForPlacement) {
      el.classList.add('awaiting-placement');
    }

    el.innerHTML = `
      <span class="position-slot-label">${slot.label}</span>
    `;

    // Drag events
    el.addEventListener('dragover', handleDragOver);
    el.addEventListener('dragleave', handleDragLeave);
    el.addEventListener('drop', handleDrop);

    // Click/Touch-to-Place slot placement
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      handleSlotClick(slot.id);
    });

    guidesOverlay.appendChild(el);
  });
}

// Render Placed Players on Pitch
function renderPlacedPlayers() {
  playersOverlay.innerHTML = '';
  const currentSlots = formations[activeFormation] || [];

  currentSlots.forEach(slot => {
    const player = placedPlayers[slot.id];
    if (!player) return;

    const el = document.createElement('div');
    el.style.left = `${slot.x}%`;
    el.style.top = `${slot.y}%`;
    el.dataset.slotId = slot.id;
    el.dataset.playerId = player.id;
    el.className = 'placed-player';

    if (selectedPlayerForPlacement && 
        selectedPlayerForPlacement.id === player.id && 
        selectedPlayerForPlacement.fromSlotId === slot.id) {
      el.classList.add('selected');
    }

    // Determine if player is GoalKeeper to color green jersey
    const isGk = slot.id.toLowerCase() === 'gk';
    
    // Inject Vector Jersey Graphic instead of raw emojis
    el.innerHTML = `
      <div class="placed-player-card">
        ${getJerseySvg(isGk)}
      </div>
      <div class="placed-player-name">${player.name}</div>
      <button class="remove-player-btn" title="제거">×</button>
    `;

    // Remove handler
    el.querySelector('.remove-player-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      removePlayer(slot.id);
    });

    // Click-to-Place (Select placed player to move)
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      handlePlacedPlayerClick(player, slot.id);
    });

    playersOverlay.appendChild(el);
  });
}

// Remove Player from Slot
function removePlayer(slotId) {
  if (placedPlayers[slotId]) {
    if (selectedPlayerForPlacement && selectedPlayerForPlacement.fromSlotId === slotId) {
      cancelPlacementSelection();
    }
    
    delete placedPlayers[slotId];
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
  cancelPlacementSelection(); 
  draggedPlayer = {
    id: parseInt(this.dataset.id),
    name: this.dataset.name
  };
  e.dataTransfer.setData('text/plain', this.dataset.id);
  e.dataTransfer.effectAllowed = 'move';
}

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
  quarters[currentQuarter].placedPlayers = { ...placedPlayers };

  renderPlacedPlayers();
  renderSquadList(playerSearch.value);
}

// ==========================================================================
// 100% Reliable Click-to-Place Handlers (Touch friendly, no scroll blocking)
// ==========================================================================

// Click on waiting list card
function handleSquadPlayerClick(player) {
  if (selectedPlayerForPlacement && 
      selectedPlayerForPlacement.id === player.id && 
      selectedPlayerForPlacement.fromSlotId === null) {
    cancelPlacementSelection();
    return;
  }

  selectedPlayerForPlacement = {
    id: player.id,
    name: player.name,
    fromSlotId: null
  };

  renderSquadList(playerSearch.value);
  renderPitchGuides();
  renderPlacedPlayers();
}

// Click on placed player inside pitch
function handlePlacedPlayerClick(player, slotId) {
  if (selectedPlayerForPlacement && 
      selectedPlayerForPlacement.id === player.id && 
      selectedPlayerForPlacement.fromSlotId === slotId) {
    cancelPlacementSelection();
    return;
  }

  selectedPlayerForPlacement = {
    id: player.id,
    name: player.name,
    fromSlotId: slotId
  };

  renderSquadList(playerSearch.value);
  renderPitchGuides();
  renderPlacedPlayers();
}

// Click on a pitch slot
function handleSlotClick(slotId) {
  if (!selectedPlayerForPlacement) return;

  const player = {
    id: selectedPlayerForPlacement.id,
    name: selectedPlayerForPlacement.name
  };

  // Relocation remove old
  if (selectedPlayerForPlacement.fromSlotId) {
    delete placedPlayers[selectedPlayerForPlacement.fromSlotId];
  }

  placePlayerInSlot(player, slotId);
  cancelPlacementSelection();
}

// Cancel current selection
function cancelPlacementSelection() {
  if (selectedPlayerForPlacement === null) return;
  selectedPlayerForPlacement = null;
  
  renderSquadList(playerSearch.value);
  renderPitchGuides();
  renderPlacedPlayers();
}

// Outside click cancellation
function setupOutsideClickCancel() {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.position-slot') && 
        !e.target.closest('.player-card') && 
        !e.target.closest('.placed-player') && 
        !e.target.closest('.quarter-btn') && 
        !e.target.closest('.tactics-btn') &&
        !e.target.closest('.reset-button')) {
      cancelPlacementSelection();
    }
  });
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
      
      cancelPlacementSelection();
      renderCurrentQuarter();
    }
  });
}

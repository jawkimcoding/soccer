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

// Click-to-Place State Tracker
// Stores: null OR { id: number, name: string, fromSlotId: string | null }
let selectedPlayerForPlacement = null;

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

      // Clear any pending selection on quarter change
      cancelPlacementSelection();

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

    // Apply selected styling if this player is chosen for Click-to-Place
    if (selectedPlayerForPlacement && 
        selectedPlayerForPlacement.id === player.id && 
        selectedPlayerForPlacement.fromSlotId === null) {
      card.classList.add('selected');
    }

    card.innerHTML = `
      <span class="player-card-icon">👕</span>
      <span class="player-card-name" title="${player.name}">${player.name}</span>
    `;

    // 1. Drag Start
    card.addEventListener('dragstart', handleDragStart);
    
    // 2. Mobile touch dragging
    setupMobileTouchForCard(card);

    // 3. Click-to-Place (Selection trigger)
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPlaced) return;
      handleSquadPlayerClick(player, card);
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

    // Show awaiting glow if a player is selected to be placed
    if (selectedPlayerForPlacement) {
      el.classList.add('awaiting-placement');
    }

    el.innerHTML = `
      <span class="position-slot-label">${slot.label}</span>
      <span class="position-slot-role">${slot.role || ''}</span>
    `;

    // Drag drop events
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

    // Determine position specific neon class
    let neonClass = 'neon-mf'; 
    const sid = slot.id.toLowerCase();
    if (sid.includes('gk')) {
      neonClass = 'neon-gk'; 
    } else if (sid.includes('cb') || sid.includes('lb') || sid.includes('rb') || sid.includes('wb')) {
      neonClass = 'neon-df'; 
    } else if (sid.includes('st') || sid.includes('st') || sid.includes('lw') || sid.includes('rw') || sid === 'ls' || sid === 'rs') {
      neonClass = 'neon-fw'; 
    }

    el.className = `placed-player ${neonClass}`;

    // Apply selection styling if this placed player is selected for moving
    if (selectedPlayerForPlacement && 
        selectedPlayerForPlacement.id === player.id && 
        selectedPlayerForPlacement.fromSlotId === slot.id) {
      el.classList.add('selected');
    }

    el.innerHTML = `
      <div class="placed-player-card"></div>
      <div class="placed-player-name">${player.name}</div>
      <button class="remove-player-btn" title="제거">×</button>
    `;

    // Remove
    el.querySelector('.remove-player-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      removePlayer(slot.id);
    });

    // Mobile touch drag
    setupMobileTouchForPlacedPlayer(el, slot.id, player);

    // Click/Touch-to-Place (Select placed player to move)
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
    // If the removed player was currently selected, cancel selection
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

      // Maintain selection state during tactics change
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
  cancelPlacementSelection(); // cancel click selection when drag starts
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
  // Prevent duplicate
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

// ==========================================================================
// Click-to-Place & Touch-to-Place Feature Handlers (Hybrid Mode)
// ==========================================================================

// 1. Click on waiting list player card
function handleSquadPlayerClick(player, cardEl) {
  // If clicked the already selected player, cancel selection
  if (selectedPlayerForPlacement && 
      selectedPlayerForPlacement.id === player.id && 
      selectedPlayerForPlacement.fromSlotId === null) {
    cancelPlacementSelection();
    return;
  }

  // Set selected player
  selectedPlayerForPlacement = {
    id: player.id,
    name: player.name,
    fromSlotId: null
  };

  // Re-render UI to show selection highlights and awaiting guides
  renderSquadList(playerSearch.value);
  renderPitchGuides();
  renderPlacedPlayers();
}

// 2. Click on placed player inside pitch (prepare for movement)
function handlePlacedPlayerClick(player, slotId) {
  // If clicked the already selected placed player, cancel selection
  if (selectedPlayerForPlacement && 
      selectedPlayerForPlacement.id === player.id && 
      selectedPlayerForPlacement.fromSlotId === slotId) {
    cancelPlacementSelection();
    return;
  }

  // Set selected player for relocation
  selectedPlayerForPlacement = {
    id: player.id,
    name: player.name,
    fromSlotId: slotId
  };

  renderSquadList(playerSearch.value);
  renderPitchGuides();
  renderPlacedPlayers();
}

// 3. Click on a pitch position slot
function handleSlotClick(slotId) {
  if (!selectedPlayerForPlacement) return;

  const player = {
    id: selectedPlayerForPlacement.id,
    name: selectedPlayerForPlacement.name
  };

  // If this is a relocation, remove player from the previous slot
  if (selectedPlayerForPlacement.fromSlotId) {
    delete placedPlayers[selectedPlayerForPlacement.fromSlotId];
  }

  // Place player in the new slot
  placePlayerInSlot(player, slotId);

  // Clear selection
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

// Cancel selection when clicking outside pitch slots and player cards
function setupOutsideClickCancel() {
  document.addEventListener('click', (e) => {
    // If clicked element is not a position slot, player card, or placed player, cancel selection
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

// ==========================================================================
// Mobile Touch Drag and Drop Implementation
// ==========================================================================
let touchDragEl = null;
let touchActiveSlot = null;

function findSlotAtPoint(clientX, clientY) {
  let matchedSlot = null;
  const slots = document.querySelectorAll('.position-slot');
  
  slots.forEach(slot => {
    const rect = slot.getBoundingClientRect();
    if (clientX >= rect.left && clientX <= rect.right &&
        clientY >= rect.top && clientY <= rect.bottom) {
      matchedSlot = slot;
    }
  });
  
  return matchedSlot;
}

// Mobile touch dragging for pool list players
function setupMobileTouchForCard(card) {
  card.addEventListener('touchstart', function(e) {
    if (card.classList.contains('placed')) return;

    // Clear click selection when drag starts
    cancelPlacementSelection();

    e.preventDefault();
    e.stopPropagation();

    const playerData = {
      id: parseInt(card.dataset.id),
      name: card.dataset.name
    };

    createTouchFloatingClone(playerData.name, e.touches[0].clientX, e.touches[0].clientY);

    document.querySelectorAll('.position-slot').forEach(s => {
      s.style.borderColor = 'var(--accent-color)';
    });

    const touchMoveHandler = function(moveEvent) {
      moveEvent.preventDefault();
      const currentTouch = moveEvent.touches[0];
      moveTouchDragEl(currentTouch.clientX, currentTouch.clientY);
      
      const slot = findSlotAtPoint(currentTouch.clientX, currentTouch.clientY);
      if (touchActiveSlot) {
        touchActiveSlot.classList.remove('drag-over');
      }
      touchActiveSlot = slot;
      if (touchActiveSlot) {
        touchActiveSlot.classList.add('drag-over');
      }
    };

    const touchEndHandler = function(endEvent) {
      document.removeEventListener('touchmove', touchMoveHandler);
      document.removeEventListener('touchend', touchEndHandler);

      removeTouchFloatingClone();

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
  }, { passive: false });
}

// Mobile touch dragging for already placed players
function setupMobileTouchForPlacedPlayer(placedEl, currentSlotId, player) {
  placedEl.addEventListener('touchstart', function(e) {
    // Clear click selection when drag starts
    cancelPlacementSelection();

    e.preventDefault();
    e.stopPropagation();

    createTouchFloatingClone(player.name, e.touches[0].clientX, e.touches[0].clientY);
    placedEl.style.opacity = '0.2';

    document.querySelectorAll('.position-slot').forEach(s => {
      s.style.borderColor = 'var(--accent-color)';
    });

    const touchMoveHandler = function(moveEvent) {
      moveEvent.preventDefault();
      const currentTouch = moveEvent.touches[0];
      moveTouchDragEl(currentTouch.clientX, currentTouch.clientY);

      const slot = findSlotAtPoint(currentTouch.clientX, currentTouch.clientY);
      if (touchActiveSlot) {
        touchActiveSlot.classList.remove('drag-over');
      }
      touchActiveSlot = slot;
      if (touchActiveSlot) {
        touchActiveSlot.classList.add('drag-over');
      }
    };

    const touchEndHandler = function(endEvent) {
      document.removeEventListener('touchmove', touchMoveHandler);
      document.removeEventListener('touchend', touchEndHandler);

      removeTouchFloatingClone();
      placedEl.style.opacity = '1';

      document.querySelectorAll('.position-slot').forEach(s => {
        s.style.borderColor = '';
        s.classList.remove('drag-over');
      });

      if (touchActiveSlot) {
        const newSlotId = touchActiveSlot.dataset.slotId;
        delete placedPlayers[currentSlotId];
        placePlayerInSlot(player, newSlotId);
        touchActiveSlot = null;
      } else {
        const pitchRect = pitch.getBoundingClientRect();
        const touch = endEvent.changedTouches[0];
        
        if (touch.clientX < pitchRect.left || touch.clientX > pitchRect.right ||
            touch.clientY < pitchRect.top || touch.clientY > pitchRect.bottom) {
          removePlayer(currentSlotId);
        }
      }
    };

    document.addEventListener('touchmove', touchMoveHandler, { passive: false });
    document.addEventListener('touchend', touchEndHandler);
  }, { passive: false });
}

function createTouchFloatingClone(name, clientX, clientY) {
  if (touchDragEl) touchDragEl.remove();

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
  touchDragEl.style.justifyContent = 'center';
  touchDragEl.style.boxShadow = '0 10px 25px rgba(0,0,0,0.6)';
  touchDragEl.innerHTML = '👕';

  moveTouchDragEl(clientX, clientY);
  document.body.appendChild(touchDragEl);
}

function moveTouchDragEl(clientX, clientY) {
  if (touchDragEl) {
    touchDragEl.style.left = `${clientX - 27}px`;
    touchDragEl.style.top = `${clientY - 27}px`;
  }
}

function removeTouchFloatingClone() {
  if (touchDragEl) {
    touchDragEl.remove();
    touchDragEl = null;
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

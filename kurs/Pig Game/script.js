'use strict';
let pigGame = {
  player1: {
    score: 0,
    current: 0,
    scoreSpan: '#score--0',
    currentSpan: '#current--0',
    div: '.player--0',
    name: '#name--0',
  },
  player2: {
    score: 0,
    current: 0,
    scoreSpan: '#score--1',
    currentSpan: '#current--1',
    div: '.player--1',
    name: '#name--1',
  },
  activeTurn: true,
  gameOver: false,
};
const player1 = pigGame.player1;
const player2 = pigGame.player2;
let activeTurn = pigGame.activeTurn;
let gameOver = pigGame.gameOver;
document.querySelector('.btn--roll').addEventListener('click', buttonRoll);
document.querySelector('.btn--hold').addEventListener('click', buttonHold);
document.querySelector('.btn--new').addEventListener('click', newGame);
function buttonRoll() {
  // sprawdza czy gra się nie zakończyła oraz który gracz ma turę
  if (!gameOver) {
    removeHidden();
    let random = randomNumber();
    if (activeTurn) {
      updateCurrentScore(random, player1);
    } else if (!activeTurn) {
      updateCurrentScore(random, player2);
    }
  }
}
function buttonHold() {
  // sprawdza czy gra się nie zakończyła
  // zmienia gracza po naciśnięciu hold
  if (!gameOver) {
    if (activeTurn) {
      whosActive(player2, player1);
      switchPlayers(player1);
      document.querySelector('.dice').classList.add('hidden');
      activeTurn = false;
    } else if (!activeTurn) {
      whosActive(player1, player2);
      switchPlayers(player2);
      document.querySelector('.dice').classList.add('hidden');
      activeTurn = true;
    }
  }
}
function updateCurrentScore(random, activePlayer) {
  // aktualizuje wynik aktualny (current) po każdym losowaniu (roll dice)
  // jeśli gracz wylosuje 1 jego wynik aktualny (current) się zeruje i rozpoczyna się tura drugiego gracza
  if (random === 1) {
    activePlayer.current = 0;
    if (activeTurn) {
      whosActive(player2, player1);
      activeTurn = false;
    } else if (!activeTurn) {
      whosActive(player1, player2);
      activeTurn = true;
    }
  } else {
    activePlayer.current += random;
  }
  document.querySelector(`${activePlayer.currentSpan}`).textContent =
    activePlayer.current;
}

function randomNumber() {
  // losuje numer od 1 do 6 i wybiera na jego podstawie img kostki o takim samym numerze oczek co numer wylosowany
  let random = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${random}.png`;
  return random;
}
function removeHidden() {
  // usuwa klasę hidden początkowo nałożoną na img kostki do gry
  let image = document.querySelector('.dice').classList;
  if (image.contains('hidden')) {
    image.remove('hidden');
  } else {
    return;
  }
}
function newGame() {
  // przywraca wszystkie ustawienia do pierwotnych i rozpoczyna nową grę
  resetAllScores();
  removeClasses();
  gameOver = false;
  activeTurn = true;
}

function switchPlayers(activePlayer) {
  // aktualizuje ogólny wynik (score) aktywnego gracza o wartość aktualnego wyniku (current) po naciśnieciu hold
  activePlayer.score += activePlayer.current;
  activePlayer.current = 0;
  document.querySelector(`${activePlayer.scoreSpan}`).textContent =
    activePlayer.score;
  document.querySelector(`${activePlayer.currentSpan}`).textContent =
    activePlayer.current;
  // sprawdza czy gracz wygrał
  if (activePlayer.score >= 100) {
    winGame(activePlayer);
  }
}
function winGame(activePlayer) {
  // zmienia layout gracza, który wygrał
  gameOver = true;
  document.querySelector(`${activePlayer.div}`).classList.add('player--winner');
  document
    .querySelector(`${activePlayer.name}`)
    .classList.add('player--winner');
}
function resetAllScores() {
  // resetuje wyniki graczy po nacisnieciu new game oraz ukrywa img kości
  player1.score = 0;
  player1.current = 0;
  player2.score = 0;
  player2.current = 0;
  document.querySelector(`${player1.currentSpan}`).textContent = player1.score;
  document.querySelector(`${player2.currentSpan}`).textContent = player2.score;
  document.querySelector(`${player1.scoreSpan}`).textContent = player1.score;
  document.querySelector(`${player2.scoreSpan}`).textContent = player2.score;
  document.querySelector('.dice').classList.add('hidden');
}
function removeClasses() {
  // przywraca layout do stanu pierwotnego po nacisnieciu new game
  let winner1 = document.querySelector(`${player1.div}`).classList;
  let winner2 = document.querySelector(`${player2.div}`).classList;
  let name1 = document.querySelector(`${player1.name}`).classList;
  let name2 = document.querySelector(`${player2.name}`).classList;

  if (winner1.contains('player--winner')) {
    winner1.remove('player--winner');
  } else if (winner2.contains('player--winner')) {
    winner2.remove('player--winner');
  }
  if (name1.contains('player--winner')) {
    name1.remove('player--winner');
  } else if (name2.contains('player--winner')) {
    name2.remove('player--winner');
  }
  if (winner2.contains('player--active')) {
    winner2.remove('player--active');
    winner1.add('player--active');
  }
}
function whosActive(activePlayer, unactivePlayer) {
  //zmienia layout aktywnego gracza
  document.querySelector(`${activePlayer.div}`).classList.add('player--active');
  document
    .querySelector(`${unactivePlayer.div}`)
    .classList.remove('player--active');
}

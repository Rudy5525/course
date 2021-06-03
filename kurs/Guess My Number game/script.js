'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
let turnIsOver = false;
document.querySelector('.again').addEventListener('click', againButton);
document.querySelector(`.check`).addEventListener('click', checkButton);

function checkButton() {
  //funkcja przycisku check
  if (turnIsOver === false) {
    let yourNumber = takeNumber();
    compareNumbers(yourNumber, randomNumber);
  }
}
function againButton() {
  //funkcja przycisku try again
  resetScore();
}
function resetScore() {
  // resetuje wyniki
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  score = Number(document.querySelector('.score').textContent);
  document.body.style.backgroundColor = '#222';
  turnIsOver = false;
  document.querySelector('.guess').disabled = false;
}
function takeNumber() {
  // zwraca podany numer lub błąd
  let number = Number(document.querySelector('.guess').value);
  if (number >= 1 && number <= 20 && Number.isInteger(number)) {
    return number;
  } else {
    return (document.querySelector('.message').textContent =
      'Wrong number! Choose only decimal numbers between 1 and 20');
  }
}
function compareNumbers(yourNumber, randomNumber) {
  // porównuje liczbe wpisaną z liczbą wylosowaną
  if (yourNumber === randomNumber) {
    gameWin(yourNumber);
    updateHighScore();
  } else if (yourNumber < randomNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    score > 0 ? updateScore() : gameOver();
  } else if (yourNumber > randomNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    score > 0 ? updateScore() : gameOver();
  }
}
function gameOver() {
  // odpala się gdy gracz przegra
  document.querySelector('.message').textContent = 'You lost!';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = true;
  turnIsOver = true;
}
function gameWin(yourNumber) {
  // odpala się gdy gracz wygra
  document.querySelector('.number').textContent = yourNumber;
  document.querySelector('.message').textContent = 'Correct number!';
  document.body.style.backgroundColor = 'green';
  document.querySelector('.guess').disabled = true;
  turnIsOver = true;
}
function updateScore() {
  // zmniejsza wynik o 1 w przypadku pomyłki
  score -= 1;
  document.querySelector('.score').textContent = score;
}
function updateHighScore() {
  // aktualizuje najwyzszy uzyskany wynik
  if (highscore < score) {
    highscore = score;
    document.querySelector('.highscore').textContent = score;
  }
}

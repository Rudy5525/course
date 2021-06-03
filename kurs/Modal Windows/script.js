'use strict';
addEvents();

function showModal() {
  let hidden = document.querySelectorAll('.hidden');
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
}
function closeModal() {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
}
function addEvents() {
  let buttons = document.querySelectorAll('.show-modal');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showModal);
  }
  document.querySelector('.close-modal').addEventListener('click', closeModal);
  document.querySelector('.overlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

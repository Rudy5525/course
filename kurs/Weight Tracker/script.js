'use strict';
// let data = require('./history.json');
// console.log(data.date);
document.querySelector('.submit').addEventListener('click', closeModal);
document.querySelector('.btn').addEventListener('click', showModal);
function closeModal() {
  let weight = document.querySelector('#weight').value;
  let date = document.querySelector('#date').value;
  let modalWindow = document.querySelector('.modal').classList.add('hidden');
  showResults(weight, date);
}
function showModal() {
  let modalWindows = document
    .querySelector('.modal')
    .classList.remove('hidden');
}
function showResults(weight, date) {
  let difference = 0;
  let arr = [1, date, weight, difference];
  let table = document.querySelector('.table');
  let row = table.insertRow(-1);
  for (let i = 0; i < 4; i++) {
    let cell = row.insertCell(i);
    cell.textContent = arr[i];
  }
}

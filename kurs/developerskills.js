'use strict';
/*
const temperatures1 = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [
  2,
  -5,
  -10,
  12,
  11,
  `error`,
  7,
  15,
  -2,
  -1,
  0,
  5,
  'error',
];
console.log(calcAmplitude(temperatures1, temperatures2));

function calcAmplitude(array1, array2) {
  let array = concatArrays(array1, array2);
  let sortedArray = pullString(array);
  let min = minValue(sortedArray);
  let max = maxValue(sortedArray);
  let amplitude = max - min;
  return amplitude;
}

function maxValue(sortedArray) {
  let max = sortedArray[0];
  for (let i = 0; i < sortedArray.length; i++) {
    if (max < sortedArray[i]) {
      max = sortedArray[i];
    } else {
      continue;
    }
  }
  return max;
}
function minValue(sortedArray) {
  let min = sortedArray[0];
  for (let i = 0; i < sortedArray.length; i++) {
    if (min > sortedArray[i]) {
      min = sortedArray[i];
    } else {
      continue;
    }
  }
  return min;
}
function pullString(array) {
  let sortedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      continue;
    } else {
      sortedArray.push(array[i]);
    }
  }
  return sortedArray;
}
function concatArrays(array1, array2) {
  return array1.concat(array2);
}
*/

// Coding challenge #7
/*
let arr = [12, 5, -5, 0, 4];

function printForecast(array) {
  let a = array;
  let napis = '';
  for (let i = 0; i < a.length; i++) {
    napis += `... ${a[i]} degrees in ${i + 1} days`;
  }
  return napis;
}
console.log(printForecast(arr));
*/

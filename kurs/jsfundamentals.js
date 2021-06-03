'use strict';
// Coding challenge #1 and #2

/*
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;
let markHigherBMI;

let bmiMark = (massMark / (heightMark * heightMark)).toFixed(2);
let bmiJohn = (massJohn / (heightJohn * heightJohn)).toFixed(2);

if (bmiMark > bmiJohn) {
    markHigherBMI = true;
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    markHigherBMI = false;
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}
*/

// Coding challenge #3

/*
let scoreDolphins = [97, 112, 101];
let scoreKoalas = [109, 95, 106];
let minimumScore = 100;

let avrDolphinsScore = (scoreDolphins[0] + scoreDolphins[1] + scoreDolphins[2]) / 3;
let avrKoalasScore = (scoreKoalas[0] + scoreKoalas[1] + scoreKoalas[2]) / 3;

if (avrDolphinsScore > avrKoalasScore && avrDolphinsScore >= minimumScore) {
    console.log(`Dolphins won!`);
} else if (avrDolphinsScore < avrKoalasScore && avrKoalasScore >= minimumScore) {
    console.log(`Koalas won!`);
} else if (avrDolphinsScore === avrKoalasScore && avrDolphinsScore >= minimumScore && avrKoalasScore >= minimumScore) {
    console.log(`It's a draw!`);
} else {
    console.log(`Nobody won!`);
}
*/

// Inaczej zapisana funkcja if

/* const age = 15;
const drink = age >= 18 ? 'wine' : `water`;
console.log(`I like to drink ${drink}`);
*/

// Coding challenge #4

/*
let bill = 430;
let multiplier;
let total;

multiplier = bill > 50 && bill < 300 ? 0.15 : 0.2;

let tip = bill * multiplier;
total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
*/

//`use strict`

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

const interface = `Audio`;
const private = 534;
*/

//Functions

// Function declaration 
/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, `Paul`));
console.log(yearsUntilRetirement(1985, `Bob`));
*/

//Functions calling other functions

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1970, `Mike`));
*/

// Coding Challenge #5

/*
let dolphinsScore = [85, 54, 41];
let koalasScore = [23, 34, 27];

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(dolphinsScore[0], dolphinsScore[1], dolphinsScore[2]);
const avgKoalas = calcAverage(koalasScore[0], koalasScore[1], koalasScore[2]);

console.log(checkWinner(avgDolphins, avgKoalas));

function checkWinner(dolphins, koalas) {
    if (dolphins > koalas) {
        console.log(`Dolphins win (${dolphins} vs ${koalas})`);
    } else if (koalas > dolphins) {
        console.log(`Koalas win (${koalas} vs ${dolphins})`);
    } else {
        console.log(`It's a draw (${dolphins} vs ${koalas})`);
    }
}
*/

// Arrays

/*
const friends = [`Michael`, `Steven`, `Peter`];
// Add elements
friends.push(`Jay`);
friends.unshift(`John`);
// Remove elements
const popped = friends.pop();
friends.shift();
// Check elements
console.log(friends.indexOf(`Steven`));
console.log(friends.includes(`Bob`));

if (friends.includes(`Peter`)) {
    console.log(`You have a friend of that name`);
}
const calcTip = function (bill) {
    if (bill > 50 && bill < 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [];
for (let i = 0; i < tips.length; i++) {
    total[i] = bills[i] + tips[i];
}
*/

// Objects

/*
const jonas = {
    firstname: 'Jonas',
    lastname: 'Schmedtmann',
    age: 2021 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastname);
console.log(jonas['lastname']);

const nameKey = 'name';
console.log(jonas[`first` + nameKey]);

 const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstname, lastname, age, job and friends`);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Wrong choice`);
}
jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtman`;
console.log(jonas);
console.log(`${jonas.firstname} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

//Object methods

/*
const jonas = {
    firstname: 'Jonas',
    lastname: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2021 - this.birthYear
        return this.age;
    }
};
jonas.calcAge();
let napis = `${jonas.firstname} is a ${jonas.age}-year old ${jonas.job} and he `;

napis = jonas.hasDriversLicense ? napis + `has a drivers license` : napis + `doesn't have a drivers license`;

console.log(napis);
*/

// Coding challenge #6

/*
function Person(fullname, mass, height) {
    this.fullname = fullname;
    this.mass = mass;
    this.height = height;
    this.calcBMI = function () {
        this.bmi = (this.mass / (this.height * this.height)).toFixed(2);
        return this.bmi;
    }
}
const personMark = new Person(`Mark Miller`, 78, 1.69);
const personJohn = new Person(`John Smith`, 92, 1.95);

personMark.calcBMI();
personJohn.calcBMI();

if (personMark.bmi > personJohn.bmi) {
    console.log(`Mark's bmi (${personMark.bmi}) is higher than John's (${personJohn.bmi})`);
} else if (personJohn.bmi > personMark.bmi) {
    console.log(`John's bmi (${personJohn.bmi}) is higher than Mark's (${personMark.bmi})`);

}
*/

// Backward loops 

/*
const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

// Loop in loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------- Starting exercise ${exercise} -----------`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/

// While loop

/*
for (let rep = 1; rep <= 10; rep++) {
   console.log(`FOR: Lifting weight repetition ${rep}`);
}
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`You rolled a ${dice}`);
}
*/

// Coding challenge #7

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
const calcTip = function (bill) {
    if (bill > 50 && bill < 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

function calcAvg(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        a += arr[i];
    }
    let avg = a / arr.length;
    return avg;
}
console.log(calcAvg(totals));
*/
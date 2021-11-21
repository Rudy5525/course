'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} mln</p>
//           <p class="country__row"><span>🗣️</span>${
//             data.languages[Object.keys(data.languages)[0]]
//           }</p>
//           <p class="country__row"><span>💰</span>${
//             data.currencies[Object.keys(data.currencies)[0]].name
//           }</p>
//         </div>
//       </article>
//       `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

///////////////////////////////////////
// Old school way
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);

//     const html = `
//       <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} mln</p>
//           <p class="country__row"><span>🗣️</span>${
//             data.languages[Object.keys(data.languages)[0]]
//           }</p>
//           <p class="country__row"><span>💰</span>${
//             data.currencies[Object.keys(data.currencies)[0]].name
//           }</p>
//         </div>
//       </article>
//       `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('poland');
// getCountryData('portugal');
// getCountryData('usa');

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} mln</p>
//           <p class="country__row"><span>🗣️</span>${
//             data.languages[Object.keys(data.languages)[0]]
//           }</p>
//           <p class="country__row"><span>💰</span>${
//             data.currencies[Object.keys(data.currencies)[0]].name
//           }</p>
//         </div>
//       </article>
//       `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     // render country 1
//     renderCountry(data);
//     console.log(data);
//     //   // Get neighbour country(2)
//     const neighbours = data.borders;
//     console.log(neighbours);
//     if (!neighbours) return;
//     // AJAX call country 1
//     for (let border of neighbours) {
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${border}`);
//       request2.send();

//       request2.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText);
//         console.log(data2);
//         // render country 2
//         renderCountry(data2, 'neighbour');
//       });
//     }
//   });
// };
// getCountryAndNeighbour('poland');

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong | ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// function getJSON(url, errorMsg = 'Something went wrong') {
//   fetch(url).then(function (response) {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     console.log(response);
//     return response.json();
//   });
// }

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong | ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('poland');
// });
// getCountryData('australia');

// Coding challange

// 1. Create function
// 2. Do reverse geocoding (using geocode API), use fetch API
// 3. Log data to console
// 4. Chain catch() method and log errors to console
// 5. Create custom error for code 403
// 6. Pass received data to countries API
// 7. Render country and catch errors

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} mln</p>
//           <p class="country__row"><span>🗣️</span>${
//             data.languages[Object.keys(data.languages)[0]]
//           }</p>
//           <p class="country__row"><span>💰</span>${
//             data.currencies[Object.keys(data.currencies)[0]].name
//           }</p>
//         </div>
//       </article>
//       `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };
// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//   )
//     .then(response => {
//       if (!response.ok) return;
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return fetch(`https://restcountries.com/v3.1/alpha/${data.countryCode}`);
//     })
//     .then(response => {
//       if (!response.ok) return;
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err}`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// navigator.geolocation.getCurrentPosition(
//   data => whereAmI(data.latitude, data.longitude),
//   () => alert('Could not get your position')
// );

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// setTimeout(() => console.log('1 sec timer'), 1);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 2000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    const someNumber = Math.random();
    console.log(`Result: ${someNumber.toFixed(2)}`);
    if (someNumber >= 0.5) {
      resolve('You WON :D');
    } else {
      reject(new Error('You LOST :('));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('xyz').catch(x => console.error(x));

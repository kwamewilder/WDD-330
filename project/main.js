console.log('about to fetch a list of Star Wars characters');

import StarWarsList from './starwars.js';

//on load, grab the array and insert it into the page
const swPeople = new StarWarsList('starwars', 'people');
window.addEventListener('load', () => {
  swPeople.init();
});
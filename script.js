/*
let searchInput = document.querySelector('.searchInput');
let searchBtn = document.querySelector('.searchBtn');
let results = document.querySelector(`.results`);

async function searchResults() {
    const response = await fetch(`//www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`, { mode: 'no-cors'});
    const results = await response.json();
    console.log(obj);
    //console.log(resultsJson.meals);
}

searchBtn.addEventListener(`click`, function(e) {
  e.preventDefault();
  console.log(searchInput.value);
  searchResults();
})
*/

let searchBtn = document.querySelector('.searchBtn');

async function fetchMealsJSON() {
  let searchInput = document.querySelector('.searchInput');
  console.log('[fetchMealsJSON()]', searchInput.value);
  let response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`).catch(e => {console.log("[fetchMealsJSON()] Exception", e)});
  let dishes = await response.json();
  console.log(response);
}

searchBtn.addEventListener(`click`, function(e) {
  e.preventDefault();
  console.log(searchInput.value);
  fetchMealsJSON();
})
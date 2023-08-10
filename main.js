const searchForm = document.querySelector('form');
const searchResultdiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_id = 'd6b2e29c';
const APP_key = '7d43d643384f5990659a9a76b7ba52a0'
const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_id}&app_key=${APP_key}`


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);
    fetchAPI();
})

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_id}&app_key=${APP_key}&to=20`
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);

} 
function generateHTML(results) {
    container.classList.remove('initial');
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += 

        `<div class="item">
            <img src="${result.recipe.image}" alt="">
             <div class="flex-container">
               <h1 class="title">${result.recipe.label}</h1>
               <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
                <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
                <p class="item-data">Health label: ${result.recipe.healthLabels}</p>
        </div>`

        // facem loop orin result pe care il primit de la data si creeam un html item nou de fiecare data cand facem looping prin array

    })
    searchResultdiv.innerHTML = generatedHTML
}



const loadMeals = (search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerText = '';
    meals.forEach((meals) =>{
            console.log();
    
    const createDiv = document.createElement('div');
    createDiv.classList.add('col');
    createDiv.innerHTML = `
    <div class="card h-100">
    <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meals.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>

    `;
    cardContainer.appendChild(createDiv);
    })
}

function searchFoods() {
    const inputFieldSearch = document.getElementById('search-field').value;
    
    loadMeals(inputFieldSearch);
    document.getElementById('search-field').value = '';
}


loadMeals('chicken');

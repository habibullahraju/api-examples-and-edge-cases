
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
            // console.log(meals.idMeal);
    
    const createDiv = document.createElement('div');
    createDiv.classList.add('col');
    createDiv.innerHTML = `
    <div class="card h-100">
    <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meals.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <button onclick="loadMealsDetails(${meals.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal"        data-bs-target="#meals-modals">
            Details
    </button>
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
const loadMealsDetails= (mealId) =>{
    
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal =>{
    console.log(meal);
        document.getElementById('meals-title').innerText = meal.strMeal;
        document.getElementById('modal-body').innerHTML = `
            <img class="img-fluid" src="${meal.strMealThumb}">
            <h5><a href="${meal.strSource}" target="_blank">Order Now</a></h5>
            <p> ${meal.strInstructions} </p>
        
        `
}

loadMeals('chicken');

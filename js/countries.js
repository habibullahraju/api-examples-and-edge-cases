const countries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    // for(const country of countries){
    //     // console.log(country);
    // }
    countries.forEach(country =>{
        
        const countriesContainer = document.getElementById('countries-container');
        const createDiv = document.createElement('div');
        createDiv.classList.add('countries')
        createDiv.innerHTML = `
            <h3>Name: ${country.name.common} </h3>
            <h3> Capital: ${country.capital? country.capital[0]: 'no capital'} </h3>
            <button onclick="loadDisplayDetails('${country.cca2}')">Country Detals</button>
        
        `
        countriesContainer.appendChild(createDiv);
        
        
    })
}
const loadDisplayDetails = (data)=>{

    const url = `https://restcountries.com/v3.1/alpha/${data}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))

}

const displayCountryDetails = data =>{
   
    const countryDetailDisplay = document.getElementById('county-details');
    countryDetailDisplay.innerHTML = `
        <h3> Country Name: ${data[0].name.common} </h3>
        <img src="${data[0].flags.png}">
    `
}

countries();
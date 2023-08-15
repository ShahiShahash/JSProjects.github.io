"use strict";
const searchBtn = document.getElementById("search-btn");
const countryInp = document.getElementById("country-inp");
const result = document.getElementById("result");
searchBtn.addEventListener("click", function () {
  let countryName = countryInp.value;
  let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(url);
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data[0]);
      let [capital] = data[0].capital;
      console.log(capital);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      const [continents] = data[0].continents;
      console.log(continents);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      const [one, two, three] = Object.values(data[0].languages);
      console.log(`${one}, ${two}, ${three}`);
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img">
      <h2>${data[0].name.common}</h2>

      <div class="wrapper">
        <div class="data-wrapper">
            <h4>Capital:</h4>
            <span>${capital}</span>
        </div>
      </div>

      <div class="wrapper">
      <div class="data-wrapper">
          <h4>Cotinent:</h4>
          <span>${continents}</span>
      </div>
    </div>

      <div class="wrapper">
        <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${data[0].population}</span>
    </div>
  </div>
      <div class="wrapper">
        <div class="data-wrapper">
        <h4>Currency:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${
        Object.keys(data[0].currencies)[0]
      }</span>
    </div>
  </div>
  <div class="wrapper">
    <div class="data-wrapper">
        <h4>Common languages:</h4>
        <span>${Object.values(data[0].languages)}</span>
    </div>
  </div>
  <div class="wrapper">
  <div class="data-wrapper">
      <h4>Borders:</h4>
      <span>${Object.values(data[0].borders)}</span>
  </div>
</div>
      
      `;
    })
    .catch(() => {
      if (countryInp.value === "") {
        result.innerHTML = `<h3>The input field cannot be empty⛔.</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});

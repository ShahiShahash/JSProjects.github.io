const apiKey = "b8f298ca30292a8c82beada2c25efbd7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    weather.style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent =
      Math.trunc(data.main.temp) + "ºC";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent =
      Math.trunc(data.wind.speed) + "km/hr";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weather.Icon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weather.Icon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weather.Icon.src = "images/mist.png";
    }

    weather.style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

const myName = document.querySelector(".name");
const searchInput = document.querySelector(".value");
const searchButton = document.querySelector("button");
const errorDiv = document.querySelector(".error");
const windyP = document.querySelector(".windy");
const iconImg = document.querySelector(".icon");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const weatherDiv = document.querySelector(".weather");
const placeSpan = document.querySelector(".place");
const currentTemp = document.querySelector(".current-temp");
const conditions = document.querySelector(".conditions");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");

myName.textContent = "💦(Prototype-1) Shahash Shahi-2358511☁️";

const findWeather = (city) => {
  const apiKey = "b8f298ca30292a8c82beada2c25efbd7";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((res) => {
      if (!res.ok) throw console.error("The city do not exist");
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      // console.log(data.name);
      // console.log(data.sys.country);
      // console.log(data.main.temp);
      // console.log(data.main.humidity);
      // console.log(data.main.pressure);
      // console.log(data.wind.speed);

      errorDiv.style.display = "none";
      weatherDiv.style.display = "block";
      conditions.textContent = data.weather[0].description;
      humidity.textContent = `${data.main.humidity} %`;
      pressure.textContent = `${data.main.pressure} Pa`;
      placeSpan.textContent = `${data.name}, ${data.sys.country}`;
      currentTemp.textContent = `${Math.trunc(data.main.temp)}`;
      windyP.textContent = `${data.wind.speed} km/hr`;
      iconImg.setAttribute(
        "src",
        `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
      );

      const now = new Date();
      const options = { weekday: "long", month: "long", day: "numeric" };
      date.textContent = now.toLocaleDateString("en-US", options);
      time.textContent = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      });
    })
    .catch(() => {
      errorDiv.style.display = "block";
      errorDiv.textContent = "⛔Invalid city name";
    });
};
searchButton.addEventListener("click", function () {
  const city = searchInput.value;
  if (city) findWeather(city);
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Enter") {
    findWeather(searchInput.value);
  }
});

findWeather("Thurrock");

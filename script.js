const button = document.querySelector("button");
const city = document.querySelector("#city");
const app = document.querySelector(".weather--app");

const fetchMeteo = (city) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=25a1023256bf6e806f82892c9dd8fe40`
  )
    .then((response) => response.json())
    .then((data) => {
      const dayOne = document.createElement("article");
      app.appendChild(dayOne);
      dayOne.setAttribute("class", "day_one");

      const containerPartOne = document.createElement("div");
      dayOne.appendChild(containerPartOne);
      containerPartOne.setAttribute("class", "city_data");

      const dateOne = document.createElement("p");
      dateOne.setAttribute("class", "date");
      dateOne.textContent = "Today";
      containerPartOne.appendChild(dateOne);

      const city = document.createElement("h2");
      city.textContent = data.city.name + ", " + data.city.country;
      containerPartOne.appendChild(city);

      const tempData = document.createElement("div");
      tempData.setAttribute("class", "temp_data");
      dayOne.appendChild(tempData);

      const tempOne = document.createElement("p");
      tempOne.setAttribute("class", "temp");
      tempOne.textContent = data.list[0].main.temp + "°C";
      tempData.appendChild(tempOne);

      const otherWeatherData = document.createElement("div");
      otherWeatherData.setAttribute("class", "weather_data");
      dayOne.appendChild(otherWeatherData);

      const weatherOne = document.createElement("p");
      weatherOne.setAttribute("class", "weather");
      weatherOne.textContent =
        "Feels like " +
        data.list[0].main.feels_like +
        "°C, " +
        data.list[0].weather[0].description;
      otherWeatherData.appendChild(weatherOne);

      const min = document.createElement("p");
      min.textContent = "Min: " + data.list[0].main.temp_min + "°C";
      otherWeatherData.appendChild(min);

      const max = document.createElement("p");
      max.textContent = "Max: " + data.list[0].main.temp_max + "°C";
      otherWeatherData.appendChild(max);

      const humidity = document.createElement("p");
      humidity.textContent = "Humidity: " + data.list[0].main.humidity + "%";
      otherWeatherData.appendChild(humidity);
    });

button.addEventListener("click", () => {
  fetchMeteo(city.value);
});

const button = document.querySelector("button");
const city = document.querySelector("#city");
const app = document.querySelector(".weather--app");

//________________________________________________________________________

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

      const icon = document.createElement("img");
      tempData.appendChild(icon);
      const icon_data = data.list[0].weather[0].icon;
      const icon_link = `http://openweathermap.org/img/wn/${icon_data}.png`;
      icon.src = icon_link;

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

      //_____________________________________________

      const fallowing_day = document.createElement("article");
      app.appendChild(fallowing_day);
      fallowing_day.setAttribute("class", "container_fallowing_days");

      const dayTwo = document.createElement("div");
      fallowing_day.appendChild(dayTwo);
      dayTwo.setAttribute("class", "fallowing_days");

      const dateTwo = document.createElement("p");
      dayTwo.appendChild(dateTwo);
      dateTwo.textContent = "Tomorrow";

      const iconTwo = document.createElement("img");
      dayTwo.appendChild(iconTwo);
      const iconTwo_data = data.list[7].weather[0].icon;
      const iconTwo_link = `http://openweathermap.org/img/wn/${iconTwo_data}.png`;
      iconTwo.src = iconTwo_link;

      const weatherTwo = document.createElement("p");
      dayTwo.appendChild(weatherTwo);
      weatherTwo.textContent = data.list[7].weather[0].description;

      const tempTwo = document.createElement("p");
      dayTwo.appendChild(tempTwo);
      tempTwo.textContent =
        data.list[7].main.temp_min +
        "°C / " +
        data.list[7].main.temp_max +
        "°C";

      //_____________________________________________________________________________________________

      const dayThree = document.createElement("div");
      fallowing_day.appendChild(dayThree);
      dayThree.setAttribute("class", "fallowing_days");

      const dateThree = document.createElement("p");
      dayThree.appendChild(dateThree);
      dateThree.textContent = data.list[15].dt_txt;

      const iconThree = document.createElement("img");
      dayThree.appendChild(iconThree);
      const iconThree_data = data.list[15].weather[0].icon;
      const iconThree_link = `http://openweathermap.org/img/wn/${iconThree_data}.png`;
      iconThree.src = iconThree_link;

      const weatherThree = document.createElement("p");
      dayThree.appendChild(weatherThree);
      weatherThree.textContent = data.list[15].weather[0].description;

      const tempThree = document.createElement("p");
      dayThree.appendChild(tempThree);
      tempThree.textContent =
        data.list[15].main.temp_min +
        "°C / " +
        data.list[15].main.temp_max +
        "°C";

      //______________________________________________________________________________________

      const dayFour = document.createElement("div");
      fallowing_day.appendChild(dayFour);
      dayFour.setAttribute("class", "fallowing_days");

      const dateFour = document.createElement("p");
      dayFour.appendChild(dateFour);
      dateFour.textContent = data.list[23].dt_txt;

      const iconFour = document.createElement("img");
      dayFour.appendChild(iconFour);
      const iconFour_data = data.list[23].weather[0].icon;
      const iconFour_link = `http://openweathermap.org/img/wn/${iconFour_data}.png`;
      iconFour.src = iconFour_link;

      const weatherFour = document.createElement("p");
      dayFour.appendChild(weatherFour);
      weatherFour.textContent = data.list[23].weather[0].description;

      const tempFour = document.createElement("p");
      dayFour.appendChild(tempFour);
      tempFour.textContent =
        data.list[23].main.temp_min +
        "°C / " +
        data.list[23].main.temp_max +
        "°C";

      //________________________________________________________________________________________

      const dayFive = document.createElement("div");
      fallowing_day.appendChild(dayFive);
      dayFive.setAttribute("class", "fallowing_days");

      const dateFive = document.createElement("p");
      dayFive.appendChild(dateFive);
      dateFive.textContent = data.list[31].dt_txt;

      const iconFive = document.createElement("img");
      dayFive.appendChild(iconFive);
      const iconFive_data = data.list[31].weather[0].icon;
      const iconFive_link = `http://openweathermap.org/img/wn/${iconFive_data}.png`;
      iconFive.src = iconFive_link;

      const weatherFive = document.createElement("p");
      dayFive.appendChild(weatherFive);
      weatherFive.textContent = data.list[31].weather[0].description;

      const tempFive = document.createElement("p");
      dayFive.appendChild(tempFive);
      tempFive.textContent =
        data.list[31].main.temp_min +
        "°C / " +
        data.list[31].main.temp_max +
        "°C";

      //__________________________________________________________________

      const daySix = document.createElement("div");
      fallowing_day.appendChild(daySix);
      daySix.setAttribute("class", "fallowing_days");

      const dateSix = document.createElement("p");
      daySix.appendChild(dateSix);
      dateSix.textContent = data.list[39].dt_txt;

      const iconSix = document.createElement("img");
      daySix.appendChild(iconSix);
      const iconSix_data = data.list[39].weather[0].icon;
      const iconSix_link = `http://openweathermap.org/img/wn/${iconSix_data}.png`;
      iconSix.src = iconSix_link;

      const weatherSix = document.createElement("p");
      daySix.appendChild(weatherSix);
      weatherSix.textContent = data.list[39].weather[0].description;

      const tempSix = document.createElement("p");
      daySix.appendChild(tempSix);
      tempSix.textContent =
        data.list[39].main.temp_min +
        "°C / " +
        data.list[39].main.temp_max +
        "°C";
    });

//________________________________________________________________________________________________

button.addEventListener("click", () => {
  fetchMeteo(city.value);
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchMeteo(city.value);
  }
});

const buttonSubmit = document.querySelector(".submit");
const buttonClear = document.querySelector(".clear");
const city = document.querySelector("#city");
const app = document.querySelector(".weather--app");

//________________________________________________________________________

function randomPictures() {
  const containerPictures = document.createElement("div");
  app.appendChild(containerPictures);
  containerPictures.setAttribute("class", "containerPictures");
  const picturesRandom = document.createElement("img");
  containerPictures.appendChild(picturesRandom);
  picturesRandom.src = `https://source.unsplash.com/random/?${city.value}`;
  picturesRandom.alt = "city_illustration";
}

//__________________________________________________________________________________________

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

      const city = document.createElement("h2");
      city.textContent = data.city.name + ", " + data.city.country;
      containerPartOne.appendChild(city);

      const dateOne = document.createElement("p");
      dateOne.setAttribute("class", "date");
      const date = data.list[0].dt;
      const day = new Date(date * 1000);
      dateOne.textContent = day.toDateString();
      containerPartOne.appendChild(dateOne);

      const tempData = document.createElement("div");
      tempData.setAttribute("class", "temp_data");
      dayOne.appendChild(tempData);

      const icon = document.createElement("img");
      tempData.appendChild(icon);
      const icon_data = data.list[0].weather[0].icon;
      const icon_link = `http://openweathermap.org/img/wn/${icon_data}.png`;
      icon.src = icon_link;
      icon.alt = "icon";

      const weatherDescription = document.createElement("p");
      weatherDescription.setAttribute("class", "description");
      weatherDescription.textContent = data.list[0].weather[0].description;
      tempData.appendChild(weatherDescription);

      const tempOne = document.createElement("p");
      tempOne.setAttribute("class", "temp");
      tempOne.textContent = Math.floor(data.list[0].main.temp) + "°C";
      tempData.appendChild(tempOne);

      const otherWeatherData = document.createElement("div");
      otherWeatherData.setAttribute("class", "weather_data");
      dayOne.appendChild(otherWeatherData);

      const weatherOne = document.createElement("p");
      weatherOne.setAttribute("class", "weather");
      weatherOne.textContent =
        "Feels like " + Math.floor(data.list[0].main.feels_like) + "°C";
      otherWeatherData.appendChild(weatherOne);

      const min = document.createElement("p");
      min.textContent = "Min: " + Math.floor(data.list[0].main.temp_min) + "°C";
      otherWeatherData.appendChild(min);

      const max = document.createElement("p");
      max.textContent = "Max: " + Math.floor(data.list[0].main.temp_max) + "°C";
      otherWeatherData.appendChild(max);

      const humidity = document.createElement("p");
      humidity.textContent = "Humidity: " + data.list[0].main.humidity + "%";
      otherWeatherData.appendChild(humidity);

      const wind = document.createElement("p");
      const windSpeed = data.list[0].wind.speed;
      const WindSpeedByKm = Math.floor(windSpeed * 3.6);
      wind.textContent = "wind speed: " + WindSpeedByKm + " km/h";
      otherWeatherData.appendChild(wind);

      //_____________________________________________

      const fallowing_day = document.createElement("article");
      app.appendChild(fallowing_day);
      fallowing_day.setAttribute("class", "container_fallowing_days");

      const dayTwo = document.createElement("div");
      fallowing_day.appendChild(dayTwo);
      dayTwo.setAttribute("class", "fallowing_days");

      const dateTwo = document.createElement("p");
      dayTwo.appendChild(dateTwo);
      const dateTwoData = data.list[7].dt;
      const dayTwoData = new Date(dateTwoData * 1000);
      dateTwo.textContent = dayTwoData.toDateString();

      const iconTwo = document.createElement("img");
      dayTwo.appendChild(iconTwo);
      const iconTwo_data = data.list[7].weather[0].icon;
      const iconTwo_link = `http://openweathermap.org/img/wn/${iconTwo_data}.png`;
      iconTwo.src = iconTwo_link;
      iconTwo.alt = "icon";

      const weatherTwo = document.createElement("p");
      dayTwo.appendChild(weatherTwo);
      weatherTwo.textContent = data.list[7].weather[0].description;

      const tempTwo = document.createElement("p");
      dayTwo.appendChild(tempTwo);
      tempTwo.textContent = Math.floor(data.list[7].main.temp) + "°C";

      //_____________________________________________________________________________________________

      const dayThree = document.createElement("div");
      fallowing_day.appendChild(dayThree);
      dayThree.setAttribute("class", "fallowing_days");

      const dateThree = document.createElement("p");
      dayThree.appendChild(dateThree);
      const dateThreeData = data.list[15].dt;
      const dayThreeData = new Date(dateThreeData * 1000);
      dateThree.textContent = dayThreeData.toDateString();

      const iconThree = document.createElement("img");
      dayThree.appendChild(iconThree);
      const iconThree_data = data.list[15].weather[0].icon;
      const iconThree_link = `http://openweathermap.org/img/wn/${iconThree_data}.png`;
      iconThree.src = iconThree_link;
      iconThree.alt = "icon";

      const weatherThree = document.createElement("p");
      dayThree.appendChild(weatherThree);
      weatherThree.textContent = data.list[15].weather[0].description;

      const tempThree = document.createElement("p");
      dayThree.appendChild(tempThree);
      tempThree.textContent = Math.floor(data.list[15].main.temp) + "°C";

      //______________________________________________________________________________________

      const dayFour = document.createElement("div");
      fallowing_day.appendChild(dayFour);
      dayFour.setAttribute("class", "fallowing_days");

      const dateFour = document.createElement("p");
      dayFour.appendChild(dateFour);
      const dateFourData = data.list[23].dt;
      const dayFourData = new Date(dateFourData * 1000);
      dateFour.textContent = dayFourData.toDateString();

      const iconFour = document.createElement("img");
      dayFour.appendChild(iconFour);
      const iconFour_data = data.list[23].weather[0].icon;
      const iconFour_link = `http://openweathermap.org/img/wn/${iconFour_data}.png`;
      iconFour.src = iconFour_link;
      iconFour.alt = "icon";

      const weatherFour = document.createElement("p");
      dayFour.appendChild(weatherFour);
      weatherFour.textContent = data.list[23].weather[0].description;

      const tempFour = document.createElement("p");
      dayFour.appendChild(tempFour);
      tempFour.textContent = Math.floor(data.list[23].main.temp) + "°C";

      //________________________________________________________________________________________

      const dayFive = document.createElement("div");
      fallowing_day.appendChild(dayFive);
      dayFive.setAttribute("class", "fallowing_days");

      const dateFive = document.createElement("p");
      dayFive.appendChild(dateFive);
      const dateFiveData = data.list[31].dt;
      const dayFiveData = new Date(dateFiveData * 1000);
      dateFive.textContent = dayFiveData.toDateString();

      const iconFive = document.createElement("img");
      dayFive.appendChild(iconFive);
      const iconFive_data = data.list[31].weather[0].icon;
      const iconFive_link = `http://openweathermap.org/img/wn/${iconFive_data}.png`;
      iconFive.src = iconFive_link;
      iconFive.alt = "icon";

      const weatherFive = document.createElement("p");
      dayFive.appendChild(weatherFive);
      weatherFive.textContent = data.list[31].weather[0].description;

      const tempFive = document.createElement("p");
      dayFive.appendChild(tempFive);
      tempFive.textContent = Math.floor(data.list[31].main.temp) + "°C";

      //__________________________________________________________

      window.localStorage.LastCityAsk = city.textContent;
    })

    .catch(() => {
      alert("There is an error somewhere!");
    });

//_________________________________________________________________

const fetchGraph = (city) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=25a1023256bf6e806f82892c9dd8fe40`
  )
    .then((response) => response.json())
    .then((data) => {
      const date = data.list[0].dt;
      const day = new Date(date * 1000);

      const dateTwoData = data.list[7].dt;
      const dayTwoData = new Date(dateTwoData * 1000);

      const dateThreeData = data.list[15].dt;
      const dayThreeData = new Date(dateThreeData * 1000);

      const dateFourData = data.list[23].dt;
      const dayFourData = new Date(dateFourData * 1000);

      const dateFiveData = data.list[31].dt;
      const dayFiveData = new Date(dateFiveData * 1000);

      //____________________________

      let chartStatus = Chart.getChart("myChart");
      if (chartStatus != undefined) {
        chartStatus.destroy();
      }

      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            day.toDateString(),
            dayTwoData.toDateString(),
            dayThreeData.toDateString(),
            dayFourData.toDateString(),
            dayFiveData.toDateString(),
          ],
          datasets: [
            {
              label:
                "Graph for the fallowing days for " +
                data.city.name +
                ", " +
                data.city.country,
              data: [
                Math.floor(data.list[0].main.temp),
                Math.floor(data.list[7].main.temp),
                Math.floor(data.list[15].main.temp),
                Math.floor(data.list[23].main.temp),
                Math.floor(data.list[31].main.temp),
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {},
      });
    });

//________________________________________________________________________________________________

buttonSubmit.addEventListener("click", () => {
  randomPictures();
  fetchMeteo(city.value);

  fetchGraph(city.value);

  city.value = "";
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    randomPictures();
    fetchMeteo(city.value);

    fetchGraph(city.value);

    city.value = "";
  }
});

buttonClear.addEventListener("click", () => {
  location.reload();
});

window.addEventListener("load", () => {
  randomPictures(localStorage.LastCityAsk);
  fetchMeteo(localStorage.LastCityAsk);
  fetchGraph(localStorage.LastCityAsk);
});

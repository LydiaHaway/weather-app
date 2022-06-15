const button = document.querySelector("button");
const city = document.querySelector("#city");

const fetchMeteo = (city) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=25a1023256bf6e806f82892c9dd8fe40`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.main);
    });

button.addEventListener("click", () => {
  fetchMeteo(city.value);
});

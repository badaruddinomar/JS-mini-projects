const apiKey = "d7427386926aa6a702f9689fe02fad16";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherStatus = document.querySelector(".weather-status");

const weatherApiFunc = async (city) => {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    if (response.status === 200) {
      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
    } else {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    weatherStatus.innerHTML = data.weather[0].main;
  } catch (err) {
    console.log("Invalid city name!");
  }

  //   if()
};

searchBtn.addEventListener("click", (event) => {
  weatherApiFunc(searchBox.value);
});
searchBox.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    weatherApiFunc(searchBox.value);
  }
});

// <i class="fa-solid fa-cloud-rain"></i>
// <i class="fa-solid fa-cloud-sun-rain"></i>

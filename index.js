

const cityName = document.querySelector("#city-name");

const inputCityName = document.querySelector("#search-city");
const searchBtn = document.querySelector("#search-btn");
const currenTemp = document.querySelector("#current-temp");
const windSpeed = document.querySelector("#wind-speed");
const humidity = document.querySelector("#humidity");
const cloudImg = document.querySelector("#cloud-img");


const loadWeatherApi = async () => {

  try {
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputCityName.value}&appid=87a71ef5db919b29ca0b5e841576f206`;
  
    const fetchApi = await fetch(apiUrl);
    const data = await fetchApi.json();

    const inputValue = inputCityName.value;

    if (data.name === undefined) {

    cityName.innerHTML = `Wrong city name`
    currenTemp.innerHTML = `Wrong city name`
    }

    else{

      humidity.innerHTML = `${data.main.humidity}%`
      windSpeed.innerHTML = `${data.wind.speed} KM`;
      cityName.innerHTML = data.name;
      currenTemp.innerHTML = (`${data.main.temp}&#176`)
    }
    console.log(data);
  } catch (error) {
    console.log("failed to connect");
  }
};


searchBtn.addEventListener("click", loadWeatherApi)



const apiKey ="76bcab4ba4a0893b31771ad4ff501843";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inp = document.querySelector("input");
const btn = document.querySelector("button");
const weatherIcone = document.querySelector(".weather-icone");


async function getWeather(city){

    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    const location = document.querySelector(".city");
    location.innerHTML = data.name;

    const temperature = document.querySelector(".temp");
    temperature.innerHTML = Math.round(data.main.temp) + "°c";

    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity + "%";

    const wind = document.querySelector(".wind");
    wind.innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main == "Clouds"){
      
       weatherIcone.src = `images/clouds.png`
    } 
    else if (data.weather[0].main == "Clear") {
        weatherIcone.src = `images/clear.png`
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcone.src = `images/rain.png`
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcone.src = `images/snow.png`
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcone.src = `images/drizzle.png`
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcone.src = `images/mist.png`
    }

    const weather = document.querySelector(".weather")
    weather.style.display = "block";

}

btn.addEventListener('click', () => {

    getWeather(inp.value);

})



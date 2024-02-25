
const apiKey = "76bcab4ba4a0893b31771ad4ff501843";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inp = document.querySelector("input");
const btn = document.querySelector("button");
const weatherIcone = document.querySelector(".weather-icone");
const description = document.querySelector(".descrip");
const date = document.querySelector(".date");
const wrapp = document.querySelector(".wrapper");


async function getWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data)

    if (response.status == 404) {
        const error = document.querySelector(".error");
        const imgerror = document.querySelector(".img-error");
        error.style.display = "block"
        imgerror.style.display = "block"

        document.querySelector(".weather").style.display = "none";
        
    } else {

        const location = document.querySelector(".city");
        location.innerHTML = data.name;

        const temperature = document.querySelector(".temp");
        temperature.innerHTML = Math.round(data.main.temp) + "°";

        const humidity = document.querySelector(".humidity");
        humidity.innerHTML = data.main.humidity + "%";

        const wind = document.querySelector(".wind");
        wind.innerHTML = data.wind.speed + " km/h";

        const feel = document.querySelector(".feel-like");
        feel.innerHTML = Math.round(data.main.feels_like) + "°";

        const currentDate = new Date();
        date.innerText = currentDate.toDateString()
        const hours = currentDate.getHours();
        console.log(hours)



        if (hours > 17 || hours <= 6 && data.weather[0].main == "Clouds") {
            weatherIcone.src = `images/moon-cloud.png`;
            description.innerText = 'Partly Cloudy';
        } else if (hours <= 17 && data.weather[0].main == "Clouds") {
            weatherIcone.src = `images/clouds.png`;
            description.innerText = 'Partly Cloudy';
        }
        
         if (hours > 17 || hours <= 6 && data.weather[0].main == "Clear") {
            weatherIcone.src = `images/clear-weather.png`;
            description.innerText = 'Clear';
        } else if (hours <= 17 && data.weather[0].main == "Clear") {
            weatherIcone.src = `images/clear.png`;
            description.innerText = 'Clear';
        }

        if (data.weather[0].main == "Rain") {
            weatherIcone.src = `images/rainy-night.png`;
            description.innerText = 'Rainy';
        } else if (hours <= 17 && data.weather[0].main == "Rain"){
            weatherIcone.src = `images/rainy-day.png`;
            description.innerText = 'Rainy';
        }

        if (data.weather[0].main == "Snow") {
            weatherIcone.src = `images/snow.png`;
            description.innerText = 'Snowy';
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcone.src = `images/drizzle.png`;
            description.innerText = 'Drizzle';
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcone.src = `images/fog-weather.png`;
            description.innerText = 'Mist';
        }


        if(hours > 17 || hours <= 6){
            wrapp.style.background = "rgb(76, 76, 116)";
        } else {
            wrapp.style.background = "rgba(135, 206, 250, 0.493)";
        }

        const weather = document.querySelector(".weather");
        weather.style.display = "block";

        document.querySelector(".error").style.display = "none";
    }

}

btn.addEventListener('click', () => {

    getWeather(inp.value);

})



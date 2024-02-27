
const apiKey = "76bcab4ba4a0893b31771ad4ff501843";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inp = document.querySelector("input");
const btn = document.querySelector("button");
const weatherIcone = document.querySelector(".weather-icone");
const description = document.querySelector(".descrip");
const date = document.querySelector(".date");
const wrapp = document.querySelector(".wrapper");
const error = document.querySelector(".error");
const imgerror = document.querySelector(".img-error");
const weather = document.querySelector(".weather");


async function getWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (response.status == 404) {
        error.style.display = "block"
        imgerror.style.display = "block"

        weather.style.display = "none";

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


        if (hours > 17 || hours <= 6) {
            if (data.weather[0].main == "Clouds") {
                weatherIcone.src = `images/cloudy-night.png`;
                description.innerText = 'Partly Cloudy';
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcone.src = `images/clear-weather.png`;
                description.innerText = 'Clear';
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcone.src = `images/rainy-night.png`;
                description.innerText = 'Rainy';
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcone.src = `images/mist-night.png`;
                description.innerText = 'Mist';
            }
            else if (data.weather[0].main == "Haze") {
                weatherIcone.src = `images/mist-night.png`;
                description.innerText = 'Haze';
            }
            else if (data.weather[0].main == "Snow") {
                weatherIcone.src = `images/snow.png`;
                description.innerText = 'Snowy';
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcone.src = `images/drizzle-night.png`;
                description.innerText = 'Drizzle';
            }
        }


        if (hours <= 17) {
            if (data.weather[0].main == "Clouds") {
                weatherIcone.src = `images/cloudy-day.png`;
                description.innerText = 'Partly Cloudy';
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcone.src = `images/clear.png`;
                description.innerText = 'Clear';
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcone.src = `images/rainy-day.png`;
                description.innerText = 'Rainy';
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcone.src = `images/mist-day.png`;
                description.innerText = 'Mist';
            }
            else if (data.weather[0].main == "Haze") {
                weatherIcone.src = `images/mist-day.png`;
                description.innerText = 'Haze';
            }
            else if (data.weather[0].main == "Snow") {
                weatherIcone.src = `images/snow.png`;
                description.innerText = 'Snowy';
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcone.src = `images/drizzle.png`;
                description.innerText = 'Drizzle';
            }
        }

        if (hours > 17 || hours <= 6) {
            wrapp.style.background = "rgb(76, 76, 116)";
        } else {
            wrapp.style.background = "rgba(135, 206, 250, 0.493)";
        }

        weather.style.display = "block";
        error.style.display = "none";
    }

}

btn.addEventListener('click', () => {

    getWeather(inp.value);

})

// const infos = {
//     apiUrl: 'http://api.weatherapi.com/v1/current.json',
//     apiKey: '8254ac8caaf2433bbf1155457240602',
// }

const apiKey ="76bcab4ba4a0893b31771ad4ff501843";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=istanbul";



async function getWeather(){

    const response = await fetch (apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    const city = document.querySelector(".city");
    city.innerHTML = data.name;

    const temperature = document.querySelector(".temp");
    temperature.innerHTML = Math.round(data.main.temp) + "°c";

    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity + "%";

    const wind = document.querySelector(".wind");
    wind.innerHTML = data.wind.speed + "km/h";
}



    getWeather();



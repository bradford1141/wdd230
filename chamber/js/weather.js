const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const base_url = "https://api.openweathermap.org/data/2.5/weather";
const city_name = "Fairbanks";
const state_code = "AK";
const country_code = "US";
const appid = "a7f25480fd72b2ee0e023a2b8ce83dc9";
const units = "imperial";

const url = `${base_url}?q=${city_name},${state_code},${country_code},&appid=${appid}&units=${units}`;

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temperature = data["main"]["temp"];
    currentTemp.textContent = Math.round(temperature);

    const base_image_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log(base_image_url);

    weatherIcon.setAttribute('src', base_image_url);
    weatherIcon.setAttribute('alt', data.weather[0].description);
});
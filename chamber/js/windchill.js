temperature = parseFloat(document.querySelector('#temp').textContent);
windspeed = parseFloat(document.querySelector('#windspeed').textContent);

chill=(0.0817*(3.71*(Math.pow(wind, 0.5))+
5.81-0.25*wind)*(temp-91.4)+91.4);
form.windchill.value = chill;

// Math.round(
//     35.74 +
//       0.6215 * temperature -
//       35.75 * windSpeed ** 0.16 +
//       0.4275 * temperature * windSpeed ** 0.16
//   );

// const windChillFahrenheit = (temperature, windSpeed) =>
//   35.74 +
//   0.6215 * temperature -
//   35.75 * windSpeed ** 0.16 +
//   0.4275 * temperature * windSpeed ** 0.16;
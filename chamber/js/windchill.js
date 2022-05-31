// temperature = parseFloat(document.querySelector('#temp').textContent);
// windspeed = parseFloat(document.querySelector('#windspeed').textContent);

const fahrenheit = (temp *9) / 5 +32;
const windSPeedKmh = speed * 3.6;
const windSpeedMph = speed * 2.237;
const windChill = 35.74 + 0.6215 * fahrenheit - 35.75 * windSpeedMph**0.16 + 0.4275 * farenheit * windSpeedMph**0.1;

if(farenheit <= 50 && windspeed > 3){
    wind.textContent = `${windChill.toFixed(2)} F`;
}
else{
    wind.textContent = "N/A";
}
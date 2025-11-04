//convert array of temperature farenheit to Celsius
// C = 5/9 * (F-32)

const temperaturesFarenheit = [32,68,95,104,212]

const temperaturesCelsius = temperaturesFarenheit.map(temperature =>(5/9 * (temperature-32)))
console.log(temperaturesFarenheit);
console.log(temperaturesCelsius);

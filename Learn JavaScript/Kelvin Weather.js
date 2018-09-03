//Forecast today
const kelvin = 0;
//kelvin minus 273
const celsius = kelvin - 273;
//Celsius * (9/5) + 32 rounded down to nearest int.
const fahrenheit = Math.floor(celsius * (9/5) + 32);
//Celsius * (33/100) rounded down to nearest int.
const newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} Newtons`)

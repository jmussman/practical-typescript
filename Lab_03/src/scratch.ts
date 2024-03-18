import console from 'console';

let celsius: number = 21.5
let fahrenheit: number = (celsius * (9 / 5)) + 32;
let summary: string = `The Celsius value ${celsius} is ${fahrenheit} Fahrenheit`;

console.log(summary);
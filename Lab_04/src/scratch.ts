import console from 'console';

let temperature: string = '84.2f';
let degrees: number = parseFloat(temperature);
let scale: string = temperature.slice(-1);

let summary: string;

switch (scale) {
    case 'c':
        let fahrenheit: number = (degrees * (9 / 5)) + 32;
        summary = `The Celsius value ${degrees} is ${fahrenheit} Fahrenheit`;
        break;

    case 'f':
        let celsius: number = (degrees * (5 / 9)) - 32;
        summary = `The Fahrenheit value ${degrees} is ${celsius} Celsius`;
        break;

    default:
        summary = 'Huh?';
        break;
}

console.log(summary);
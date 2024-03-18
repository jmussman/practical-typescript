import console from 'console';

let temperatureSource: string[] = ['21.5c', '80.2f', '', '17.0c', '19.7c', '76.3f'];
let celsiusTemperatures: number[] = [];
let fahrenheitTemperatures: number[] = [];

for (let temperature of temperatureSource) {

    let degrees: number = parseFloat(temperature);
    let scale: string = temperature.slice(-1);

    switch (scale) {
        case 'c':
            fahrenheitTemperatures.push((degrees * (9 / 5)) + 32);
            celsiusTemperatures.push(degrees);
            break;

        case 'f':
            celsiusTemperatures.push((degrees * (5 / 9)) - 32);
            fahrenheitTemperatures.push(degrees);

        default:
            break;
    }
}

let summary: string;

for (let i = 0; i < celsiusTemperatures.length; ++i) {

    summary = `The Celsius value ${celsiusTemperatures[i].toFixed(2)} is ${fahrenheitTemperatures[i].toFixed(2)} Fahrenheit`;
    console.log(summary);
}

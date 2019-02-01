const request = require('request');
const yargs = require('yargs');
const weather = require('./weather.js');

const argv = yargs
    .options({
     l: {
         demand: true,
         alias: 'location',
         describe: "The location you would like to get weather data for.",
         string: true
     }
    })
    .help()
    .alias("help", "h")
    .argv;


const location = argv.location;



weather.getTemp(location, (errorMessage, results) => {
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(JSON.stringify(results, undefined, 2));
        }
    })
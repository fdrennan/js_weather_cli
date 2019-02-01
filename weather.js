const request = require('request');

var getTemp = (location, callback) => {
    const id = '66e4dab4e51f0bc811a9c8af95b5301f'; //Enter your API key here.
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${id}`;

    console.log(link);
    request({
        url: link,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to weather servers.')
        } else if (body.cod == 404) {
            return console.log(body.message);
        } else {
            callback(undefined, {
                temperature: body.main.temp
            });
        }
    });
}

module.exports.getTemp = getTemp;
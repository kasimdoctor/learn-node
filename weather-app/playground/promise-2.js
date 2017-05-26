// This file teaches you how to convert the geocode function to use Promises

const request = require('request');

var geocodeAddress = (address) => {
    // Encode the user supplied address (removing spaces)
    var encodedAddress = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google Maps API.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
    
};

geocodeAddress('00000').then((message) => {
    console.log(JSON.stringify(message, undefined, 2));
}, (error) => {
    console.log(error);
});
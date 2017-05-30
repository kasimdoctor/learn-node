const express = require('express');

var app = express();

app.get('/', (request, response) => {
    response
        .status(404)
        .send({
            error: 'Page not found'
        });
});

app.get('/users', (request, response) => {
    response.send([
        {
            name: 'Kasim',
            age: 27
        },
        {
            name: 'Guddu',
            age: 28
        }
    ]);
});

app.listen(3000);

module.exports.app = app;

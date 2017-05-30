const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('Should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        // you can either do it this way
        .expect({
            error: 'Page not found'
        })
        // or this way
        .expect(res => {
            expect(res.body).toInclude({
                error: 'Page not found'
            });
        })
        .end(done);
});

it('Should return my user', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
            expect(res.body).toInclude({
                name: 'Kasim',
                age: 27
            });
        })
        .end(done);
});

const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    it('Should add two numbers', () => {
        var results = utils.add(20, 41);

        expect(results).toBe(61).toBeA('number');
    });

    it('Should async add two numbers', (done) => {
        utils.asyncAdd(3, 4, (sum) => {
            expect(sum).toBeA('number').toBe(7);
            done();
        });
    });

    it('Should square a number', () => {
        var results = utils.square(8);

        expect(results).toBeA('number').toBe(64);
    });
});



it('Should verify first and last names are set', () => {
    var user = {
        age: 27,
        location: 'Montreal'
    };

    var returnedUser = utils.setName(user, 'Kasim Doctor');

    expect(returnedUser)
        .toBeA('object')
        .toInclude({
            firstName: 'Kasim',
            lastName: 'Doctor'
        });
    
    // Both these objects will be equal!
    expect(user).toEqual(returnedUser);
});

it('Should expect some values', () => {
    // expect(12).toNotBe(11);

    // two objects are NOT equal, just like Java!
    // expect({name: 'Kasim'}).toBe({name: 'Kasim'});

    // This will work, checks equality rather than '==='
    expect({name: 'Kasim'}).toEqual({name: 'Kasim'});

    expect([2, 3, 4]).toInclude(2);

    expect({
        name: 'Kasim',
        age: 27,
        location: 'Montreal'
    }).toInclude({
        age: 27
    });
    
});

// Adds 2 numbers
var add = (a, b) => a + b;

var asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

// Squares a number
var square = (x) => x * x;

var setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];

    return user;
}

module.exports = {
    add,
    asyncAdd,
    square,
    setName
};

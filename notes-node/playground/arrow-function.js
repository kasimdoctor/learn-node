// Learning Arrow functions

var square = x => x * x;

console.log(square(9));

// Regular functions vs Arrow functions
var user = {
  name: 'Kasim',
  sayHi: () => {
    // arguments will not work with Arrow fns!
    console.log(arguments);
    // Arrow fns dont bind to 'this' keyword!
    // Wont work below code:
    console.log(`Hi. I am ${this.name}`);
  },
  // New ES6 syntax
  sayHiAlt () {
    // arguments will work!
    console.log(arguments);
    // You can bind 'this' keyword!
    console.log(`Hi. I am ${this.name}`);
  }
};

// Example usage of both types of functions:
user.sayHi(1, 2, 3);

user.sayHiAlt(1, 2, 3);

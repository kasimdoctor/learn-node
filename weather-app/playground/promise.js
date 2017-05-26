var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else { 
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(2, '5').then((message) => {
    console.log('Result:', message);
    return asyncAdd(message, 53);
}).then((res) => {
    console.log('Should be:', res);
}).catch((error) => {
    console.log(error);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //resolve('Hey, it worked!');        
//     reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success:', message);
// }, (errorMessage) => {
//     console.log('Error:', errorMessage);
// });

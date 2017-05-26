console.log('Starting app...');


setTimeout(() =>  {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Another timeout');
}, 0);

for (var i = 0; i < 100000; i++) {
    console.log(i);
}
console.log('Finishing app...');
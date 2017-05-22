
var functionWithVar = () => {
  var x = 2;

  if (x === 2) {
    var y = 3;
  }

  console.log('X accessed in same block:', x);

  // var allows you to access 'y'
  // outside of the block where it was defined
  console.log('Y accessed before outermost block:', y);

}; // outermost block

// This will fail!
// console.log('You cannot access X or Y here!', x, y);

var functionWithLet = () => {
  let a = 10;

  if (a === 10) {
    let b = 22;
  }

  console.log('A accessed in same block:', a);

  // let DOES NOT allow you to access 'b'
  // outside of the blocks where it was defined
  console.log('B accessed before outermost block:', b);
};

// Testing it out:
functionWithVar();

functionWithLet();

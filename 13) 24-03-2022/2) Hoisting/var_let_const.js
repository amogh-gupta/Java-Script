// Hoisting :- accessing any constant before declaring

// --> var <--
console.log(a) // Hoisting is allowed
var a = 10;

console.log(a)
var a;  // Re-Declare is allowed
a = 10  // Re-Initialise is allowed
console.log(a)

a = 20

console.log(a)

var a = 50;
console.log(a)

// --> let <--
// console.log(a) // Hoisting is not allowed will put error
let a = 10;

console.log(a)
// let a;  // Re-Declare is not allowed will put error
a = 10  // Re-Initialise is allowed
console.log(a)

// --> const <-- // use to make a variable final
const a = 10; 
console.log(a);

// const a;
// a = 10; //This format is not allowed with const

// Hoisting is not allowed will put error
// Re-Declare is not allowed will put error
// Re-Initialise  is not allowed will put error
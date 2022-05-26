// Array Operation's
let arr = ["I", "Am", "Amogh"];
// Printing Array
console.log(arr);
// Output: - [ 'I', 'Am', 'Amogh' ]

// Adding element at the end of an array
arr.push("Gupta");
console.log(arr);
// Output: - [ 'I', 'Am', 'Amogh', "Gupta" ]

// Deleting element at the end of an array
arr.pop();
console.log(arr);
// Output: - [ 'I', 'Am', 'Amogh' ]

// Adding element at the starting of an array
arr.unshift("Hey");
console.log(arr);
// Output: - [ 'Hey', 'I', 'Am', 'Amogh' ]

// Deleting element at the starting of an array
arr.shift();
console.log(arr);
// Output: - [ 'I', 'Am', 'Amogh' ]

arr = ["I", "Am", "Amogh", "Gupta"]

// Array Length
console.log("arr Length is", arr.length);
console.log("arr Length is " + arr.length); // print length in string form

// Sub Array
let sliceArr = arr.slice(2,5);
// let sliceArr = arr.slice(2);
console.log(sliceArr);
// Output: - [ 'Amogh', 'Gupta' ]

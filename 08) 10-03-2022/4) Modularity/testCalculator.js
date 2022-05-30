let calc = require("./calculator.js")
//  OR
// let path = require("path")
// let p = path.join(__dirname,"calculator.js")
// let calc = require(p)

console.log(calc)

let a = 10, b= 5;

console.log("Addition:", calc.addition(a, b))

console.log("Subtraction:", calc.subtraction(a, b))

console.log("Division:", calc.division(a, b))

console.log("Multiplication:", calc.multiplication(a, b))
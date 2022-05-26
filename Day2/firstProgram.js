// To print on browser or on server
console.log("Hey Amogh")

// use "node firstProgram.js" 

// Type to declare  variable: let, var, const

let a = 10
let str = "amogh"
var char = "G"

console.log(a,str,char)
// use "node firstProgram.js" IN TERMINAL
// OUTPUT: 10 amogh G

console.log(a+str+char)
// use "node firstProgram.js" IN TERMINAL
// OUTPUT: 10amoghG

for(let i=0; i<10; i++){
    console.log(i); //semicolon(";") is Optional
}

var x = 0
while(x<10){
    console.log(x)
    x++
}

function print(){
    console.log("Hey Amogh")
}
print()

// Function are first class citizen in Javascript
let fun = function(){
    console.log("Giving function reference to a variable")
}
fun();

// IIFE:- Immediatelty Invoke Function Expression: - Will get invoked itself when running the java script 
(function(){
    console.log("Function are called first class citizen");
})();
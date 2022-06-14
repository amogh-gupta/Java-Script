console.log(a)
// console.log(b) // This line will put an error while execution
console.log(c)
var a = 10;

function fun(){
    var b = 20;
    console.log(b);
}

var c = 30;

fun()

console.log(a)
// console.log(b) // This line will put an error while execution as b is a local variable not global
console.log(c)
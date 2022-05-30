// Task is to access these function out of this js file
function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function mul(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}

module.exports = {
    addition:add,
    subtraction:sub,
    multiplication:mul,
    division:div
}
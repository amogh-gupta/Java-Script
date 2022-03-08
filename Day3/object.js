// Object in JavaScript is just like dictionary in python and hashmap in java

let obj = {};
console.log(obj);

let detail = {
    "firstName": "Amogh",
    "lastName": "Gupta",
    "mobNo": 8383850328,
    age: 24,
}

console.log(detail)

let capAmerica = {
    Name : "Steve",
    Age : 9999,
    Friends : ['Natasha', 'Hulk', 'Thor', 'Tony', 'Bucky'],
    address : {
        city : "Queens",
        state : "Haryana"
    },
    sayHi : function(){
        console.log("Captain America says Hiiii")
    }
}

console.log(capAmerica["Age"])
console.log(capAmerica["Friends"])
console.log(capAmerica["address"]['city'])
capAmerica["sayHi"]()
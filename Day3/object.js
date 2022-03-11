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

// Nested Objects

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

// Ways to access Objects
// object.["key"]
console.log(capAmerica["Age"])
console.log(capAmerica["Friends"])
console.log(capAmerica["address"]['city'])
capAmerica["sayHi"]()

// OR
// object.key
console.log(capAmerica.Name)
console.log(capAmerica.Age)
console.log(capAmerica.Friends)
console.log(capAmerica.Friends[2])
console.log(capAmerica.address)
console.log(capAmerica.address.city)
capAmerica.sayHi()
console.log(capAmerica.qwerty)

// Adding a ney key value in a object
console.log("Object before adding a new key: ", capAmerica)
capAmerica.Movies = ['Avenger', 'Civil War', 'Endgame']
console.log("Object after adding a new key: ", capAmerica)

// Delete a key from Object
console.log("Object before delecting a key: ", capAmerica)
delete capAmerica.Movies
console.log("Object after deleting a new key: ", capAmerica)

// Changing object key's values
console.log("Object before changing value of a key: ", capAmerica)
capAmerica.address.state = "Washington DC"
console.log("Object after changing value of a key: ", capAmerica)
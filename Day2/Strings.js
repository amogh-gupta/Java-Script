str = "I an Amogh gupta";
console.log(str.length); // returning length of the string 
// OUTPUT: 5

// String Replace function
let replaceStr = str.replace("an", "am")
console.log(replaceStr);

// String Upper Case Function
let uppercase = replaceStr.toUpperCase()
console.log(uppercase);

// String Lower case function
let lowercase = replaceStr.toLowerCase()
console.log(lowercase);

// String Concatination
let firstName = "Amogh"
let lastName = "Gupta"

// Option 1
let fullName1 = firstName + " " + lastName
console.log(fullName1)

// Option 2
let fullName2 = firstName.concat(" " + lastName);
console.log(fullName2)

// Split function
let arr = replaceStr.split(" ")
console.log(arr);
let fs = require('fs');
console.log(fs) //print features present inside the object fs

let path = require("path")
let fileName = path.join(__dirname, "file.txt")

// CRUD:- Create Read Update Delete

// 1) Create
fs.writeFileSync(fileName,"Hey, I am Amogh Gupta") 
// create a file (if no file with the same name exist) with name file.txt and add the data passed as arguments
// if file presented with the same name then it will overwrite the data into file.txt


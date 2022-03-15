let fs = require('fs');
// console.log(fs) //print features present inside the object fs

let path = require("path")
let fileName = path.join(__dirname, "file.txt")

// CRUD:- Create Read Update Delete

// 1) Create
// fs.writeFileSync(fileName,"Hey, I am Amogh Gupta") 
// create a file (if no file with the same name exist) with name file.txt and add the data passed as arguments
// if file presented with the same name then it will overwrite the data into file.txt

// 2) Read
// let content1 = fs.readFileSync(fileName, 'utf-8') //utf-8 is a encodded form(format) that we are using
// console.log(content1); // this will return the file data in user readable form (utf-8)

// let content2 = fs.readFileSync(fileName)
// console.log(content2); // this will return the file data in buffer type

// 3) Update
// fs.appendFileSync(fileName,". Welcome to Java Script Tutorial") 
// This will append the data that we are providing in the file insted of overwritting

// console.log(fs.readFileSync(fileName, 'utf-8')) // To read and display the content of file

// 4) Delete
fs.unlinkSync(fileName);
// This function will delete the file whose path is provided as argument
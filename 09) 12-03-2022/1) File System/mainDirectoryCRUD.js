let fs = require("fs")

// Checking wheather folder exixt or not
console.log(fs.existsSync("Temperary Directory")) 
// If file or directory exist then it will print True else false

// 1) Creating an folder or directory
if(!fs.existsSync("Temperary Directory")) // if directory not exist then executing the below command else skip
    fs.mkdirSync("Temperary Directory")
// This command will create a new directory with name "Temperary Directory"

// 2) Reading files or nested directories and return an array 
 let files = fs.readdirSync("tempDirectoryForReadOperation")
 console.log(files)

// Printing the files present in parent folder
 console.log(fs.readdirSync(__dirname))

// 3) Deleating a directory

// Below command will only works for empty directory
fs.rmdirSync("Temperary Directory")

// 4) Coppying a file
let path = require("path")

// Path of the file to be coppying
let sourcePath = path.join(__dirname,"temp.txt")
console.log(sourcePath)

// Path of the file after coppying
let destPath = path.join(__dirname,"tempDirectoryForReadOperation","temp.txt")
console.log(destPath)

// Files present in directory BEFORE
console.log(fs.readdirSync("tempDirectoryForReadOperation"))

// Below command will copy source file into destiation path\
fs.copyFileSync(sourcePath, destPath)

// Files present in directory AFTER
console.log(fs.readdirSync("tempDirectoryForReadOperation"))
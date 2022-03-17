let fs = require("fs")

// 1) Creating directory if directory not exist
fs.mkdirSync("hamariDirectory") // It will create a new directory

// 2) Reading directory
let readingFilePath = __dirname
let fileContent = fs.readdirSync(readingFilePath)
console.log(fileContent) // It will print an array of the file present in the provided direcory path

// 3) Deleting directory
// fs.rmdirSync("hamariDirectory") // It will remove the directory if the directory is empty

// fs.rmdirSync("hamariDirectory", { recursive: true, force: true }) // It will remove the non empty directory


// 4) Copy a file
let path = require("path")

let sourcePath = path.join(__dirname,"test.js") // File path which we need to copy
let destinationPath = path.join(__dirname, "hamariDirectory", "test.js") // final file path after copying file

console.log(sourcePath)
console.log(destinationPath)

fs.copyFileSync(sourcePath, destinationPath) // copy file to the destination folder
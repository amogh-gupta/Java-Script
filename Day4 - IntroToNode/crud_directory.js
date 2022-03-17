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

//move a file
let fs = require("fs")
let path = require("path")
let sourcePath = path.join(__dirname, "..", "hamariDirectory", "firstProgram.js")
let destinationPath = path.join(__dirname,"firstProgram.js")
fs.copyFileSync(sourcePath, destinationPath)
fs.unlinkSync(sourcePath)
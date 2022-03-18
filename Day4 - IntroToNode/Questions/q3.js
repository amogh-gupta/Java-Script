//Q. copy any file from Day2 folder to a new folder inside day4 - IntroToNode  hamariDriectory folder.

let path = require("path")
let fs = require("fs")

let sourcePath = path.join(__dirname,"..","..","Day2","firstProgram.js");
let destinationPath = path.join(__dirname,"..","hamariDirectory","firstProgram.js")

fs.copyFileSync(sourcePath, destinationPath)
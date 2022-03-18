//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let fs = require("fs")
fs.mkdirSync("q1Folder")

let path = require("path")
let filePath = path.join(__dirname, "q1Folder", "myfile.txt")
fs.writeFileSync(filePath, "new file has been created")
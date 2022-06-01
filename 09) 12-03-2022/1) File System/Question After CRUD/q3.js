//Q. copy gitCommand.js from 08) 10-03-2022/4) Modularity folder to a q3Folder inside Question after CRUD

let path = require("path")
let fs = require("fs")

let src = path.join(__dirname,"..","..","..","08) 10-03-2022","4) Modularity","gitCommand.js")
fs.mkdirSync("q3Folder")
let dest =  path.join(__dirname,"q3Folder","gitCommand.js")

fs.copyFileSync(src, dest)


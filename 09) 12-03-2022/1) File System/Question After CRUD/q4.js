// read content of unorganised folder and make  an array which has extension name of each file
 let fs = require("fs")
 let path = require("path")
 let folderPath = path.join(__dirname,"..")

 let content = fs.readdirSync(folderPath)
 let ret = []
 for(let i = 0; i<content.length; i++){
    ret.push(path.extname(content[i]))
 }
 console.log(ret)
 
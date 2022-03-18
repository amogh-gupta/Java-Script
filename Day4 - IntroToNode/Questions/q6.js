//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File
let fs = require("fs")
let path = require("path")
let sourcePath = path.join(__dirname,"..","unorganised")
let content = fs.readdirSync(sourcePath)
for(let i = 0; i<content.length; i++){
    let ext = path.extname(content[i])
    if(ext == ".mp3") console.log("Audio File")
    else if(ext == ".mp4") console.log("Video File")
    else if(ext == ".jpg") console.log("Image File")
    else if(ext == ".js") console.log("Javascript File")
    else if(ext == ".html") console.log("HTML File")
    else if(ext == ".xlsx") console.log("Excel File")
    else if(ext == ".doc") console.log("Document File")
    else if(ext == ".pdf") console.log("PDF File")
    else console.log("Unknown File")
}
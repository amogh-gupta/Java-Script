//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type
let arr = ['audio','video','image','software','documents','applications','other']
let fileType = [".mp3", ".mp4", ".png", ".exe", ".pdf", ".apk", ".rar"]
let fileNames = ['abcd', "lmno", "pqrs", "xyz"]

let fs = require("fs")
let path = require("path")
fs.mkdirSync("q2Folder")
for(let i = 0; i<arr.length;i++){
    let folderPath = path.join(__dirname,"q2Folder",arr[i])
    fs.mkdirSync(folderPath)
    for(let j = 0; j< fileNames.length; j++){
        let filePath = path.join(folderPath, fileNames[j]+fileType[i])
        fs.writeFileSync(filePath,"")
    }
}

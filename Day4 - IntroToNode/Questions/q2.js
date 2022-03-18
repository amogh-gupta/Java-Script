//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type
let arr = ['audio','video','image','software','documents','applications','other']
let type = [".mp3", ".mp4", ".png", ".exe", ".pdf", ".apk", ".rar"]
let fileName = ['abcd', "lmno", "pqrs", "xyz"]
let fs = require("fs")
let path = require("path")
fs.mkdirSync("q2Folder")

for (let val=0; val<arr.length; val++){
    let des = path.join(__dirname,"q2Folder", arr[val])
    fs.mkdirSync(des)
    for( let i = 0; i<fileName.length; i++){
        let filePath = path.join(des,fileName[i]+type[val])
        fs.writeFileSync(filePath, "Hey, Amogh")
    }
}
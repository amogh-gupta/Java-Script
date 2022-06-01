let fs = require("fs") 
let path = require("path")

let folderPath = process.argv[2];

let folderExist = fs.existsSync(folderPath)

let exten = {
    Image : [".jpg" , ".jpeg" , ".png" , ".gif"],
    Audio : [".mp3"],
    Video : [".mp4", ".mkv"],
    Document : [".doc", ".xlsx", ".pdf", ".txt", ".html"],
    Software : [".exe"]
}

let returnFolder = {
    Image : [],
    Audio : [],
    Video : [],
    Document : [],
    Software : [],
    Others : []
}

function folderSelection(extName){
    let retval = "Others"
    for(let abc in exten){
        for(let x = 0; x < exten[abc].length; x++){
            let val = exten[abc][x]
            if(extName == val){
                retval =  abc
                break
            }
        }
    }
    return retval
}

function moveFile(folderPath, fileName, folderName){
    let sourcePath = path.join(folderPath,fileName)
    let destinationPath = path.join(folderPath,folderName,fileName)
    if(!fs.existsSync(path.join(folderPath,folderName))){
        fs.mkdirSync(path.join(folderPath,folderName))
    }
    fs.copyFileSync(sourcePath, destinationPath)
    fs.unlinkSync(sourcePath)
}

if(folderExist){
    let content = fs.readdirSync(folderPath)
    
    for(let i = 0; i<content.length; i++){
        let extension = path.extname(content[i]) 
        let folder_Name = folderSelection(extension)
        returnFolder[folder_Name].push(content[i])
        moveFile(folderPath, content[i], folder_Name)
        // console.log(content[i]+"--folder Name:---" + folder_Name + "------------")
    }
}
else{
    console.log("Please Enter a valid path!!!")
}

console.log(returnFolder)

// Terminal Command : node .\fileOrganizer.js "F:\WebDev\JavaScript\11) 17-03-2022\2) Project\MixedFiles copy"
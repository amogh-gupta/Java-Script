// copy the path of "path.js"
// "F:\WebDev\JavaScript\Day4\path.js"

let path = require("path")
console.log(path)

// 1) extname("path or fileName with extension e.g. index.html") - returns extension of the file
let extensionName1 = path.extname("object.js") // return .js as output
console.log(extensionName1)

let extensionName2 = path.extname("F:\WebDev\JavaScript\Day4\path.js") // return .js as output
console.log(extensionName2)

let extensionName3 = path.extname("object.html") // return .html as output
console.log(extensionName3)

// 2) basename("path or fileName with extension e.g. index.html") - returns file anme with extension
let baseName1 = path.basename("object.js") // return object.js as output
console.log(baseName1)

let baseName2 = path.basename("F:\WebDev\JavaScript\Day4\path.js") //* return path.js as output 
console.log(baseName2)

// if above code not work then either replace '\' with '/' (this way is not recommended  
// just for exexcution) or use the below way

let baseName3 = path.basename(__filename) // return path.js as output
console.log(baseName3)

let baseName4 = path.basename("object.html") // return object.html as output
console.log(baseName4)

// 3) dirname and filename - return the path of the folder and the path of the file 

let dirPath = __dirname
console.log(dirPath) // or console.log(__dirname)

let filePath = __filename
console.log(filePath) // or console.log(__filename)

// 4) join(a,b) -> return a path of a file and directory -> a + "\" + b - a\b

let newPath = path.join(dirPath,"text.js") 
console.log(newPath) // return directoryPath(..JavaScript\Day4) + "\" + text.js -> ..JavaScript\Day4\text.js

let cp = require("child_process")
cp.execSync("git status")
cp.execSync("git add .")
cp.execSync('git commit -m "Object - Path and its features"')
console.log(""+cp.execSync("git push"))
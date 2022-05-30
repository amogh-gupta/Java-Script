// Copy path of any file and paste it down here

// F:\WebDev\JavaScript\08) 10-03-2022\2) Path\path.js

const { Console } = require("console");
let path = require("path");
// console.log(path);


// Getting the extension name of the file like .html, .js, .zip, .cs
let extensionName = path.extname("F:\WebDev\JavaScript\08) 10-03-2022\2) Path\path.js");
console.log(extensionName); 
// OUTPUT: - .js

// Getting the base name or file name of the file like abc.html, xyz.js, lmn.zip, uvw.cs
let baseName = path.basename("F:\\WebDev\\JavaScript\\08) 10-03-2022\\2) Path\\path.js")
console.log(baseName)
// OUTPUT: - path.js 

// Getting the present folder path 
let presentPath = __dirname;
console.log(presentPath)

// Getting the present file path
let filePath = __filename;
console.log(filePath)
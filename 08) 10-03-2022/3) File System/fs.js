let fs = require("fs");
console.log(fs)

// CRUD: - Create Read Update Delete
let path = require("path")

// 1) Creating a new file and Writing some data into
let newFilePath = path.join(__dirname,"file.txt")

// fs.writeFileSync(newFilePath, "") // This command just create a file with empty data
fs.writeFileSync(newFilePath, "Hello I am a txt file")

// ON REPETITIVE CALLING IT WILL REPLACE THE EXISTING FILE WITH THE SAME BASE NAME

// 2) Reading data from a file | If file not exixt it will through an error
let content = fs.readFileSync(newFilePath, "utf-8")
console.log(content)
// OUTPUT is in human readable form

// utf-8 is a type of encoded form or format in human readable format

// If we not use utf-8 then it will print data in buffer form
let content2 = fs.readFileSync(newFilePath)
// console.log(content2)
// OUTPUT is in buffer form

// 3) Updating data in a exixting file | or create a new file if file is not present
fs.appendFileSync(newFilePath, ", Welcome to the JAVA SCRIPT")
console.log(fs.readFileSync(newFilePath, "utf-8"))
// the above commmand will add(append) the data with the exixting data of file.txt

// 4) Delete a file
fs.writeFileSync(path.join(__dirname,"amogh.txt"), "")

// fs.unlinkSync("amogh.txt") // By just file name if it is present in the parent folder
fs.unlinkSync(path.join(__dirname,"amogh.txt")) // via file path 
let cp = require("child_process")

// Print the childProcess object 
console.log(cp)

// Uncomment the below Command to open Calculator
// cp.execSync("calc")

// Uncomment the below Command to open VS code
// cp.execSync("code")

let content = cp.execSync("node fileForTestingPurpose.js")
// The below line will print the data present in the test file in Binary Format
console.log(content)

// to convert binary data into string add any string with the binary data

// The below line will print the data present in the test file in String Format
console.log("Output "+content)
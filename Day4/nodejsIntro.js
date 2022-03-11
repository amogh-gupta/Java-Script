let cp = require('child_process')
// For opening Calculator
// cp.execSync("calc")

// For opening vscode
// cp.execSync("code")

// Run the js file and print its output
// create new js file and name it as test.js
let content = cp.execSync("node test.js")
console.log(content)
console.log("output of test.js file " + content)

// Using child process to execute Git commands
console.log(""+cp.execSync("git status"))
console.log(""+cp.execSync("git add ."))
console.log(""+cp.execSync('git commit -m "Child process for opening and storing other js file and execute Git commands"'))
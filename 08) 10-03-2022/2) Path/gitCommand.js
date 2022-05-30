// Run this js file to update the content on Git in one click
let cp = require("child_process")

console.log(cp.execSync("git add -A") + "")
console.log(cp.execSync('git commit -m "Intro to Node: - Path - getting extension name"') + "")
console.log(cp.execSync("git push") + "")
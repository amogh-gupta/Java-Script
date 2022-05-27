// Run this js file to update the content on Git in one click
let cp = require("child_process")

cp.execSync("git add -A")
cp.execSync('git commit -m "Intro to Node: - Child Process"')
cp.execSync("git push")
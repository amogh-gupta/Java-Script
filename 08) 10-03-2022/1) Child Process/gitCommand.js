let cp = require("child_process")

cp.execSync("git add .")
cp.execSync('git commit -m "Intro to Node: - Child Process"')
cp.execSync("git push")
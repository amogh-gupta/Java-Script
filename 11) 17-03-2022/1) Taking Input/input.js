// Method 1
let inputArr = process.argv
console.log(inputArr)
/*
OUTPUT: - ['C:\\Program Files\\nodejs\\node.exe',
           'F:\\WebDev\\JavaScript\\11) 17-03-2022\\1) Taking Input\\input.js', 
            'Hello']
*/
console.log(inputArr[2])
// OUTPUT: - Hello

// Method 2
let input = process.argv[2]
console.log(input)
// OUTPUT: - Hello
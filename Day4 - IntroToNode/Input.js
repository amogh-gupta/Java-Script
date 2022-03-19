let input1 = process.argv;
console.log(input1) 
// ['C:\\Program Files\\nodejs\\node.exe', 'F:\\WebDev\\JavaScript\\Day4 - IntroToNode\\Input.js','hello']
console.log(input1[2]) // OUTPUT: hello

// OR

let input2 = process.argv[2];
console.log(input2) // OUTPUT: hello

// Way of execution in terminal "node .\Input.js hello"
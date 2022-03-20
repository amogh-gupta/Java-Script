//Question 3
// function rainDance(data){
//     retList = [];
//     for(let n = 0; n<data.length; n++){
//         let inDic = data[n];
//         let outDic = {name:"", avgRainfall:0};
//         let avg = 0;
//         for(let x in inDic["rainfall"]){
//             avg += inDic["rainfall"][x];
//         }    
//         avg /= inDic["rainfall"].length;
//         outDic["name"] = inDic["name"];
//         outDic["avgRainfall"] = avg;
//         retList.push(outDic);
//     }
//     return(retList);
// }
// let d = [
//     { name: "Boston", rainfall: [1, 2, 3, 4, 5, 6, 7] },
//     { name: "Chandler", rainfall: [0, 0, 1, 0, 0, 1, 1] },
//     { name: "Charlotte", rainfall: [2, 2, 2, 2, 2, 2, 2] },
//     { name: "Dallas", rainfall: [3, 3, 2, 6, 1, 3, 8] },
// ]

// rainDance(d)

// Question 4
// let arr = [1, 2, 3]; 
// (function () { 
//     for (x in arr) arr.unshift(arr.pop()); 
//     console.log(arr); 
// })();

// let randomAdder = function (arr = ["a", "b"]) { 
//     arr[arr.length * arr.length] = arr.length * arr.length; 
// };

// randomAdder(arr); 
// randomAdder();

// console.log(arr[9]); 
// console.log(arr[8]);

// Question 5
// (function () { 
//     if ((-100 && 100 && "0") || [] === true || 0) 
//     { 
//         console.log(1); 
//         if ([] || (0 && false)) 
//         { 
//             console.log(2); 
//         }
//         if (Infinity && NaN && "false") {
//             console.log(3);
//             if ("") {
//                 console.log(4);
//             }
//         }
//         else {
//             console.log(5);
//             if (({} || false === "") && !(null && undefined)) {
//                 console.log(6);
//             }
//         }
//     } 
// else { 
//     console.log(7); 
// } 
// })();

// Question 6
// let a = "This only works if and only if";
// console.log(a);
// let b = a.slice(a.indexOf("only"));
// console.log(b);

// let c = b.lastIndexOf("only");
// console.log(c);
// b[c] = "i";
// console.log(b[c]);
// console.log(b);
// console.log(a); console.log(b);

// Queston 7
// function decToBin(decNum){
//     let ret = 0
//     let n = 0
//     while(decNum!=0){
//         let rem = decNum%2
//         let val = rem*(Math.pow(10,n))
//         n += 1
//         ret = val+ret
//         decNum -= rem
//         decNum /= 2
//    }
//    return(ret)
// }
// let result = decToBin(3672)
// console.log(result)

// Question 8
// function spoon(str){
//     let arr = str.split(" ")
//     let x = arr[0][0]
//     let y = arr[1][0]
//     let a = arr[0].slice(1)
//     let b = arr[1].slice(1)
//     let ret = y+a+" "+x+b
//     return ret
// }

// console.log(spoon("horse riding"))

// Question 9
// function f() { console.log(arguments); }

// function f(a, b) { return a + b; }

// console.log(f(2, 3, 4, 5));

// function f(x, y, z, t) { return x + y + z + t; }

// console.log(f(2, 3, 4, 5));

// Question 10
// console.log(a); 
// f(2, 3, 4, 5);

// var a = 1; 
// var a = 2; 
// console.log(a); 
// console.log(b); 
// let b = 2;

// function f() { 
//     console.log(arguments); 
// }

// Question 11

// let obj = {"concept":""};

// console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );

// Question 12
// let a;

// console.log(a);

// function A() { 
//     let a = 2; 
//     console.log(a);

//     function C() { 
//         console.log(a);

//         function D() {
//             console.log(a);

//             a = 2;
//         }
//         D();
//         a = 3;
//     }
//     C(); 
// }

// function B() {  
//     let a; 
//     console.log(a);

//     function E() { 
//         a = 6; 
//         console.log(a);
//     }

//     a = 2; 
//     E(); 
//     console.log(a); 
// }

// function F() { 
//     console.log(a); 
//     a = 2; 
// }

// a = 3;

// F(); 
// B(); 
// A();

// Question 13
function updateUsers(users, userObject, item) { 
    //write your code here 
}

console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "GOT Book Series" ) ) );
    
console.log( JSON.stringify( updateUsers(users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }) ) );
    
console.log( JSON.stringify( updateUsers( users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }, "Chair" ) ) );
    
console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "Fan" ) ) );
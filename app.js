const { log } = require("console");
var fs = require("fs");

fs.writeFileSync("sagar.txt","My Name is Sagar")
// fs.writeFileSync("math.js",'');

// console.log(20)
// console.log('hello node',20+20);

// function fruit(item){
//     console.log(item)
// }

// fruit('Apple')

// var myArr = [7, 12, 9, 4, 11];
// var minVal = myArr[0];

// for(i in myArr){
//     if (i < minVal){
//         minVal = i
//     }

// }
// console.log(minVal)


// var myArr = [7, 12, 9, 4, 11,2,55,23];
// var minVal = myArr[0];
// console.log(minVal);


// for (let num of myArr) {
//     if (num < minVal) {
//         minVal = num;
//     }
// }

// console.log(minVal); // 4


const math = require('../Node-2025/math')
console.log("Addition:", math.add(5, 3));       // Expected: 8
console.log("Multiplication:", math.multiply(4, 2)); // Expected: 8

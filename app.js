const { log } = require("console");
var fs = require("fs");
var fs = require('fs')

fs.writeFileSync("sagar.txt","My Name is Sagar")
fs.writeFileSync("math.js",'');

console.log(20)
console.log('hello node',20+20);

function fruit(item){
    console.log(item)
}

fruit('Apple')

var myArr = [7, 12, 9, 4, 11];
var minVal = myArr[0];

for(i in myArr){
    if (i < minVal){
        minVal = i
    }

}
console.log(minVal)


var myArr = [7, 12, 9, 4, 11,2,55,23];
var minVal = myArr[0];
console.log(minVal);


for (let num of myArr) {
    if (num < minVal) {
        minVal = num;
    }
}

console.log(minVal); // 4


const math = require('./math')
console.log("Addition:", math.add(5, 3));       // Expected: 8
console.log("Multiplication:", math.multiply(4, 2)); // Expected: 8


var a= 300;
let b = 200;
let c = 50

console.log(a+b+c)

if(a==300){
    // debugger
    console.log('this is if codnition');
    
}else{
    
    console.log("this is else condition")
}

for(let i=1; i<=10; i++){
    console.log(i)
}


// var users = ["Anil","Sam", "Pratik","Joel"];

// for(var a=0;a< users.length ; a++){
//     console.log(users[a])
// } 


// var user = {
//     name:"Rajesh",
//     age:25,
//     city:"Pune"
// }

// console.log(user);
// console.log(user.name);
// console.log(user.city)


// const now = new Date();
// console.log("current date and time:",now)

const name = process.argv[3];
console.log(`Hello, ${name || "Guest"}!`);

// const fs = require('fs');


// const data = fs.readFileSync('math.js', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log(data);

// fs.readFile('math.js', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
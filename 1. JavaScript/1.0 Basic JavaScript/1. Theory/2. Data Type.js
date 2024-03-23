/*
  Data Types or Variable Types
  1. primitive Data Type - number, String, boolean, null
  2. non-primitive Data Type - Array, object , function
 */

//   1. primitive Data Type - number, String, boolean, null

// 2. non-primitive Data Type - Array, object , function
// 2.0 - Function

console.log("Function--------------------Example-1----------------------------------------")
function say()
{
    console.log("hello");
}

say();

console.log("Function--------------------Example-2----------------------------------------")
function say1(para)
{
    console.log(para);
}
/* As a Prameter we can pass anythin in functionparamiter */
say1(10);
say1([1,3,4,52,6]);
say1("Suraj");

console.log("Function--------------------Example-3----------------------------------------")
function say2()
{
      let val = Math.random()>0.5?true:"I'm a Strign return type";
      return val;  //<= we can return any type of data like boolean, String, anything
}

let r = say2();
console.log(r);

// 2.1 - Object 
console.log("Object--------------------Example-1----------------------------------------")
//Object is Group of key-value like in java HashMap
let cap ={
    name:"Suraj",
    age:24,
    type:"male",
    mobiles:[6299180731,8804785562],
    sayhi: function(){console.log("Hello")}
}
//Get value
console.log(cap.name);
console.log(cap.age);
console.log(cap.type);
console.log(cap.mobiles)
console.log(cap.mobiles[0]);
cap.sayhi();

//set or Update value
cap.name = "Suraj Sharma";
cap.age = 25;
cap.mobiles[2] = 99054413234;
//print after update value
console.log(cap.name);
console.log(cap.age);
console.log(cap.type);
console.log(cap.mobiles)
console.log(cap.mobiles[0]);
cap.sayhi();

//delete value
delete cap.mobiles

// iterate on object
console.log("\nIterate on object");
for(let key in cap)
{
    console.log(key,":",cap[key]);
}

//2.2 - Array
console.log("Array Declare--------------------Example-1----------------------------------------")
//Array declare
// let arr=[];
let arr =[1,2,3,4,5,6,7,8];
console.log(arr);

console.log("---Array Method--")
console.log("arr.length")
//1 arr.length
let i = 0;
while(i<arr.length)
{
    console.log(arr[i]);
    i++;
}
//2 push-> use for add value at first in array , unshift -> use for add value a tlast in array
console.log("---push, unshift----")
arr.push("Suraj");
arr.unshift(true);
console.log(arr);

//3 pop-> use for remove value from first index, shift=> use for remove value from last index
console.log("----pop, shift---")
arr.pop();
arr.shift();
console.log(arr);

//4 slice 
console.log("----slice---")
// let parofArray = arr.slice(2,4)  // (start index, end index)
let parofArray = arr.slice(2)
console.log(parofArray);

//5 splice
console.log("----splice---")
arr.splice(2,1) // (start index, jitne element delete karne hai uska count)
console.log(arr);

//6 indexof, contains


console.log("Topic=> String--------------------Example-1----------------------------------------")
//maximu 90% similar to java String methods

let singleQuotes = 'Single Quotes String';
let doubleQuotes = "double Quotes String";

let str = "Suraj Kumar Sharma"

console.log("---------Strign Methods--------")
//1 charAt
let ch = str.charAt(4);
console.log(ch); 

//2 ascii
let ascvalue = str.charCodeAt(3);
console.log(ascvalue);

//3 substring
let temp = str.substring(2,5);
console.log(temp);

//4 trim() 
str.trim();
console.log(str);

//5 split
let temparr = str.split(" ");
console.log(temparr);

//6 join
let s = temparr.join("+");
console.log(s);












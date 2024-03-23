// Data types in JavaScript
/*
1. primitive Data Type - number, String,boolean,null
2. non-primitive datatype- array,object function

 */

//2 
function say(para)
{
    console.log("Hello");
    console.log(para);
    let val = Math.random()>0.5?true:"i'm return value";
    return val;

}

// function call
say();
say(10);
say([1,2,3,4,5]);

let = say();
console.log(let);
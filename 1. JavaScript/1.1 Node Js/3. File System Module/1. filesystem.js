const path = require("path"); // this is path module for add dirname path 


// ** -  fileSystem ** --
// files -> Create,read,update,delete
let fs = require("fs");

//1 read
let buffer = fs.readFileSync(path.join(__dirname, "abc.js"));
console.log("bin data"+buffer) // + use for buffer conver into string

//2 create
// fs.openSync("abc2.txt","w");  // method-1
// writeFilesyc() -> if file no exit then it will be Create and write and this methos not delete already exist content 
fs.writeFileSync("abc3.txt","I'm hapyy today");

//3 update
fs.appendFileSync("abc.txt","Why your are happy today an reason");




// ** -  Working with Folder ** --
// files -> Create,read,update,delete

//1 Create Folder
// fs.mkdirSync("meriDirectory");
/* Note-> path.join(__dirname => this thing only use for Create this dir in your current working folder 
    you can use like this also 
     fs.mkdirSync( path.join("meriDirectory"));
*/

//2 write 
// fs.writeFileSync("meriDirectory/merifile.txt","this is mera content");

//3 Read
let content = fs.readdirSync("meriDirectory");
console.log(content);

//4 remove - use fs.unlinkSync
for(let i=0;i<content.length;i++)
{
    console.log("file",content[i],"remove");
    //remove method
    fs.unlinkSync("meriDirectory/"+content[i]);
}

//5 remove folder
fs.rmdirSync("meriDirectory");




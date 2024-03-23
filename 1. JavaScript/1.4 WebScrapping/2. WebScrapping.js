/*
 go into folder 1.1 Node js for look this concept and code  
 */

const request = require('request');
const cheerio = require('cheerio');


request('https://www.worldometers.info/coronavirus', cb);

function cb (error, response, html) 
{
  if(error)
  {
      console.error('error:', error); // Print the error if one occurred
  }
  else
  {
    handleHTML(html);
  }
}

function handleHTML(html)
{
    let setTool = cheerio.load(html);
    // let h1s = setTool("h1");
    let arr = setTool("#maincounter-wrap span");
    
    // iterate on data 
    // for(let i=0;i<arr.length;i++)
    // {
    //     let data = setTool(arr[i]).text();
    //     console.log("data",data);
    // }

    let total = setTool(arr[0]).text();
    let death = setTool(arr[1]).text();
    let recover = setTool(arr[2]).text();

    console.log("Total Case =>",total);
    console.log("Total death =>",death);
    console.log("Total recover => ",recover);
    

}
const fs = require("fs")

// File Read
console.log("st1");
fs.readFile('./test.txt',{encoding:'utf8'},(err,data)=>{
    if(err){
        console.log("there is an error");
        console.error(err);
    }else{
        console.log(data);
    }

})
console.log("st2");
// write

fs.writeFile('./test2.txt',"yamete kudasai",()=>{
    console.log("done writing");
})

// deleting files
console.log("st");
fs.unlink('./test3.txt',(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("done");
    }
})
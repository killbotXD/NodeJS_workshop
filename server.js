const http = require("http")
const fs = require('fs')


var server = http.createServer((req,res)=>{
    var path = "./views"
    switch(req.url){
        case "/": 
            path+="/index.html" // fs will read from index.html inside views folder
            break
        case "/about":
            path+="/about.html"
            break
        default:
            path+="/error.html"
            break
    }
fs.readFile(path,(err,data)=>{

    
    if(err){
        console.error(err);
        res.end()
    }else{
        res.write(data);
        res.end()
    }
})
})

server.listen(3000,()=>{
    console.log("The server is listening");
})

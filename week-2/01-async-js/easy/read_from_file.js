const fs = require("fs")

fs.readFile("././01-async-js/README.md","utf-8",(err,data)=>{
    console.log(data)
})

let a = 0
for(let i=0;i<100000000000;i++){
    a += i
}

console.log(a);
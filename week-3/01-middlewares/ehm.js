//error handling middleware
const express = require("express")
const app = express()

function m1(req,res,next){
    req.vm1 = "im from middleware 1"
    next()
}

app.use(m1)

app.get("/",(req,res)=>{
    const v1m1 = req.vm2
    res.json({
        v1m1,
        msg:"from the root route handler"
    })
})

function ehm1(err,req,res,next){
    req.v1eh1 = "from error handling middleware"
    res.json({
        err,
        msg:"from the ehm1"
    })
    next()
}

app.use(ehm1)

app.listen(3000)
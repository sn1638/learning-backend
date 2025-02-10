// console.log("everything is ok")
require('dotenv').config();

const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("hello how are you")
})

app.get('/sachin',(req,res)=>{
    res.send('<><h1>this is h1</h1> <h2>this is h2</h2><h3>this is h3</h3><h4>this is h4</h4><h5>this is h5</h5> <h6>this is h6</h6></>')
    })

app.listen(process.env.port,()=>{
    console.log(`server is running on port ${process.env.port}`)
})
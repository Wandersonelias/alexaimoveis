const express = require('express');
const app = express();

app.use('/',(req,res,next)=>{
    res.send("Rsposta Hello World");
})





module.exports = app;


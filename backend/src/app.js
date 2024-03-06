const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
//middlewares configurações 
app.use(cors());
app.use(helmet());
app.use(express.json());

// middlewares de processamento
app.use('/error',(req,res,next)=>{
    throw new Error('Erro louco')
})

app.use('/',(req,res,next)=>{
    res.send("Rsposta Hello World");
})

//middleware de erros

const errorMiddleware = require('./middlewares/errorMiddleware');
app.use(errorMiddleware);
module.exports = app;


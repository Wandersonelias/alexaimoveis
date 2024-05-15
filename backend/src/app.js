const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const errorMiddleware = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const authController = require('./controllers/authController');
const imovelController = require('./controllers/imovelController');
const userModel = require('./models/userModel');


//middlewares configurações 
app.use(cors());
app.use(helmet());
app.use(express.json());

// middlewares de processamento

app.post('/login',authController.doLogin)
app.post('/logout',authController.doLogout);

app.get('/imoveis',authMiddleware,imovelController.listarImoveis);
app.post('/imoveis',authMiddleware,imovelController.cadastrarImovel);
app.put('/imoveis/:id',authMiddleware,imovelController.atualizarImovel);
app.delete('/imoveis/:id',authMiddleware,imovelController.deletarImovel);




//middleware de erros
app.use(errorMiddleware);
module.exports = app;


const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const errorMiddleware = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const authController = require('./controllers/authController');
const imovelController = require('./controllers/imovelController');
const userController = require('./controllers/userController');
const agendamentoController = require('./controllers/agendamentoController');
const alexaController = require('./controllers/alexaController');


//middlewares configurações 
app.use(cors());
app.use(helmet());
app.use(express.json());

// middlewares de processamento

//Rota inicial raiz do sistema
app.get("/",(req,res,next)=>{
     
    res.status(200).json({status: `Running - ${new Date().toLocaleDateString()}`}) 

})


app.post('/login',authController.doLogin)
app.post('/logout',authController.doLogout);


app.get('/users',authMiddleware, userController.getFindAllUsers)
app.post('/users', authMiddleware, userController.cadastrarUsuario);
app.put('/users/:id', authMiddleware, userController.atulizarUsuario);
app.delete('/users/:id', userController.deletarUsuario);


app.get('/imoveis', authMiddleware, imovelController.listarImoveis);
app.post('/imoveis', authMiddleware,imovelController.cadastrarImovel);
app.get('/imoveis/:id', authMiddleware,imovelController.deletarImovel);
app.put('/imoveis/:id', authMiddleware,imovelController.atualizarImovel);
app.delete('/imoveis/:id',authMiddleware, imovelController.deletarImovel);

app.post('/agendamentos',agendamentoController.cadastrarAgendamento);
app.get('/agendamentos', authMiddleware,agendamentoController.listarAgendamentos);
app.put('/agendamentos/:id',authMiddleware, agendamentoController.atualizarAgendamento);
//app.delete('/agendamentos/:id',agendamentoController.deletarAgendamento);


app.get('/alexa/imoveis/:cidade', alexaController.listarImoveisDisponiveis);
app.get('/alexa/imoveis/bairro/:cidade/:bairro', alexaController.listarImoveisDisponiveisBairro);
app.get('/alexa/imoveis/tipo/:cidade/:tipo', alexaController.listarImoveisDisponiveisTipo);
app.get('/alexa/imoveis/:cidade/:bairro/:tipo', alexaController.listarImoveisDisponiveisBairroTipo);
app.get('/alexa/imoveis/valor/:cidade/:valor/', alexaController.listarImoveisDisponiveisValor);
app.get('/alexa/imoveis/:cidade/:bairro/:tipo/:valor', alexaController.listarImoveisDisponiveisBairroTipoValor);


//Rotas de listagem e agendamentos








//middleware de erros
app.use(errorMiddleware);
module.exports = app;


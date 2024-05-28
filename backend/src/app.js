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

app.post('/login',authController.doLogin)
app.post('/logout',authController.doLogout);


app.get('/users', userController.getFindAllUsers)
app.post('/users', userController.cadastrarUsuario);
app.put('/users/:id', userController.atulizarUsuario);
app.delete('/users/:id', userController.deletarUsuario);


app.get('/imoveis',imovelController.listarImoveis);
app.post('/imoveis',imovelController.cadastrarImovel);
app.put('/imoveis/:id',imovelController.atualizarImovel);
app.delete('/imoveis/:id',imovelController.deletarImovel);

app.post('/agendamentos',agendamentoController.cadastrarAgendamento);
app.get('/agendamentos',agendamentoController.listarAgendamentos);
app.put('/agendamentos/:id',agendamentoController.atualizarAgendamento);
//app.delete('/agendamentos/:id',agendamentoController.deletarAgendamento);


app.get('/alexa/imoveis/:cidade', alexaController.listarImoveisDisponiveis);
app.get('/alexa/imoveis/:cidade/:bairro', alexaController.listarImoveisDisponiveisBairro);







//middleware de erros
app.use(errorMiddleware);
module.exports = app;


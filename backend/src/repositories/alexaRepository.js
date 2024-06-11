const imovelModel = require('../models/imovelModel');
const Agendamentos = require('../models/agendamentoModel');


function getAllImoveisCidade(status,cidade) {
    //A cidade do usario vem por padrão pegar pela localização | finalizado
    return imovelModel.findAll({where: {status: status, cidade: cidade}});
}


function getAllImoveisBairro(status,cidade,bairro) {
    //A cidade do usario vem por padrão pegar pela localização | finalizado
    return imovelModel.findAll({where: {status: status, cidade: cidade, bairro: bairro}});
}

function getAllImoveisTipo(status,cidade,tipo){
    //A cidade do usario vem por padrão pegar pela localização
    return imovelModel.findAll({where: {status: status, cidade: cidade,tipo: tipo}});

}

function getAllImoveisValor(status,cidade,valor){
    //A cidade do usario vem por padrão pegar pela localização
    return imovelModel.findAll({where: {status: status, cidade: cidade, valor: valor}});
}

function getAllImoveisTipoBairro(status,cidade,bairro,tipo){
    //A cidade do usario vem por padrão pegar pela localização
    return imovelModel.findAll({where: {status: status, cidade: cidade, bairro: bairro,tipo: tipo}});

}

function getAllImoveisTipoBairroValor(status,cidade,bairro, tipo, valor){
    //A cidade do usario vem por padrão pegar pela localização
    return imovelModel.findAll({where: {status: status, cidade: cidade, bairro: bairro, tipo: tipo, valor: valor}});
}

//Repositorys de listagem e agendamentos

function createAgendamento(agendamento) {
    return Agendamentos.create(agendamento);
}



module.exports = {
    getAllImoveisCidade,
    getAllImoveisBairro,
    getAllImoveisTipo,
    getAllImoveisValor,
    getAllImoveisTipoBairro,
    getAllImoveisTipoBairroValor,
    createAgendamento
    
}
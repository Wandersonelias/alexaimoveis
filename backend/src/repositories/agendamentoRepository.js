const Agendamentos = require('../models/agendamentoModel');
const imovelModel = require('../models/imovelModel');



function createAgendamento(agendamento) {
    return Agendamentos.create(agendamento);
}

function findAllAgendamentos() {
    try {
        return Agendamentos.findAll();
    } catch (error) {
        console.log(error);
        return error;
    }
}

function findAllAgendamentos() {
    try {
        return Agendamentos.findAll({
            include: { model: imovelModel}
        });
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    createAgendamento, 
    findAllAgendamentos
}
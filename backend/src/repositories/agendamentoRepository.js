const { where } = require('sequelize');
const Agendamentos = require('../models/agendamentoModel');
const imovelModel = require('../models/imovelModel');



function createAgendamento(agendamento) {
    return Agendamentos.create(agendamento);
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

function findAgendamentoById(id) {
    return Agendamentos.findByPk(id);
}

function updateAgendamento(id, agendamento) {
    return Agendamentos.update(agendamento, { where: { id: id } });
}


function deleteAgendamento(id) {
    return Agendamentos.destroy({ where: { id: id } });
}


module.exports = {
    createAgendamento, 
    findAllAgendamentos, 
    findAgendamentoById, 
    updateAgendamento, 
    deleteAgendamento
}
const Sequelize = require('sequelize');
const database = require('../db');
const agendamentoModel = require('./agendamentoModel');
const Agendamentos = require('./agendamentoModel');


const imovelModel = database.define('imoveis',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})


imovelModel.associate = function(models) {
    imovelModel.hasMany(Agendamentos, { foreignKey: 'imoveiId', as: 'agendamentos' });
}








module.exports = imovelModel;
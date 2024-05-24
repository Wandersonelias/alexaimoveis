const {DataTypes} = require('sequelize');
const database = require('../db');
const imovelModel = require('./imovelModel');



const Agendamentos = database.define('agendamentos',{

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cliente_nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cliente_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imoveiId: {
        type: DataTypes.INTEGER,
    },
    data_agendamento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora_agendamento: {
        type: DataTypes.TIME,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    

        

        
    });

    

    Agendamentos.associate = function(models) {
        Agendamentos.belongsTo(imovelModel, { foreignKey: 'imoveiId' , as: 'imovel' });
    };
    




module.exports = Agendamentos;




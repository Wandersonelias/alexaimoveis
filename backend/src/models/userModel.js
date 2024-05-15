const Sequelize = require('sequelize');
const database = require('../db');

const userModel = database.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,       
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})


module.exports = userModel;
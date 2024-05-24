'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // await queryInterface.createTable('agendamentos', {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     allowNull: false,
    //     primaryKey: true
    //   },
    //   data_agendamento: {
    //     type: Sequelize.DATE,
    //     allowNull: false
    //   },
    //   hora_agendamento: {
    //     type: Sequelize.TIME,
    //     allowNull: false
    //   },
    //   telefone: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    //   },
    //   createdAt: Sequelize.DATE,
    //   updatedAt: Sequelize.DATE,
    // });

  },

  async down(queryInterface, Sequelize) {

    // await queryInterface.dropTable('agendamentos');

  }
};

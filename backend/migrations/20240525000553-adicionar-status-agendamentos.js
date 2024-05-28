'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('agendamentos','status', { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'confirmado',
      after: "telefone" 
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('agendamentos','status');
  }
};

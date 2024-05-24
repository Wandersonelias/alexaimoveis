'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('agendamentos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      cliente_nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cliente_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imoveisId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'imoveis',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      data_agendamento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      hora_agendamento: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('agendamentos');

  }
};

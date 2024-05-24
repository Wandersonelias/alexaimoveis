'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.addConstraint('agendamentos', {
    //   fields: ['imoveis_id'],
    //   type: 'foreign key',
    //   name: 'agendamentos_imoveis_id_fkey',
    //   references: {
    //     table: 'imoveis',
    //     field: 'id'
    //   }
    // });
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.removeConstraint('agendamentos', {
    //   fields: ['imoveis_id'],
    //   type: 'foreign key',
    //   name: 'agendamentos_imoveis_id_fkey',
    //   references: {
    //     table: 'imoveis',
    //     field: 'id'
    //   }

    // });
  }
};

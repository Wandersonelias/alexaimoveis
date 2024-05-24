'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'nome', {
      type: Sequelize.STRING,
      allowNull: false,
      after: 'id' // Add this line to specify the position
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'nome');

  }
};

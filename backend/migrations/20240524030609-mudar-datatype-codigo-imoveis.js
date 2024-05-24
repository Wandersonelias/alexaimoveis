'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    // await queryInterface.changeColumn('imoveis', 'codigo', { 
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   defaultValue: Math.floor(Math.random() * 9000) + 1000 //Função para gerar numero de quatro digitos aleatorios
    // });
    
    
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.changeColumn('imoveis', 'codigo', {
    //   type: Sequelize.STRING,
    //   // Add any other options you need, such as allowNull, defaultValue, etc.
    // });
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('imoveis', 
    {  
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
      cidade: {
          type: Sequelize.STRING,
          allowNull: false
      },
      estado: {
          type: Sequelize.STRING,
          allowNull: false
      },
      cep: {
          type: Sequelize.STRING,
          allowNull: false
      },
      numero: {
          type: Sequelize.STRING,
          allowNull: false
      },
      complemento: {
          type: Sequelize.STRING,
          allowNull: false
      },
      bairro: {
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
      imagem: {
          type: Sequelize.STRING,
          allowNull: false
      },
      tipo: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('imoveis');
     
  }
};

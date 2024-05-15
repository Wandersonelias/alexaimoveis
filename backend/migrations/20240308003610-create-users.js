'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return await queryInterface.createTable('users', 
      { 
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
        
      });
    
  },

  async down (queryInterface, Sequelize) {
   
    return await queryInterface.dropTable('users');
    
  }
};

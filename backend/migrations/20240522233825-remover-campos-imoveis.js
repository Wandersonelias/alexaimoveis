'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     await queryInterface.removeColumn('imoveis', 'cep');
//     await queryInterface.removeColumn('imoveis', 'estado');
//     await queryInterface.removeColumn('imoveis', 'numero');
//     await queryInterface.removeColumn('imoveis','imagem');
//     await queryInterface.removeColumn('imoveis','complemento');
//   },

//   async down (queryInterface, Sequelize) {
//     // await queryInterface.addColumn('imoveis', 'cep', {
//     //   type: Sequelize.STRING,
//     //   allowNull: false
//     // });
//     // await queryInterface.addColumn('imoveis', 'estado', {
//     //   type: Sequelize.STRING,
//     //   allowNull: false
//     // });
//     // await queryInterface.addColumn('imoveis', 'numero', {
//     //   type: Sequelize.STRING,
//     //   allowNull: false
//     // });
//   }
// };


'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('imoveis', 'cep');
    await queryInterface.removeColumn('imoveis', 'estado');
    await queryInterface.removeColumn('imoveis', 'numero');
    await queryInterface.removeColumn('imoveis','imagem');
    await queryInterface.removeColumn('imoveis','complemento');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('imoveis', 'cep', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('imoveis', 'estado', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('imoveis', 'numero', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('imoveis', 'imagem', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('imoveis', 'complemento', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};

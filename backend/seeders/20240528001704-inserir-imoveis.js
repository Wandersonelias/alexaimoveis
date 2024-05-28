'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('imoveis', [
      {
        codigo: "0004",
        endereco: "Rua Saturno 200",
        descricao: "Galpão 500m²",
        cidade: "Guarulhos",
        bairro: "Cumbica",
        valor: 5000,
        status: "Alugado",
        tipo: "Galpão"
      },
      {
        codigo: "0005",
        endereco: "Avenida Brasil 5000",
        descricao: "Sala Comercial 30m²",
        cidade: "Rio de Janeiro",
        bairro: "Centro",
        valor: 1500,
        status: "Disponível",
        tipo: "Sala Comercial"
      },
      {
        codigo: "0006",
        endereco: "Rua Vênus 100",
        descricao: "Terreno 1000m²",
        cidade: "Campinas",
        bairro: "Barão Geraldo",
        valor: 200000,
        status: "Disponível",
        tipo: "Terreno"
      },
      {
        codigo: "0007",
        endereco: "Rua Mercúrio 50",
        descricao: "Chácara 2000m² com Casa 3 Quartos",
        cidade: "Itu",
        bairro: "Jardim Paraíso",
        valor: 800000,
        status: "Alugado",
        tipo: "Chácara"
      },
      {
        codigo: "0008",
        endereco: "Avenida Júpiter 2000",
        descricao: "Prédio Comercial 5 Andares",
        cidade: "São Paulo",
        bairro: "Itaim Bibi",
        valor: 25000,
        status: "Disponível",
        tipo: "Prédio Comercial"
      },
      {
        codigo: "0009",
        endereco: "Rua Marte 300",
        descricao: "Kitnet 1 Quarto e Sala e Cozinha",
        cidade: "Santana",
        bairro: "Jardim São Paulo",
        valor: 400,
        status: "Disponível",
        tipo: "Kitnet"
      },
      {
        codigo: "0010",
        endereco: "Rua Saturno 500",
        descricao: "Apartamento 1 Quarto, Sala e Cozinha",
        cidade: "Guarulhos",
        bairro: "Vila Galvão",
        valor: 800,
        status: "Alugado",
        tipo: "Apartamento"
      },
      {
        codigo: "0011",
        endereco: "Rua Júpiter 123",
        descricao: "Apartamento 2 Quartos, Sala, Cozinha e Banheiro",
        cidade: "São Paulo",
        bairro: "Vila Mariana",
        valor: 1200,
        status: "Disponível",
        tipo: "Apartamento"
      },
      {
        codigo: "00012",
        endereco: "Avenida Paulista 1000",
        descricao: "Casa 3 Quartos, Sala, Cozinha, Banheiro e Quintal",
        cidade: "São Paulo",
        bairro: "Jardins",
        valor: 3500,
        status: "Alugado",
        tipo: "Casa"
      },
      {
        codigo: "0013",
        endereco: "Rua Marte 1050",
        descricao: "Kitnet 1 Quarto e Sala e Cozinha",
        cidade: "Santana",
        bairro: "Novo Horizonte",
        valor: 350,
        status: "Disponível",
        tipo: "Kitnet"
      }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkDelete('imoveis', null, [
      
        {
          codigo: "0004",
          endereco: "Rua Saturno 200",
          descricao: "Galpão 500m²",
          cidade: "Guarulhos",
          bairro: "Cumbica",
          valor: 5000,
          status: "Alugado",
          tipo: "Galpão"
        },
        {
          codigo: "0005",
          endereco: "Avenida Brasil 5000",
          descricao: "Sala Comercial 30m²",
          cidade: "Rio de Janeiro",
          bairro: "Centro",
          valor: 1500,
          status: "Disponível",
          tipo: "Sala Comercial"
        },
        {
          codigo: "0006",
          endereco: "Rua Vênus 100",
          descricao: "Terreno 1000m²",
          cidade: "Campinas",
          bairro: "Barão Geraldo",
          valor: 200000,
          status: "Disponível",
          tipo: "Terreno"
        },
        {
          codigo: "0007",
          endereco: "Rua Mercúrio 50",
          descricao: "Chácara 2000m² com Casa 3 Quartos",
          cidade: "Itu",
          bairro: "Jardim Paraíso",
          valor: 800000,
          status: "Alugado",
          tipo: "Chácara"
        },
        {
          codigo: "0008",
          endereco: "Avenida Júpiter 2000",
          descricao: "Prédio Comercial 5 Andares",
          cidade: "São Paulo",
          bairro: "Itaim Bibi",
          valor: 25000,
          status: "Disponível",
          tipo: "Prédio Comercial"
        },
        {
          codigo: "0009",
          endereco: "Rua Marte 300",
          descricao: "Kitnet 1 Quarto e Sala e Cozinha",
          cidade: "Santana",
          bairro: "Jardim São Paulo",
          valor: 400,
          status: "Disponível",
          tipo: "Kitnet"
        },
        {
          codigo: "0010",
          endereco: "Rua Saturno 500",
          descricao: "Apartamento 1 Quarto, Sala e Cozinha",
          cidade: "Guarulhos",
          bairro: "Vila Galvão",
          valor: 800,
          status: "Alugado",
          tipo: "Apartamento"
        },
        {
          codigo: "0011",
          endereco: "Rua Júpiter 123",
          descricao: "Apartamento 2 Quartos, Sala, Cozinha e Banheiro",
          cidade: "São Paulo",
          bairro: "Vila Mariana",
          valor: 1200,
          status: "Disponível",
          tipo: "Apartamento"
        },
        {
          codigo: "00012",
          endereco: "Avenida Paulista 1000",
          descricao: "Casa 3 Quartos, Sala, Cozinha, Banheiro e Quintal",
          cidade: "São Paulo",
          bairro: "Jardins",
          valor: 3500,
          status: "Alugado",
          tipo: "Casa"
        },
        {
          codigo: "0013",
          endereco: "Rua Marte 1050",
          descricao: "Kitnet 1 Quarto e Sala e Cozinha",
          cidade: "Santana",
          bairro: "Novo Horizonte",
          valor: 350,
          status: "Disponível",
          tipo: "Kitnet"
        }
      
      
      ]);
     
  }
};

const imovelModel = require('../models/imovelModel');


function getAllImoveisCidade(status,cidade) {
    return imovelModel.findAll({where: {status: status, cidade: cidade}});
}


function getAllImoveisBairro(status,cidade,bairro) {
    return imovelModel.findAll({where: {status: status, cidade: cidade, bairro: bairro}});
}




module.exports = {
    getAllImoveisCidade,
    getAllImoveisBairro
}
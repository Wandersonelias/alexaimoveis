const imovelModel = require('../models/imovelModel');


function getFindAllImoveis(){
    return imovelModel.findAll();
}

function createImovel(imovel) {
    return imovelModel.create(imovel);
}

//create update imovel use
function updatedImovel(imovel,id) {  
    imovelModel.update(imovel, {
        where: { id }
    });
    return imovelModel.findByPk(id);
}

//create delete imovel
function deleteImovel(id) {
    return imovelModel.destroy({
        where: { id }
    });
}

module.exports = {
    getFindAllImoveis,
    createImovel,
    updatedImovel,
    deleteImovel
}


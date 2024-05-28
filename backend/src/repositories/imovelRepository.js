const Agendamentos = require('../models/agendamentoModel');
const imovelModel = require('../models/imovelModel');


function getFindAllImoveis(){
    return imovelModel.findAll({
        include: Agendamentos
    });
}

function getImovelById(id) {
    return imovelModel.findByPk(id);
}

function createImovel(imovel) {
    return imovelModel.create(imovel);
}

//create update imovel use
function updatedImovel(imovel,id) {  
    return imovelModel.update(imovel, {
        where: { id }
    });
    
}

//create delete imovel
function deleteImovel(id) {
    return imovelModel.destroy({
        where: { id }
    });
}


Agendamentos.belongsTo(imovelModel);
imovelModel.hasMany(Agendamentos);




module.exports = {
    getFindAllImoveis,
    getImovelById,
    createImovel,
    updatedImovel,
    deleteImovel
}


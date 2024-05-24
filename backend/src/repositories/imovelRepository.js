const Agendamentos = require('../models/agendamentoModel');
const imovelModel = require('../models/imovelModel');


function getFindAllImoveis(){
    return imovelModel.findAll({
        include: Agendamentos
    });
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


Agendamentos.belongsTo(imovelModel);
imovelModel.hasMany(Agendamentos);




module.exports = {
    getFindAllImoveis,
    createImovel,
    updatedImovel,
    deleteImovel
}


const imovelModel = require('../models/imovelModel');
const imovelRepository = require('../repositories/imovelRepository');

async function listarImoveis(req,res,next) {
    const imoveis = await imovelRepository.getFindAllImoveis();
    res.json(imoveis);
}

async function cadastrarImovel(req,res,next) {
    const imovel = req.body;
    console.log("--------------");
    console.log(imovel);
    const registro = await imovelRepository.createImovel(imovel);
    res.status(201).json(imovel);
}

async function atualizarImovel(req,res,next) {
    const imovel = req.body;
    const id = req.params.id;
    const registro = await imovelRepository.updatedImovel(imovel,id)
    return res.json(registro);
}

function deletarImovel(req,res,next) {
    


}


imovelModel.associate


module.exports = {
    listarImoveis,
    cadastrarImovel,
    atualizarImovel,
    deletarImovel
}
const imovelRepository = require('../repositories/imovelRepository');

async function listarImoveis(req, res, next) {
    const imoveis = await imovelRepository.getFindAllImoveis();
    res.json(imoveis);
}

async function cadastrarImovel(req, res, next) {
    const imovel = req.body;
    const registro = await imovelRepository.createImovel(imovel);
    res.status(201).json(imovel);
}

async function detalharImovel(req,res,next){
    const id = req.params.id;
    const imovel = await imovelRepository.getImovelById(id);
    if (imovel) {
        res.status(200).json(imovel);
    } else {
        res.status(400).json({ message: "Id inválido" })
    }
}

async function atualizarImovel(req, res, next) {
    const imovel = req.body;
    const id = req.params.id;
    const verificarImovel = await imovelRepository.getImovelById(id);
    if (verificarImovel) {
        const registro = await imovelRepository.updatedImovel(imovel, id)
        const registroAtualizado = await imovelRepository.getImovelById(id);
        return res.status(200).json(registroAtualizado);
    } else {
        res.status(400).json({ message: "Id inválido" });
    }
}

async function deletarImovel(req, res, next) {
    const id = req.params.id;
    const verificarImovel = await imovelRepository.getImovelById(id);
    if(verificarImovel){
        const registro = imovelRepository.deleteImovel(id);
        return res.json({ message: "Imovel deletado com sucesso" });
    } else {
        res.status(400).json({ message: "Id inválido" });
    }
}

module.exports = {
    listarImoveis,
    cadastrarImovel,
    atualizarImovel,
    deletarImovel
}
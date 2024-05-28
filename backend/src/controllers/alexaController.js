const alexaRepository = require('../repositories/alexaRepository');


//Buscar imoveis em cidade do usuario da alexa que estão disponveis
async function listarImoveisDisponiveis (req,res,next) {

    const cidade = req.params.cidade;
    const status = "Disponivel";
    const imoveisDisponiveis = await alexaRepository.getAllImoveisCidade(status,cidade);
    res.status(200).json(imoveisDisponiveis);
}

//Buscar imoveis em por bairro que estão disponiveis na cidade do usuario da alexa

async function listarImoveisDisponiveisBairro(req,res,next){
    const cidade = req.params.cidade;
    const bairro = req.params.bairro;
    const status = "Disponivel";
    const imoveisDisponiveis = await alexaRepository.getAllImoveisBairro(status,cidade,bairro);
    res.status(200).json(imoveisDisponiveis);

}





module.exports = {
    listarImoveisDisponiveis,
    listarImoveisDisponiveisBairro
}
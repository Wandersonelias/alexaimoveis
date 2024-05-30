const alexaRepository = require('../repositories/alexaRepository');


//Buscar imoveis em cidade do usuario da alexa que estão disponveis
async function listarImoveisDisponiveis (req,res,next) {

    const cidade = req.params.cidade;
    const status = "Disponível";
    const imoveisDisponiveis = await alexaRepository.getAllImoveisCidade(status,cidade);
    res.status(200).json(imoveisDisponiveis);
}

//Buscar imoveis em por bairro que estão disponiveis na cidade do usuario da alexa

async function listarImoveisDisponiveisBairro(req,res,next){
    const cidade = req.params.cidade;
    const bairro = req.params.bairro;
    const status = "Disponível";
    const imoveisDisponiveis = await alexaRepository.getAllImoveisBairro(status,cidade,bairro);
    res.status(200).json(imoveisDisponiveis);

}

async function listarImoveisDisponiveisTipo(req,res,next){
    const cidade = req.params.cidade; // Cidade Usuário
    const tipo = req.params.tipo;
    const status = "Disponível";
    const imoveisDisponiveis = await alexaRepository.getAllImoveisTipo(status,cidade,tipo)
    res.status(200).json(imoveisDisponiveis);

}


async function listarImoveisDisponiveisBairroTipo(req,res,next){
    const cidade = req.params.cidade; // Cidade Usuário
    const tipo = req.params.tipo;
    const bairro = req.params.bairro;
    const status = "Disponível";
    const imoveisDisponiveis = await alexaRepository.getAllImoveisTipo(status,cidade,bairro,tipo)
    res.status(200).json(imoveisDisponiveis);

}

async function listarImoveisDisponiveisValor(req,res,next){
    const cidade = req.params.cidade; // Cidade Usuário
    const valor = parseInt(req.params.valor);
    const status = "Disponível";
    const imoveisDisponiveis = await alexaRepository.getAllImoveisTipo(status,cidade,valor)
    res.status(200).json(imoveisDisponiveis);

}

async function listarImoveisDisponiveisBairroTipoValor(req,res,next){
    const cidade = req.params.cidade; // Cidade Usuário
    const valor = parseInt(req.params.valor);
    const tipo = req.params.tipo;
    const bairro = req.params.bairro;
    const status = "Disponível";
    const imoveisDisponiveis = await alexaRepository.getAllImoveisTipo(status,cidade,bairro,tipo,valor)
    res.status(200).json(imoveisDisponiveis);

}


//Controllers de listagem e agendamentos

module.exports = {
    listarImoveisDisponiveis,
    listarImoveisDisponiveisBairro, 
    listarImoveisDisponiveisTipo,
    listarImoveisDisponiveisBairroTipo,
    listarImoveisDisponiveisValor,
    listarImoveisDisponiveisBairroTipoValor
    
}
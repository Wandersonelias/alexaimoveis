const e = require('cors');
const alexaRepository = require('../repositories/alexaRepository');


//Buscar imoveis em cidade do usuario da alexa que estão disponveis
async function listarImoveisDisponiveis (req,res,next) {

    const cidade = req.params.cidade;
    const status = "Disponível";
    try {
        const imoveisDisponiveis = await alexaRepository.getAllImoveisCidade(status,cidade);
        if(imoveisDisponiveis.length !== 0){
            return res.status(200).json(imoveisDisponiveis);    
        }
        res.status(404).json({message: "Imóveis não encontrados"});
    } catch (error) {
        //console.log(error);
        res.status(500).json(error)
    }
    
}

//Buscar imoveis em por bairro que estão disponiveis na cidade do usuario da alexa

async function listarImoveisDisponiveisBairro(req,res,next){
    const cidade = req.params.cidade;
    const bairro = req.params.bairro;
    const status = "Disponível";
    try {
        const imoveisDisponiveis = await alexaRepository.getAllImoveisBairro(status,cidade,bairro);
        if(imoveisDisponiveis.length !== 0){
           return res.status(200).json(imoveisDisponiveis);
        }
        res.status(404).json({message: "Imóveis não encontrados"});
    } catch (error) {
        res.status(500).json(error)
    }
    

}

async function listarImoveisDisponiveisTipo(req,res,next){
    const cidade = req.params.cidade; // Cidade Usuário
    const tipo = req.params.tipo;
    const status = "Disponível";
    try {
        const imoveisDisponiveis = await alexaRepository.getAllImoveisTipo(status,cidade,tipo)
        if(imoveisDisponiveis.length !== 0){
            return res.status(200).json(imoveisDisponiveis);
        }
        res.status(404).json({message: "Imóveis não encontrados"});
    } catch (error) {
        res.status(500).json(error)
    }
   

}


async function listarImoveisDisponiveisValor(req,res,next){
    const cidade = req.params.cidade; // Cidade Usuário
    const valor = parseInt(req.params.valor);
    const status = "Disponível";
    try {
        const imoveisDisponiveis = await alexaRepository.getAllImoveisValor(status,cidade,valor)
        if(imoveisDisponiveis.length !== 0){
            return res.status(200).json(imoveisDisponiveis);
        }
        res.status(404).json({message: "Imóveis não encontrados"});
    } catch (error) {
        res.status(500).json(error)
    }
    

}

//Rotas alteradas

async function listarImoveisDisponiveisBairroTipo(req,res,next){
    const cidade = req.params.cidade; // Cidade Usuário
    const tipo = req.params.tipo;
    const bairro = req.params.bairro;
    const status = "Disponível";
    const imoveisDisponiveis = await alexaRepository.getAllImoveisTipoBairro(status,cidade,bairro,tipo)
    try {
        if(imoveisDisponiveis.length!==0){
            return res.status(200).json(imoveisDisponiveis);
        }
        res.status(404).json({message: "Imóveis não encontrados"});
    } catch (error) {
        res.status(500).json(error)
    }
    

}



async function listarImoveisDisponiveisBairroTipoValor(req,res,next){
    const cidade = req.params.cidade; // Cidade Usuário
    const valor = parseInt(req.params.valor);
    const tipo = req.params.tipo;
    const bairro = req.params.bairro;
    const status = "Disponível";
    try {
        const imoveisDisponiveis = await alexaRepository.getAllImoveisTipoBairroValor(status,cidade,bairro,tipo,valor)
        if(imoveisDisponiveis.length !==0){
            return res.status(200).json(imoveisDisponiveis);
        }
        res.status(404).json({message: "Imóveis não encontrados"});
    } catch (error) {
        res.status(500).json(error)   
    }
    
}



async function cadastrarAgendamento(req,res,next) {
    const agendamento = req.body;
    const agendamentoCadastrado = await alexaRepository.createAgendamento(agendamento);
    res.status(201).json(agendamentoCadastrado);
}


module.exports = {
    listarImoveisDisponiveis,
    listarImoveisDisponiveisBairro, 
    listarImoveisDisponiveisTipo,
    listarImoveisDisponiveisBairroTipo,
    listarImoveisDisponiveisValor,
    listarImoveisDisponiveisBairroTipoValor,
    cadastrarAgendamento
    
}
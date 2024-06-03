const agendamentoRepository = require('../repositories/agendamentoRepository');


async function cadastrarAgendamento(req,res,next) {
    const agendamento = req.body;
    const agendamentoCadastrado = await agendamentoRepository.createAgendamento(agendamento);
    res.status(201).json(agendamentoCadastrado);
}


async function listarAgendamentos(req,res,next) {     
    const agendamentos = await agendamentoRepository.findAllAgendamentos();
    res.status(200).json(agendamentos);   
}

async function atualizarAgendamento(req,res,rext){
    const id = req.params.id;
    const agendamento = req.body;
    const agendamentoAtualizado = await agendamentoRepository.updateAgendamento(id,agendamento);
    if(!agendamentoAtualizado) {
        return res.status(404).json({message: 'Agendamento não encontrado'});
    }else{
        const atualizado = await agendamentoRepository.findAgendamentoById(id);
        res.status(200).json(atualizado);
    }
}

async function detalharAgendamento(req,res,next) {
    const id = req.params.id;
    const agendamento = await agendamentoRepository.findAgendamentoById(id);
    if(agendamento) {
        res.status(200).json(agendamento)
    }else{
        res.status(404).json({message: 'Agendamento não encontrado'});
    }
}

module.exports = {
    cadastrarAgendamento,
    listarAgendamentos,
    atualizarAgendamento
}
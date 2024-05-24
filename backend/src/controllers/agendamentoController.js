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




module.exports = {
    cadastrarAgendamento,
    listarAgendamentos
}
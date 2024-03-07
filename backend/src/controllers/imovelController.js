function getImoveis(req,res,next) {
    res.json({
        endereco: "Rua dos Loucos Nº 0 - Jardim Marco Zero",
        tipo: "Casa",
        cidade: "Macapá"
    })
}

module.exports = {getImoveis}
const prompt = require(prompt-sync)()

const {listar} = require('./listar')

if(cinema.length == 0){
    console.log('nao tem nenhuma sessao agendada')
}else{
    listar()
    let numero = prompt('digite o numero do filme que voce quer editar')
    if(numero > 0 && numero <= cinema.length){
    let novoFilme = prompt('digite o novo nome do filme/atualize o nome do filme:')
    let novaData = prompt('digite a nova data: ')
    let novoHorario = prompt('digite o novo/atualizado horario: ')
    let novaSala = prompt('digite a nova sala')
    cinema[numero -1]= {
        novoFilme,
        novaData,
        novoHorario,
        novaSala
    }
}
}
module.exports = {atualizar}

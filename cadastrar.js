const prompt = require('prompt-sync')()

function cadastrar(){
    if(cinema.length == 0){
        console.log('nao ha nenhuma sessao cadastrada ainda')
    }else{
        let nomeFilme = prompt('digite o nome do filme: ')
        let data = prompt('digite a data do filme: ')
        let hora = prompt('digite a hora do filme: ')
        let sala = prompt('digite a sala da sessão: ')
        cinema.push(nomeFilme, data, hora)
        console.log('sessão cadastrada com sucesso!')
    }
}

module.exports = {cadastrar}
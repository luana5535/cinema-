const prompt = require('prompt-sync')()

function cadastrar(cinema,prompt,callback){

        let nomeFilme = prompt('digite o nome do filme: ')
        let data = prompt('digite a data do filme: ')
        let hora = prompt('digite a hora do filme: ')
        let sala = prompt('digite a sala da sessão: ')
        cinema.push({nomeFilme: nomeFilme, data: data, hora: hora, sala: sala})
        console.log('sessão cadastrada com sucesso!')
        callback()
    }


module.exports = {cadastrar}

const prompt = require ('prompt-sync') ()

let sessoes = []

exibirMenu()
function exibirMenu() {
    console.log(`
      🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
    🍿 1- Adicionar sessão;                 🍿
    🍿 2- Listar sessões;                   🍿
    🍿 3- Atualizar uma sessão existente;   🍿
    🍿 4- Cancelar uma sessão;              🍿
    🍿 5- Sair                              🍿
      🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
    `)

    function cinema(sessoes) {
        switch(opcão) {
            case '1':
                return adicionar()
                break;

            case '2':
                return listar()
                break;

            case '3':
                return atualizar() 
                break;

            case '4':
                return cancelar()
                break;

            case '5':
                rl.close()
                break;

            default:
                console.log('Opção inválida.')
                exibirMenu() 
                break;
        }
    }
}
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

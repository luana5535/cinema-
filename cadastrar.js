const prompt = require ('prompt-sync')()

const {listar} = require('./listar')
const { cadastrar } = require('./cadastrar')
const { atualizar } = require('./atualizar')
const {cancelar} = require('./cancelar')

let cinema = []

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
       let opcao = prompt('escolha a opcao desejada: ')
        switch(opcao) {
            case '1':
                cadastrar(cinema,prompt,exibirMenu)
                break;

            case '2':
                listar(cinema)
                exibirMenu()
                break;

            case '3':
                atualizar(cinema,prompt,exibirMenu) 
                break;

            case '4':
                cancelar(prompt,cinema,exibirMenu)
                break;

            case '5':
                break;

            default:
                console.log('Opção inválida.')
                exibirMenu() 
                break;
        }
    }


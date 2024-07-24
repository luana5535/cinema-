# Cinema 🍿

## Qual o propósito? 🤔
    Gerenciar sessões de cinema de uma forma fácil e prática. 

## Funcionalidades 🎥

```javaScript 
     🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
    🍿 1- Adicionar sessão;                 🍿
    🍿 2- Listar sessões;                   🍿
    🍿 3- Atualizar uma sessão existente;   🍿
    🍿 4- Cancelar uma sessão;              🍿
    🍿 5- Sair                              🍿
      🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
```
### Adicionar sessão 📽️

```javaScript
🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
🍿const prompt = require('prompt-sync')()           🍿
🍿                                                  🍿
🍿function cadastrar(cinema,prompt,callback){       🍿
🍿                                                  🍿
🍿let nomeFilme = prompt('digite o nome do filme: ')🍿
🍿  let data = prompt('digite a data do filme: ')   🍿
🍿  let hora = prompt('digite a hora do filme: ')   🍿
🍿  let sala = prompt('digite a sala da sessão: ')  🍿
🍿     console.log('sessão cadastrada com sucesso!')🍿
🍿      callback()                                  🍿
🍿   }                                              🍿
🍿                                                  🍿
🍿                                                  🍿
🍿module.exports = {cadastrar}                      🍿
🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
```

### Listar sessões 📽️

```javaScript
🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
🍿function listar(cinema) {                         🍿
🍿   if (cinema.length == 0) {                      🍿
🍿     console.log("Não há nenhum Filme Agendado"); 🍿
🍿   } else {                                       🍿
🍿     console.log("Lista dos Filmes Agendados: "); 🍿
🍿     cinema.forEach((cinema, index) => {          🍿
🍿       console.log(                               🍿
🍿`${index + 1}. Filme: ${cinema.nomeFilme}, Data: $🍿 🍿{cinema.data}, hora: ${cinema.hora} Sala: ${cinema🍿
🍿 .sala}`                                          🍿
🍿      );                                          🍿
🍿     });                                          🍿
🍿    }                                             🍿
🍿  }                                               🍿
🍿                                                  🍿
🍿  module.exports = {listar}                       🍿
🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
```

### Atualizar uma sessão existente 📽️

```javaScript 
🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
🍿const {listar} = require('./listar')              🍿
🍿function atualizar(cinema,prompt,callback){       🍿
🍿if(cinema.length == 0){                           🍿
🍿    console.log('nao tem nenhuma sessao agendada')🍿
🍿    callback()                                    🍿
🍿}else{                                            🍿
🍿    listar(cinema)                                🍿
🍿let numero = prompt('digite o numero do filme que 🍿 🍿voce quer editar: ')                              🍿
🍿    if(numero > 0 && numero <= cinema.length){    🍿
🍿    let novoFilme = prompt('digite o novo nome do 🍿 🍿filme/atualize o nome do filme: ')                🍿
🍿    let novaData = prompt('digite a nova data: ') 🍿
🍿   let novaSala = prompt('digite a nova sala: ')  🍿 🍿   cinema[numero -1] = {                          🍿
🍿        nomeFilme: novoFilme,                     🍿
🍿        data: novaData,                           🍿
🍿        hora: novoHorario,                        🍿
🍿        sala: novaSala                            🍿
🍿    }                                             🍿
🍿    callback()                                    🍿
🍿}                                                 🍿
🍿}                                                 🍿
🍿}                                                 🍿
🍿module.exports = {atualizar}                      🍿
🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
```

### Cancelar uma sessão 📽️

```javaScript
🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
🍿const {listar} = require('./listar')              🍿
🍿                                                  🍿
🍿function cancelar(prompt,cinema,callback) {       🍿
🍿    listar(cinema)                                🍿
🍿   let resp = prompt('Digite o numero do Filme que🍿 🍿quer Cancelar: ')                                 🍿
🍿      if (resp > 0 && resp <= cinema.length) {    🍿
🍿        cinema.splice(resp - 1, 1);               🍿
🍿    console.log("Filme cancelado com sucesso!");  🍿
🍿 }                                                🍿
🍿                                                  🍿
🍿  module.exports = {cancelar}                     🍿
🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿
```

const {listar} = require('./listar')

function cancelar(prompt,cinema,callback) {
    listar(cinema)
    let resp = prompt('Digite o numero do Filme que quer Cancelar 👉 ') 
      if (resp > 0 && resp <= cinema.length) {
        cinema.splice(resp - 1, 1);
        console.log("Filme cancelado com sucesso!📽️");
        callback();
      } else {
        console.log("numero invalido,tente novamente");
        callback();
      }
}

  module.exports = {cancelar}

function listar(cinema) {
    if (cinema.length == 0) {
      console.log("Não há nenhum Filme Agendado");
    } else {
      console.log("Lista dos Filmes Agendados 🍿🍿🍿 ");
      cinema.forEach((cinema, index) => {
        console.log(
          `${index + 1}. Filme🍿: ${cinema.nomeFilme}, Data: ${cinema.data}, hora: ${cinema.hora} Sala: ${cinema.sala}`
        );
      });
    }
  }

  module.exports = {listar}

let btnOrdenarPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPreco.addEventListener("click", ordenaLivros);

function ordenaLivros() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirLivros(livrosOrdenados);
}

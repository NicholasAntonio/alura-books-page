const filterBtns = document.querySelectorAll(".btn");
filterBtns.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoriaBtn = elementoBtn.value;
  let livrosFiltrados = categoriaBtn === 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoriaBtn);
  exibirLivros(livrosFiltrados);
  if(categoriaBtn === 'disponivel'){
    const valorTotal = calcularValorTotal(livrosFiltrados);
    exibirValorTotal(valorTotal);
  };
};

function filtrarPorCategoria(categoriaBtn) {
    return livros.filter(
        livro => livro.categoria === categoriaBtn
    );
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(valorTotal){
    containerValorTotal.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}/span></p>
      </div>
    `
}
function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosDesconto = livros.map(livro => {
        return {...livro, preco: (livro.preco*(1-desconto))}
    })
    return livrosDesconto
}
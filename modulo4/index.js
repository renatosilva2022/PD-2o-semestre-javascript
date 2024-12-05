const estoqueLivros = [];
const adicionarLivro = (titulo, autor, quantidade) => {
  const livroExistente = estoqueLivros.find(livro => livro.titulo === titulo);
  if (livroExistente) {
    console.log(`O livro "${titulo}" já existe no estoque.`);
  } else {
    estoqueLivros.push({ titulo, autor, quantidade });
    console.log(`Livro "${titulo}" adicionado ao estoque.`);
  }
};

const removerLivro = (titulo) => {
  const indice = estoqueLivros.findIndex(livro => livro.titulo === titulo);
  if (indice !== -1) {
    estoqueLivros.splice(indice, 1);
    console.log(`Livro "${titulo}" removido do estoque.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
};

const atualizarQuantidade = (titulo, novaQuantidade) => {
  const livro = estoqueLivros.find(livro => livro.titulo === titulo);
  if (livro) {
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
};

const listarLivros = () => {
  if (estoqueLivros.length === 0) {
    console.log("Não há livros no estoque.");
  } else {
    console.log("Livros disponíveis no estoque:");
    estoqueLivros.forEach(livro => {
      console.log(`Título: "${livro.titulo}", Autor: "${livro.autor}", Quantidade: ${livro.quantidade}`);
    });
  }
};


adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 10);
adicionarLivro("1984", "George Orwell", 5);
adicionarLivro("A Origem (Inception)", "hristopher Nolan", 3);
adicionarLivro("Pulp Fiction)", "Quentin Tarantino", 4);
adicionarLivro("Forrest Gump)", "Robert Zemeckis", 6);
adicionarLivro(Matrix)", " Lana e Lilly Wachowski", 2);
listarLivros();
atualizarQuantidade("1984", 3);
atualizarQuantidade("Forrest Gump", 7);
removerLivro("O Senhor dos Anéis");
removerLivro("Pulp Fiction");
listarLivros();

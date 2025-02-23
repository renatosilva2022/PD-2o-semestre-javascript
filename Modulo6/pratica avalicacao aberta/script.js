// Variável para controlar o índice do clique
let cliqueIndex = 0;

// Função que será executada ao clicar no botão
function realizarAlteracoes() {
    // Seleciona todos os itens da lista e parágrafos
    const itensLista = document.querySelectorAll("#lista li");
    const paragrafos = document.querySelectorAll("p");

    // Define as cores a serem aplicadas
    const cores = ["blue", "red", "green"];

    // Reseta as cores de todos os itens e parágrafos
    itensLista.forEach(item => item.style.color = "black");
    paragrafos.forEach(paragrafo => paragrafo.style.color = "black");

    // Aplica a cor correspondente ao índice atual
    if (cliqueIndex < itensLista.length) {
        itensLista[cliqueIndex].style.color = cores[cliqueIndex];
        paragrafos[cliqueIndex].style.color = cores[cliqueIndex];
    }

    // Incrementa o índice ou reinicia se atingir o final
    cliqueIndex = (cliqueIndex + 1) % itensLista.length;
}

// Adicionar um evento de clique ao botão
const botao = document.getElementById("botao");
botao.addEventListener("click", realizarAlteracoes);
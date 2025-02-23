// Array para armazenar os nomes das pessoas que curtiram
let curtidas = [];

// Função para carregar as curtidas do localStorage
function carregarCurtidas() {
    const curtidasSalvas = localStorage.getItem("curtidas");
    if (curtidasSalvas) {
        curtidas = JSON.parse(curtidasSalvas); // Converte de volta para array
        atualizarListaCurtidas(); // Atualiza a exibição
    }
}

// Função para salvar as curtidas no localStorage
function salvarCurtidas() {
    localStorage.setItem("curtidas", JSON.stringify(curtidas)); // Converte array para string
}

// Função para atualizar o parágrafo com a lista de curtidas
function atualizarListaCurtidas() {
    const listaCurtidas = document.getElementById("listaCurtidas");
    const tamanhoLista = curtidas.length;

    if (tamanhoLista === 0) {
        listaCurtidas.textContent = "Ninguém curtiu";
    } else if (tamanhoLista === 1) {
        listaCurtidas.textContent = `${curtidas[0]} curtiu`;
    } else if (tamanhoLista === 2) {
        listaCurtidas.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        listaCurtidas.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${tamanhoLista - 2} pessoas curtiram`;
    }
}

// Função para adicionar uma curtida
function adicionarCurtida() {
    const nomeInput = document.getElementById("nome");
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    // Verifica se o nome já está na lista
    if (!curtidas.includes(nome)) {
        curtidas.push(nome); // Adiciona o nome ao array
        salvarCurtidas(); // Salva no localStorage
        atualizarListaCurtidas(); // Atualiza o parágrafo
    } else {
        alert("Você já curtiu!");
    }

    // Limpa o campo de texto
    nomeInput.value = "";
}

// Função para limpar as curtidas
function limparCurtidas() {
    curtidas = []; // Limpa o array
    localStorage.removeItem("curtidas"); // Remove do localStorage
    atualizarListaCurtidas(); // Atualiza o parágrafo
}

// Adiciona um evento de clique ao botão "Curtir"
document.getElementById("curtir").addEventListener("click", adicionarCurtida);

// Adiciona um evento de clique ao botão "Limpar"
document.getElementById("limpar").addEventListener("click", limparCurtidas);

// Carrega as curtidas ao iniciar a página
carregarCurtidas();
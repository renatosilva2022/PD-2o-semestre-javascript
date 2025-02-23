// Array para armazenar os nomes das pessoas que curtiram
let curtidas = [];

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
        atualizarListaCurtidas(); // Atualiza o parágrafo
    } else {
        alert("Você já curtiu!");
    }

    // Limpa o campo de texto
    nomeInput.value = "";
}

// Adiciona um evento de clique ao botão "Curtir"
document.getElementById("curtir").addEventListener("click", adicionarCurtida);
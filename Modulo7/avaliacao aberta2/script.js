// Array para armazenar as tarefas
let tarefas = [];

// Função para carregar as tarefas do localStorage
function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas); // Converte de volta para array
        renderizarTarefas(); // Renderiza as tarefas
    }
}

// Função para salvar as tarefas no localStorage
function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas)); // Converte array para string
}

// Função para renderizar a lista de tarefas
function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; // Limpa a lista antes de renderizar

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        if (tarefa.status) {
            li.classList.add("concluida"); // Adiciona classe para tarefas concluídas
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.addEventListener("change", () => {
            tarefas[index].status = checkbox.checked; // Atualiza o status da tarefa
            salvarTarefas(); // Salva no localStorage
            renderizarTarefas(); // Re-renderiza a lista
        });

        const descricao = document.createTextNode(tarefa.descricao);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("botao-excluir");
        botaoExcluir.addEventListener("click", () => {
            tarefas.splice(index, 1); // Remove a tarefa do array
            salvarTarefas(); // Salva no localStorage
            renderizarTarefas(); // Re-renderiza a lista
        });

        li.appendChild(checkbox);
        li.appendChild(descricao);
        li.appendChild(botaoExcluir);
        listaTarefas.appendChild(li);
    });
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const novaTarefaInput = document.getElementById("novaTarefa");
    const descricao = novaTarefaInput.value.trim();

    if (descricao === "") {
        alert("Por favor, digite uma descrição para a tarefa.");
        return;
    }

    // Adiciona a nova tarefa ao array
    tarefas.push({ descricao: descricao, status: false });
    salvarTarefas(); // Salva no localStorage
    renderizarTarefas(); // Re-renderiza a lista

    // Limpa o campo de texto
    novaTarefaInput.value = "";
}

// Adiciona um evento de clique ao botão "Adicionar"
document.getElementById("adicionar").addEventListener("click", adicionarTarefa);

// Carrega as tarefas ao iniciar a página
carregarTarefas();
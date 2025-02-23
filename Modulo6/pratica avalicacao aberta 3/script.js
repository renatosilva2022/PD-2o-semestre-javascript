// Array para armazenar as tarefas
let tarefas = [];

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
            renderizarTarefas(); // Re-renderiza a lista
        });

        const descricao = document.createTextNode(tarefa.descricao);

        li.appendChild(checkbox);
        li.appendChild(descricao);
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
    renderizarTarefas(); // Re-renderiza a lista

    // Limpa o campo de texto
    novaTarefaInput.value = "";
}

// Adiciona um evento de clique ao botão "Adicionar"
document.getElementById("adicionar").addEventListener("click", adicionarTarefa);

// Renderiza as tarefas iniciais (se houver)
renderizarTarefas();
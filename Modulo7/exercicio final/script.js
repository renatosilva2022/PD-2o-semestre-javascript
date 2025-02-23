// Função para buscar usuários no GitHub
async function buscarUsuarios() {
    const campoBusca = document.getElementById("campoBusca");
    const termoBusca = campoBusca.value.trim();

    if (termoBusca === "") {
        alert("Por favor, digite um nome de usuário.");
        return;
    }

    const listaUsuarios = document.getElementById("listaUsuarios");
    listaUsuarios.innerHTML = ""; // Limpa a lista antes de buscar

    try {
        const resposta = await fetch(`https://api.github.com/search/users?q=${termoBusca}`);
        const dados = await resposta.json();

        if (dados.items.length === 0) {
            listaUsuarios.innerHTML = "<li>Não foram encontrados usuários para esta pesquisa</li>";
        } else {
            dados.items.forEach(usuario => {
                const li = document.createElement("li");

                const img = document.createElement("img");
                img.src = usuario.avatar_url;
                img.alt = `Avatar de ${usuario.login}`;

                const link = document.createElement("a");
                link.href = usuario.html_url;
                link.textContent = usuario.login;
                link.target = "_blank"; // Abre o link em uma nova aba

                li.appendChild(img);
                li.appendChild(link);
                listaUsuarios.appendChild(li);
            });
        }
    } catch (erro) {
        console.error("Erro ao buscar usuários:", erro);
        listaUsuarios.innerHTML = "<li>Ocorreu um erro ao buscar usuários. Tente novamente.</li>";
    }
}

// Adiciona um evento de clique ao botão "Buscar"
document.getElementById("botaoBuscar").addEventListener("click", buscarUsuarios);
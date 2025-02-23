// Array para armazenar as postagens
let postagens = [];

// Função para buscar uma imagem aleatória de gatinhos
async function buscarImagemGato() {
    try {
        const resposta = await fetch("https://api.thecatapi.com/v1/images/search");
        const dados = await resposta.json();
        return dados[0].url; // Retorna a URL da imagem
    } catch (erro) {
        console.error("Erro ao buscar imagem de gato:", erro);
        return "https://via.placeholder.com/600x400"; // Imagem padrão em caso de erro
    }
}

// Função para adicionar uma nova postagem
async function adicionarPostagem(evento) {
    evento.preventDefault(); // Evita o recarregamento da página

    const nomeUsuario = document.getElementById("nomeUsuario").value.trim();
    const avatarUrl = document.getElementById("avatarUrl").value.trim();
    const textoPostagem = document.getElementById("textoPostagem").value.trim();

    if (nomeUsuario === "" || avatarUrl === "" || textoPostagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const imagemGato = await buscarImagemGato(); // Busca uma imagem de gato

    const novaPostagem = {
        data: new Date().toLocaleString(),
        nomeUsuario: nomeUsuario,
        avatar: avatarUrl,
        texto: textoPostagem,
        imagem: imagemGato,
        likes: 0,
    };

    postagens.unshift(novaPostagem); // Adiciona a postagem no início do array
    renderizarFeed(); // Atualiza o feed

    // Limpa os campos do formulário
    document.getElementById("nomeUsuario").value = "";
    document.getElementById("avatarUrl").value = "";
    document.getElementById("textoPostagem").value = "";
}

// Função para renderizar o feed
function renderizarFeed() {
    const feed = document.getElementById("feed");
    feed.innerHTML = ""; // Limpa o feed antes de renderizar

    postagens.forEach((postagem, index) => {
        const postagemDiv = document.createElement("div");
        postagemDiv.classList.add("postagem");

        const cabecalho = document.createElement("div");
        cabecalho.classList.add("cabecalho");

        const avatar = document.createElement("img");
        avatar.src = postagem.avatar;
        avatar.alt = `Avatar de ${postagem.nomeUsuario}`;
        avatar.classList.add("avatar");

        const nomeUsuario = document.createElement("div");
        nomeUsuario.textContent = postagem.nomeUsuario;
        nomeUsuario.classList.add("nome-usuario");

        const texto = document.createElement("div");
        texto.textContent = postagem.texto;
        texto.classList.add("texto");

        const imagemGato = document.createElement("img");
        imagemGato.src = postagem.imagem;
        imagemGato.alt = "Imagem de gato fofo";
        imagemGato.classList.add("imagem-gato");

        const curtir = document.createElement("div");
        curtir.classList.add("curtir");
        curtir.innerHTML = `❤️ <span>${postagem.likes}</span>`;
        curtir.addEventListener("click", () => {
            postagens[index].likes++; // Incrementa o número de likes
            renderizarFeed(); // Re-renderiza o feed
        });

        cabecalho.appendChild(avatar);
        cabecalho.appendChild(nomeUsuario);

        postagemDiv.appendChild(cabecalho);
        postagemDiv.appendChild(texto);
        postagemDiv.appendChild(imagemGato);
        postagemDiv.appendChild(curtir);

        feed.appendChild(postagemDiv);
    });
}

// Adiciona um evento de submit ao formulário
document.getElementById("formularioPostagem").addEventListener("submit", adicionarPostagem);

// Renderiza o feed inicial (se houver postagens salvas)
renderizarFeed();
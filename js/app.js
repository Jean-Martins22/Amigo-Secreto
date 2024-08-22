let lista = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    let listaDeNomes = document.getElementById('lista-amigos');
    
    if (lista.includes(nome)){
        alert('O nome já existe na lista!!');
        return;
    }

    if (nome) {
        lista.push(nome);
        listaDeNomes.textContent = lista.join(", ");
        document.getElementById('nome-amigo').value = '';
    } else {
        alert('Insira um nome válido');
    }
}

function sortear(){
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = "";

    if (lista.length % 2 !== 0 || lista.length === 0) {
        alert('A quantidade de participantes deve ser par e maior que zero para realizar o sorteio.');
        return;
    }

    let nomesParaSortear = [...lista];
    let resultados = {};

    for (let i = 0; i < lista.length; i++) {
        let nomeAtual = lista[i];
        let possiveisAmigos = nomesParaSortear.filter(nome => nome !== nomeAtual);

        if (possiveisAmigos.length === 0) {
            alert('Erro no sorteio. Por favor, tente novamente.');
            return;
        }

        let indiceSorteado = Math.floor(Math.random() * possiveisAmigos.length);
        let amigoSecreto = possiveisAmigos[indiceSorteado];
        resultados[nomeAtual] = amigoSecreto;
        nomesParaSortear = nomesParaSortear.filter(nome => nome !== amigoSecreto);
    }

    for (let pessoa in resultados) {
        // Criar um novo parágrafo para cada sorteio
        let paragrafo = document.createElement('p');
        paragrafo.textContent = `${pessoa} → ${resultados[pessoa]}`;
        listaSorteio.appendChild(paragrafo);
    }
}

function reiniciar() {
    lista = [];

    let listaDeNomes = document.getElementById('lista-amigos');
    let listaSorteio = document.getElementById('lista-sorteio');

    listaDeNomes.textContent = '';
    listaSorteio.textContent = ''; 


    alert("O jogo foi reiniciado. Agora você pode adicionar novos nomes e realizar um novo sorteio.");
}

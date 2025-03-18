// Array para armazenar os amigos
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Verifica se o nome não está vazio e não foi adicionado ainda
    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }
    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    // Adiciona o nome ao array e à lista na tela
    amigos.push(nome);
    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nome;
    li.setAttribute('role', 'listitem');
    listaAmigos.appendChild(li);

    // Limpa o input
    input.value = '';
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');

    // Verifica se há pelo menos 2 amigos para sortear
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    // Embaralha os amigos
    let sorteados = [...amigos];
    for (let i = sorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
    }

    // Garante que ninguém tire a si mesmo
    for (let i = 0; i < amigos.length; i++) {
        if (sorteados[i] === amigos[i]) {
            let proximo = (i + 1) % amigos.length;
            [sorteados[i], sorteados[proximo]] = [sorteados[proximo], sorteados[i]];
        }
    }

    // Exibe todos os pares sorteados
    resultado.innerHTML = ''; // Limpa resultados anteriores
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${amigos[i]} tirou ${sorteados[i]}`;
        li.setAttribute('role', 'listitem');
        resultado.appendChild(li);
    }

    // Limpa a lista de amigos após o sorteio
    amigos = [];
    listaAmigos.innerHTML = '';
}
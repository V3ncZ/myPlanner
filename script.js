let btnCriarNovoCardToDo = document.querySelector(".adicionarToDo");

btnCriarNovoCardToDo.addEventListener("click", () => {

    let titulo = prompt("Qual o titulo da tarefa?");
    let descricao = prompt("Qual a descrição da tarefa?");
    let prioridade = prompt("Qual a prioridade da tarefa?");
    const data = new Date().toLocaleDateString("pt-BR");

    let prioridadeImg = "";
    switch (prioridade.toLowerCase()) {
        case "alta":
            prioridadeImg = "./img/prioridade_alta.png";
            break;
        case "media":
            prioridadeImg = "./img/prioridade_media.png";
            break;
        case "baixa":
            prioridadeImg = "./img/prioridade_baixa.png";
            break;
    }

    let card = document.createElement("div");
    card.classList.add("toDo");
    card.innerHTML = `
        <div class="holder">
            <h3 class="titulo_tarefa">${titulo}</h3>
            <p class="descricao">${descricao}</p>
            <div class="container_final">
                <p class="data">${data}</p>
                <img class="prioridade" src="${prioridadeImg}" alt="prioridade">
            </div>
        </div>
    `;
    document.querySelector(".toDo").appendChild(card);
});

let btnCriarNovoCardDoing = document.querySelector(".adicionarDoing");

btnCriarNovoCardDoing.addEventListener("click", () => {

    let titulo = prompt("Qual o titulo da tarefa?");
    let descricao = prompt("Qual a descrição da tarefa?");
    let prioridade = prompt("Qual a prioridade da tarefa?");
    const data = new Date().toLocaleDateString("pt-BR");

    let prioridadeImg = "";
    switch (prioridade.toLowerCase()) {
        case "alta":
            prioridadeImg = "./img/prioridade_alta.png";
            break;
        case "media":
            prioridadeImg = "./img/prioridade_media.png";
            break;
        case "baixa":
            prioridadeImg = "./img/prioridade_baixa.png";
            break;
    }

    let card = document.createElement("div");
    card.classList.add("doing");
    card.innerHTML = `
        <div class="holder">
            <h3 class="titulo_tarefa">${titulo}</h3>
            <p class="descricao">${descricao}</p>
            <div class="container_final">
                <p class="data">${data}</p>
                <img class="prioridade" src="${prioridadeImg}" alt="prioridade">
            </div>
        </div>
    `;
    document.querySelector(".doing").appendChild(card);
});

let btnCriarNovoCardDone = document.querySelector(".adicionarDone");

btnCriarNovoCardDone.addEventListener("click", () => {

    let titulo = prompt("Qual o titulo da tarefa?");
    let descricao = prompt("Qual a descrição da tarefa?");
    let prioridade = prompt("Qual a prioridade da tarefa?");
    const data = new Date().toLocaleDateString("pt-BR");

    let prioridadeImg = "";
    if (prioridade) {
    switch (prioridade.toLowerCase()) {
        case "alta":
            prioridadeImg = "./img/prioridade_alta.png";
            break;
        case "media":
            prioridadeImg = "./img/prioridade_media.png";
            break;
        case "baixa":
            prioridadeImg = "./img/prioridade_baixa.png";
            break;
    }
    }
    
    if (titulo && descricao && prioridade) {
        let card = document.createElement("div");
    card.classList.add("done");
    card.innerHTML = `
        <div class="holder">
            <h3 class="titulo_tarefa">${titulo}</h3>
            <p class="descricao">${descricao}</p>
            <div class="container_final">
                <p class="data">${data}</p>
                <img class="prioridade" src="${prioridadeImg}" alt="prioridade">
            </div>
        </div>
    `;
    document.querySelector(".done").appendChild(card);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
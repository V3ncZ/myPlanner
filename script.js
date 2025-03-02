let btnCriarNovoCardToDo = document.querySelector(".adicionarToDo");

btnCriarNovoCardToDo.addEventListener("click", () => {

    let titulo = prompt("Qual o titulo da tarefa?");
    let descricao = prompt("Qual a descrição da tarefa?");
    const data = new Date().toLocaleDateString("pt-BR");

    let card = document.createElement("div");
    card.classList.add("toDo");
    card.innerHTML = `
        <div class="holder">
            <h3 class="titulo_tarefa">${titulo}</h3>
            <p class="descricao">${descricao}</p>
            <p class="data">${data}</p>
        </div>
    `;
    document.querySelector(".toDo").appendChild(card);
});

let btnCriarNovoCardDoing = document.querySelector(".adicionarDoing");

btnCriarNovoCardDoing.addEventListener("click", () => {

    let titulo = prompt("Qual o titulo da tarefa?");
    let descricao = prompt("Qual a descrição da tarefa?");
    const data = new Date().toLocaleDateString("pt-BR");

    let card = document.createElement("div");
    card.classList.add("doing");
    card.innerHTML = `
        <div class="holder">
            <h3 class="titulo_tarefa">${titulo}</h3>
            <p class="descricao">${descricao}</p>
            <p class="data">${data}</p>
        </div>
    `;
    document.querySelector(".doing").appendChild(card);
});

let btnCriarNovoCardDone = document.querySelector(".adicionarDone");

btnCriarNovoCardDone.addEventListener("click", () => {

    let titulo = prompt("Qual o titulo da tarefa?");
    let descricao = prompt("Qual a descrição da tarefa?");
    const data = new Date().toLocaleDateString("pt-BR");

    let card = document.createElement("div");
    card.classList.add("done");
    card.innerHTML = `
        <div class="holder">
            <h3 class="titulo_tarefa">${titulo}</h3>
            <p class="descricao">${descricao}</p>
            <p class="data">${data}</p>
        </div>
    `;
    document.querySelector(".done").appendChild(card);
});
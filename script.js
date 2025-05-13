const tarefas = [];

document.getElementById("addTarefa").addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
    /*
    let add = "S"

    while (add === "S") {
    add = prompt("Deseja add uma tarefa? [S/N]");
    add = String(add).toUpperCase();

    if (add !== "S") {
        break;
    }
    */

    const titulo = prompt("Titulo da tarefa:");
    const descricao = prompt("Descrição:");
    const prazo = prompt("Prazo:");

    const tarefa = {
        "titulo": titulo,
        "descrição": descricao,
        "prazo": prazo
    }

    tarefas.push(tarefa);

    atualizarTarefa();
}

function atualizarTarefa() {
    let template = document.getElementById("template").innerHTML;
    //ligando com o html, inserir conteudo html dinamicamente
    let htmlFinal = "";

    tarefas.forEach((tarefa) => {
        let bloco = template;

        for (const chave in tarefa) {
        const regex = new RegExp(`{{\\s*${chave}\\s*}}`, "g");
        //para tankar "qualquer" jeito de chamar o '{{ }}'
        bloco = bloco.replace(regex, tarefa[chave]);
        //simulando o '{{ }}' do django
        }

        htmlFinal += bloco; //para add na lista

    })


    document.getElementById("saida").innerHTML = htmlFinal;
    //exibir na web
}
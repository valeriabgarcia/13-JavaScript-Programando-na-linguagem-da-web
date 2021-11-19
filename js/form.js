var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {

    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form); // extraindo informação do paciente
    var erros = validaPaciente(paciente); // validando o paciente

    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});


function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTR(paciente); // criando tr e td do paciente
    var tabela = document.querySelector("#tabela-pacientes"); // adicionando um paciente na tabela
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTR(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTD(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTD(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser me branco")
    }

    return erros;
}



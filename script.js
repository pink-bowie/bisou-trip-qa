const campoOrigem = document.querySelector("#origem");
const campoDestino = document.querySelector("#destino");
const campoDataIda = document.querySelector("#dataIda");
const campoDataVolta = document.querySelector("#dataVolta");
const btnBuscar = document.querySelector("#btnBuscar");
const form = document.querySelector("#formBusca");
const mensagem = document.querySelector("#mensagem");
const campoPassageiros = document.querySelector("#passageiros");

campoOrigem.addEventListener("change", verificarCidades);
campoDestino.addEventListener("change", verificarCidades);

function verificarCidades() {
    if (campoOrigem.value !== "" && campoOrigem.value === campoDestino.value) {
        mensagem.textContent = "As cidades de Origem e Destino devem ser diferentes.";
        mensagem.classList.add("erro");      // Aplica o vermelho
        mensagem.classList.remove("sucesso");
        btnBuscar.classList.add('btn-bug-cinza');
    } else {
        mensagem.textContent = "";
        mensagem.classList.remove("erro");
        btnBuscar.classList.remove('btn-bug-cinza');
    }
}

campoDataIda.addEventListener("change", verificarDatas);
campoDataVolta.addEventListener("change", verificarDatas);

function verificarDatas() {
    // Verifica se os dois campos têm valor e se a volta é menor que a ida
    if (campoDataIda.value !== "" && campoDataVolta.value !== "" && campoDataVolta.value < campoDataIda.value) {
        mensagem.textContent = "A data de volta não pode ser anterior à data de ida.";
        mensagem.classList.add("erro");      // Aplica o vermelho
        btnBuscar.classList.add('btn-bug-cinza');
    } else {
        mensagem.textContent = "";
        mensagem.classList.remove("erro");
        btnBuscar.classList.remove('btn-bug-cinza');
    }
}

campoPassageiros.addEventListener("change", function() {
    if (Number(campoPassageiros.value) < 1) {
        mensagem.textContent = "O número de passageiros deve ser maior ou igual a 1.";
        mensagem.classList.add("erro");
        btnBuscar.classList.add('btn-bug-cinza');
    } else {
        mensagem.textContent = "";
        mensagem.classList.remove("erro");
        btnBuscar.classList.remove('btn-bug-cinza');
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const origem = document.querySelector("#origem").value;
    const destino = document.querySelector("#destino").value;
    const dataIda = document.querySelector("#dataIda").value;
    const dataVolta = document.querySelector("#dataVolta").value;
    
    // Linhas de teste para o console:
    console.log("Origem:", campoOrigem.value);
    console.log("Destino:", campoDestino.value);
    console.log("Data Ida:", campoDataIda.value);
    console.log("Data Volta:", campoDataVolta.value);

  if (campoOrigem.value === "" || campoDestino.value === "" || campoDataIda.value === "" || campoDataVolta.value === "") {
    mensagem.textContent = "Preencha todos os campos obrigatórios.";
    btnBuscar.classList.add('btn-bug-cinza');
} else if (campoOrigem.value === campoDestino.value) {
    mensagem.textContent = "As cidades de Origem e Destino devem ser diferentes.";
    btnBuscar.classList.add('btn-bug-cinza');
} else if (campoDataVolta.value < campoDataIda.value) {
    mensagem.textContent = "A data de volta não pode ser anterior à data de ida.";
    btnBuscar.classList.add('btn-bug-cinza');
} else if (Number(campoPassageiros.value) < 1) {
    mensagem.textContent = "O número de passageiros deve ser maior ou igual a 1.";
    btnBuscar.classList.add('btn-bug-cinza');
}
 else {
    mensagem.textContent = "Formulário enviado com sucesso!";
    mensagem.classList.add ("sucesso");
    mensagem.classList.remove("erro");
    btnBuscar.classList.remove('btn-bug-cinza');
}
});

formBusca.addEventListener("input", function() {
    btnBuscar.classList.remove('btn-bug-cinza');
    mensagem.textContent = "";
});
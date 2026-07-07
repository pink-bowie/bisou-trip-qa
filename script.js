
const campoOrigem = document.getElementById("origem");
const campoDestino = document.getElementById("destino");
const campoDataIda = document.getElementById("dataIda");
const campoDataVolta = document.getElementById("dataVolta");
const campoTravelForm = document.getElementById("travelForm");
const mensagemErro = document.getElementById("mensagemErro");
const mensagemSucesso = document.getElementById("mensagemSucesso");

campoTravelForm.addEventListener("submit",function(event){
    event.preventDefault();
    if (campoOrigem.value === "" || campoDestino.value === "" || campoDataIda.value === "" || campoDataVolta.value === "") {
        mensagemErro.textContent = "Preencha todos os campos obrigatórios.";
    }
    else {
        mensagemSucesso.textContent = "Formulário enviado com sucesso!";
    }
});
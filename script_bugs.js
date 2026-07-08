const campoOrigem = document.querySelector("#origem");
const campoDestino = document.querySelector("#destino");
const campoDataIda = document.querySelector("#dataIda");
const campoDataVolta = document.querySelector("#dataVolta");
const campoPassageiros = document.querySelector("#passageiros");
const btnBuscar = document.querySelector("#btnBuscar");
const form = document.querySelector("#formBusca");
const mensagem = document.querySelector("#mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    btnBuscar.disabled = true; // Desabilita o botão para evitar múltiplos envios
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
    btnBuscar.disabled = false; // Reabilita o botão
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
    btnBuscar.disabled = false; 
    btnBuscar.classList.remove('btn-bug-cinza');
    mensagem.textContent = "";
});
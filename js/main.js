//Constante que captura todos os controles de ajuste em um array
const controle = document.querySelectorAll("[data-controle]");
console.log(controle)

//Utiliza o array "controle" para capturar o data attribute ("+" ou "-") do controle que foi clicado. Também coleta informações da div pai daquele controle clicado.
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
})

//Função que manipula os dados da peça selecionada usando data-contador para detectar o contador selecionado.
function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

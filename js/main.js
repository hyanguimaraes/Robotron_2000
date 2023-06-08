//Constantes dos botões de somar ou subtrair braços;
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

//Constante que captura todos os controles de ajuste em um array
const controle = document.querySelectorAll(".controle-ajuste");
console.log(controle)

//Utiliza o array "controle" para capturar o texto do controle que foi clicado (se for um botão de soma, captura "+" e vice-versa)
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.textContent);
    })
})

//Função que manipula os dados dos braços
function manipulaDados(operacao){
    if(operacao === "-"){
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}

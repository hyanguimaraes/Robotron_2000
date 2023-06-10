//Constante que captura todos os controles de ajuste em um array
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

//Objeto "peças" contendo outros 05 objetos, sendo eles, "braços", "blindagem", "núcleos", "pernas" e "foguetes". Cada um desses possui 04 atributos: "força", "poder", "energia" e "velocidade".
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//Utiliza o array "controle" para capturar o data attribute ("+" ou "-") do controle que foi clicado. Também coleta informações da div pai daquele controle clicado. No click, também será chamada a função "Atualiza Estatísticas" que irá somar aos valores das peças.
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
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

//Função que atualiza as estatísticas, capturando o valor atual através do forEach (de cada elemento) e depois somando aos valores de estatísticas, os valores contidos no array (objeto) daquela peça, através do data-estatistica.
function atualizaEstatisticas(peca){
    estatisticas.forEach( (elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
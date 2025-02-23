let listaNumerosSortidos = [];
let numeroLimite = 10;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}
function exibirMensagemInicial (){
    exibirTextoNaTela ('h1', 'Número Secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
   
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto)
            exibirTextoNaTela ('p', 'O número é menor que o chute');
        else {
            exibirTextoNaTela('p', 'O número é maior que o chute');
        }
        tentativas++;
        limparCampo();
    }

}
function gerarUmNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosNaLista = listaNumerosSortidos.length;

    if (quantidadeNumerosNaLista == numeroLimite) {
        listaNumerosSortidos = [];
    }

    if (listaNumerosSortidos.includes(numeroEscolhido))
        return (gerarUmNumeroAleatorio);
    else {
        listaNumerosSortidos.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo (){
    chute = document.querySelector ('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo ();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
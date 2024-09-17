let listDeNumeroSorteados = []
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

 //EXIBE O TEXTONA TELA
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate: 1.2});
}
  

// EXIBE O TEXTO NA TELA  DA MENSAGEM INICIAL
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');

}


exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');



// VERIFICA SE O CHUTE ESTA CERTO E ETC
function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou !');
        let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
if(chute > numeroSecreto){
    exibirTextoNaTela('p','o numero secreto é menor ');
} else{
    exibirTextoNaTela('p', 'o numero secreto é maior');
  }tentativas++;
    limparcampo();
 }
}




// GERA UM NUMERO ALEATORIO E ETC
function gerarNumeroAleatorio() {
   let = numeroEscolhido = parseInt(Math.random() *numerolimite + 1);
   let quantidadeDeElementosNaLista = listDeNumeroSorteados.length;

   if(quantidadeDeElementosNaLista == numerolimite){
    listDeNumeroSorteados = [];
   }



   if(listDeNumeroSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else{
    listDeNumeroSorteados.push(numeroEscolhido);
    console.log(listDeNumeroSorteados);
    return numeroEscolhido;
   }
} 


//LIMPA O CAMPO
function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


//REINICIAR O JOGO
function reiniciarJogo() {
numeroSecreto = gerarNumeroAleatorio();
limparcampo();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', 'true')

}

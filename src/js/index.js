//Objetivo 1: Fazer o menu suspenso abrir e fechar ao clicar no botão de menu


/*  passo 1 - pegar o elemento que representa o botão de menu na tela usando js
    passo 2 - fazer com que o elemento do botão identifique quando o usuário o clicar
    passo 3 - pegar o elemento que representa o menu suspenso utilizando o js
    passo 4 - abrir o menu suspenso na tela
    passo 5 - fechar o menu suspenso na tela, utilizando os mesmo procedimento de abrir porém de maneira reversa

*/

const submenu = document.querySelector(".sub-menu");
const conteudo = document.querySelector(".conteudo");
const botaomenu = document.getElementById("botao-menu");


function alternarMenu(){
    submenu.classList.toggle("ativado");
    conteudo.classList.toggle("blur");

}


botaomenu.addEventListener("click",() => {

    alternarMenu();

});


let n1 = document.querySelector('#n1');                //Primeira Variável inserida pelo usuário
let n2 = document.querySelector('#n2');                 //Segunda Variável inserida pelo usuário
let resultado = document.querySelector('span');         //Vai pegar o resultado e inserir no span dentro do HTML


//Funções:

function somar() {

    resultado.innerHTML = parseFloat (n1.value) + parseFloat (n2.value)             //Vai atribuir a operação a variável, pegar o resultado e exibir para o usuário
}

function subtrair() {

    resultado.innerHTML = parseFloat (n1.value) - parseFloat (n2.value)             //Vai atribuir a operação a variável, pegar o resultado e exibir para o usuário
}

function multiplicar() {

    resultado.innerHTML = parseFloat (n1.value) * parseFloat (n2.value)             //Vai atribuir a operação a variável, pegar o resultado e exibir para o usuário
}

function dividir() {

    resultado.innerHTML = parseFloat (n1.value) / parseFloat (n2.value)             //Vai atribuir a operação a variável, pegar o resultado e exibir para o usuário
}

function potenciacao() {

    resultado.innerHTML = parseFloat (n1.value) ** parseFloat (n2.value)            //Vai atribuir a operação a variável, pegar o resultado e exibir para o usuário
}

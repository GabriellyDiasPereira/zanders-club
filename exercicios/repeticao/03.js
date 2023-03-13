/*
    Elabore um algoritmo que solicite que o usuário 
    entre com dois números (inicial e final). 
    Ao final o algoritmo deverá apresentar o valor total da soma de
    todos os números do intervalo digitado pelo usuário.

    1. Ler 2 números
    2. Somar os valores entre o valor Inicial e Final
    3. Mostrar na tela
*/

const prompt = require('prompt-sync')();
let num1 = parseInt(prompt('Digite um número: '))
let num2 = parseInt(prompt('Digite um número: '))
let quantidadeDeNumeroEntreOsDois = (num2-num1-1)
let numero = num1
let total = 0

for (let index = 0; index < quantidadeDeNumeroEntreOsDois; index++) {    
    numero = numero+1
    total = numero+total
    console.log(numero)
}

console.log('total = ', total)







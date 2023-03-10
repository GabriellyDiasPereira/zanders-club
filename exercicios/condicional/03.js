/* Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.

1. Receber o número 
2. Mostrar na tela se é par ou ímpar
*/

const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite um número: '))

if(numero % 2 == 0){
    console.log('Seu número é par')
}else{
    console.log('Seu número é ímpar')
}
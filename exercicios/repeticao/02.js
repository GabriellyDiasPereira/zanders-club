/*
   Elabore um algoritmo em que o usuário entre 
   com um número inteiro qualquer, e o software imprima os
   20 números subsequentes ao que foi digitado pelo usuário.

   1. Ler número inteiro 
   2. Imprimir 20 números subsequentes ao número digitado 
   3. Mostrar na tela
*/

const prompt = require('prompt-sync')();
let numero = parseInt(prompt('Digite um número: '))

for (let contador = 0; contador < 20; contador++) {
    numero = numero +1
    console.log(numero)
}

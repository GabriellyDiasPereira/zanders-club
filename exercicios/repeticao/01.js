/**
 * Elabore um algoritmo que solicite que o 
 * usuário entre com 100 números inteiros quaisquer.
 * Imprima a soma dos números digitados.
 * 
 * 1. Ler 100 número inteiros X
 * 2. Somar todos os números X
 * 3. Mostrar na tela X
*/

const prompt = require('prompt-sync')();
let total = 0

for (let contador = 0; contador < 3; contador++) {
    const numero = parseInt(prompt('Digite um número: '))
    total = numero+total
}

console.log('total = ', total)
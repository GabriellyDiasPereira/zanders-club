// Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.
/**
 * 1. Ler os valores A B e C
 * 2. Some A com B
 * 3. SE (A+B) < C Mostre A+B na tela
 */


const prompt = require('prompt-sync')();
const num1 = parseInt(prompt('Digite um número: '));
const num2 = parseInt(prompt('Digite um número: '));
const num3 = parseInt(prompt('Digite um número: '));


if ((num1 + num2) < num3 ) {
    console.log('Resultado: ' + (num1+num2))
} else {
    console.log('Seu número é menor que : ' + (num3))
}





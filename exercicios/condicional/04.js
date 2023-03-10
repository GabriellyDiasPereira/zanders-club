/*Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se 
atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

1. Ler A
2. Ler B
3. Somar A + B (se for igual)
4. Se não for multiplique A por B
5. Mostrar na tela (numa variavel C)
*/

const prompt = require('prompt-sync')();
const numA = parseInt(prompt('Digite um número: '))
const numB = parseInt(prompt('Digite um número: '))

if(numA == numB){
    console.log('Seu número é ' + (numA + numB))
}else{
    console.log('Seu número é ' + (numA * numB))
}
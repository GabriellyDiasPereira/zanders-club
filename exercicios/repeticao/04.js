/*
    Elabore um algoritmo que leia um número qualquer 
    digitado pelo usuário e calcule seu Fatorial. 
    (Exemplo: 5! = 5 x 4 x 3 x 2 x 1)
    1. Ler número
    2. Calcular fatorial do número digitado
    3. Mostrar na tela
*/

const prompt = require('prompt-sync')();
let num = parseInt(prompt('Digite um número: '))
let fatorial = num

for (let index = 1; index < num; index++) {
    fatorial = fatorial*index
}

console.log('atorial = ', fatorial)
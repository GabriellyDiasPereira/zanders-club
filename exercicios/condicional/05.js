/*Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar,
imprimir o resultado desta operação.

1. Ler um número
2. Se for 'par' somar por 5
3. Se for 'ímpar' somar por 8
4. Mostrar resultado
*/

const prompt = require('prompt-sync')();
const num = parseInt(prompt('Digite um número: '))

if(num % 2 == 0){
    console.log('Resultado: ' + (num+5))
}else{
    console.log('Resultado: ' + (num+8))
}

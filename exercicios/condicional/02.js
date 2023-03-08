/* 
    Faça um algoritmo que leia o nome, 
    o sexo e o estado civil de uma pessoa. 
    
    Caso sexo seja ‘F’ e estado civil seja ‘CASADA’, 
    solicitar o tempo de casada (anos) e mostrar na tela. 
    Mostrar todos esses dados na tela

    1. Ler o nome X
    2. Ler o sexo X 
    3. Ler o estado civil X
    4. Se sexo for igual a 'Feminino' e estado civil igual a 'casada' solicitar o tempo de casada (anos) X
    5. Mostrar na tela
*/

const prompt = require('prompt-sync')();
const nome = prompt('Qual é o seu nome: ')
const sexo = prompt('Qual seu sexo biológico: ')
const estadoCivil = prompt('Qual é o seu estado civil: ')


console.log("Olá: "+nome)
console.log("Sexo: "+sexo)
console.log("Estado civil: "+estadoCivil)


if (sexo == 'Feminino' && estadoCivil == 'Casada') {
    const tempoDeCasada = prompt("Qual o seu tempo de Casada? ")
    console.log('Seu tempo de casada é: ' +tempoDeCasada)
} else {
    console.log('Seus dados não condiz com o que pedimos')
}


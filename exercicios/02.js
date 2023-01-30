// Faça um programa que receba dois números e mostre a soma deles.

const prompt = require('prompt-sync')();

const numberOne = prompt('Digite um número: ');
const numberTwo = prompt('Digite outro número: ');
const soma = parseInt(numberOne) + parseInt(numberTwo);

console.log(`${numberOne} + ${numberTwo} = `);
console.log(`${soma}`);

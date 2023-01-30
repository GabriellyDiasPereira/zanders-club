//Faça um algoritmo que leia o nome e idade do usuário depois mostre ele na tela

const prompt = require('prompt-sync')();

const name = prompt('Qual seu nome? ');
const age = prompt('Qual a sua idade? ');

console.log(`Oi ${name}, você tem ${age} anos.`);
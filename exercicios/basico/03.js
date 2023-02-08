// Faça um programa que receba o lado de um quadrado e mostre sua área(A = L²)
/**
 *  1. Receber o lado do quadrado X
 *  2. Armazenar em uma var a área = lado X lado X
 *  3. Mostrar a área na tela
*/ 

const prompt = require('prompt-sync')();

const lado = parseInt(prompt('Digite o tamanho do lado do quadrado: '))
const area = lado * lado

console.log('A área do quadrado é: '+ area)
// Faça um algoritmo para calcular quantas ferraduras são necessárias para 
// equipar todos os cavalos comprados para um haras.
/**
 * 1. Receber quantidade de cavalos
 * 2. Calcular ferraduras(quantidadeDeCavalos * 4)
 * 3. Mostrar na tela
 */

const prompt = require('prompt-sync')();

const quantidadeDeCavalos = parseInt(prompt('Digite a quantidade de cavalos: '))
const quantidadeDeFerraduras = quantidadeDeCavalos * 4

console.log('São necessárias ' + quantidadeDeFerraduras + ' ferraduras.')
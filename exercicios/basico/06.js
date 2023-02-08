/**
 *  Um motorista deseja colocar no seu tanque X reais de gasolina.
 *  Escreva um algoritmo para ler o preço do litro da gasolina 
 *  e o valor do pagamento, 
 *  e exibir quantos litros ele conseguiu colocar no tanque
 * 
 *  1. Receber valor X R$ que foi pago
 *  2. receber o preço do litro da gasolina
 *  3. Calcular valor X reais * preço do litro da gasolina
 *  4. Mostrar na tela quantos litros tem em tanque
*/

const prompt = require('prompt-sync')();

const valorXReais = parseFloat(prompt('Digite o valor pago em R$: '))
const preçoLitroGasolina = parseFloat(prompt('Digite o preço do litro da gasolina: '))
const quantidadeDeLitros = valorXReais * preçoLitroGasolina 

console.log('Tem ' + quantidadeDeLitros + ' litros em tanque.')

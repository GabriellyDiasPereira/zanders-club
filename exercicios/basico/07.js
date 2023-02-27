/**
 * Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. 
 * Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, 
 * calcule e mostre a comissão e o salário final do funcionário.
 * 
 * 1. Receber o salario fixo e o valor de suas vendas
 * 2. Calular a comissão
 * 3. Calcular o salario final
 * 4. Mostrar na tela
*/

const prompt = require('prompt-sync')();

const salarioFixo = parseFloat(prompt('Digite o seu salário R$: '))
const valorDeVendas = parseFloat(prompt('Digite o valor das vendas R$: '))
const calculoComissao = (valorDeVendas * 4) / 100
const salarioFinal = salarioFixo + calculoComissao

console.log('Sua comissão esse mês foi de R$:' + calculoComissao)
console.log('Seu salário esse mês foi de R$:' + salarioFinal)
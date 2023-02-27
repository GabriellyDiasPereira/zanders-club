/**
 * 
 * Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual
 * calcule e mostre:
    a) a idade dessa pessoa em anos;
    b) a idade dessa pessoa em meses;
    c) a idade dessa pessoa em dias;
    d) a idade dessa pessoa em semanas. Suponha que um ano tem 52 semanas

    1. Receber o ano de nascimento X
    2. Receber o ano atual X
    3. Calcular a idade da pessoa (ano - data de nascimento) X
    4. Calcular a idade em meses X
    5. Calcular a idade em semanas X
    6. Calcular a idade em dias. X
    7. Mostrar na tela
*/

const prompt = require('prompt-sync')();

const anoDeNascimento = parseInt(prompt('Digite seu ano de nascimento: '))
const anoAtual = parseInt(prompt('Digite o ano atual: '))

const idadeDaPessoa = anoAtual - anoDeNascimento
const idadeEmMeses = 12 * idadeDaPessoa
const idadeEmSemanas = 52 * idadeDaPessoa
const idadeEmDias = 365 * idadeDaPessoa

console.log('Sua idade em anos é: ' + idadeDaPessoa)
console.log('Sua idade em meses é: ' + idadeEmMeses)
console.log('Sua idade em semanas é: ' + idadeEmSemanas)
console.log('Sua idade em dias é: ' + idadeEmDias)



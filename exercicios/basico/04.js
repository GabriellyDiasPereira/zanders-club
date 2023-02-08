//  Em uma partida de LOL um jogador ganha 2 de ouro por segundo, 
//  pergunte ao usuário quantos minutos de partida tem
//  e informe a ele quanto de ouro foi acumulado
/**
 * 1. Pergunte ao usuario quanto tempo de partida ele tem em minutos X
 * 2. Calcular o valor X
 *    - Calcular o ouro em segundos em ouro por minuto X
 *    - Calcular o ouro ganho X
 * 3. Informar na tela X
 */
// 10m de partida -> 
// ouroPorSegundo -> ouroPorMinuto

const prompt = require('prompt-sync')();

const tempoDePartidaEmMinutos = parseInt(prompt('Digite o tempo da sua partida: '))
const ouroPorMinuto = 60 * 2
const ouroTotal = tempoDePartidaEmMinutos * ouroPorMinuto

console.log('O seu ouro acumulado é ' + ouroTotal)


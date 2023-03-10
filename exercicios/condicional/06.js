/*
O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é 
IMC = peso / ( altura )2
    
    IMC em adultos Condição
    Abaixo de 18,5 Abaixo do peso
    Entre 18,5 e 25 Peso normal
    Entre 25 e 30 Acima do peso
    Acima de 30 obeso
*/

const prompt = require('prompt-sync')();
const peso = parseInt(prompt('Digite seu peso: '))
const altura = parseFloat(prompt('Digite seu altura: '))
const resultado = peso / (altura * altura)

if(resultado < 18.5){
    console.log('Magreza')
}
else if(resultado > 18.5 && resultado < 24.9){
    console.log('Normal')
}
else if(resultado > 25 && resultado < 29.9){
    console.log('Sobrepeso')
}
else if(resultado > 30 && resultado < 34.9){
    console.log('Obesidade grau I')
}
else if(resultado > 35 && resultado < 39.9){
    console.log('Obesidade grau II')
}
else if(resultado < 40){
    console.log('Obesidade grau III')
}

console.log('Resultado: ' + resultado.toFixed(2))
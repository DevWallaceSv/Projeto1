const prompt = require('prompt-sync')();
console.clear();

console.log(`Jhonny, é um jovem que tem 18 anos.
Ele mora na capital de seu estado, mora sozinho em um apartamento de 40m².
Jhonny trabalha em uma indústria e precisa sair de casa às 7h e retorna às 18h para sua casa.
Ele adora cozinhar e depois de um dia cansativo de trabalho.
Jhonny precisa passar no mercado para comprar o material pro seu jantar.
Porém, ele precisa abastecer o seu carro antes de ir ao mercado.`)
console.log('');


let perg1 = prompt('Você passou no posto de combustivel? 1[sim]/2[não] ');
let perg2 = prompt('Você foi ao mercado? 1[sim]/2[não] ');
let perg3 = prompt('Você comprou macarrão? 1[sim]/2[não] ');
let perg4 = prompt('Você comprou molho de manjeiricão? 1[sim]/2[não] ');
let perg5 = prompt('Você comprou linguiça mista? 1[sim]/2[não] ');


let pontuacao = 0


if (perg1 == 1) {
pontuacao++
}
if (perg2 == 1) {
pontuacao++
}
if (perg3 == 1) {
pontuacao++
}       
if (perg4 == 1) {
pontuacao++
}
if (perg5 == 1) {
pontuacao++
}

if (pontuacao == 0) {
console.log(`\nVocê fica sem combustivel no meio do caminho.`)
}
else if (pontuacao == 1) {
console.log(`\nVocê vai ter que voltar no mercado.`)
}
else if (pontuacao == 2) {
    console.log(`\nVocê vai ter que pedir Ifood.`)
}
else if (pontuacao == 3) {
console.log(`\nVocê vai ter que fazer macarrão sem molho.`)
}
else if (pontuacao == 4) {
console.log(`\nVocê vai comer só o macarrão.`)
}
else if (pontuacao == 5) {
console.log(`\nVocê fez o melhor macarrão da cidade.`)
}





console.log();
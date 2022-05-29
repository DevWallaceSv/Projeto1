const prompt = require('prompt-sync')();
console.clear();

console.log('Jhonny, é um jovem que tem 18 anos.');
console.log('Ele mora na capital de seu estado, mora sozinho em um apartamento de 40m².');
console.log('Jhonny trabalha em uma indústria e precisa sair de casa às 7h e retorna às 18h para sua casa.');
console.log('Ele adora cozinhar e depois de um dia cansativo de trabalho.');
console.log('Jhonny precisa passar no mercado para comprar o material pro seu jantar.');
console.log('Porém, ele precisa abastecer o seu carro antes de ir ao mercado.');
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
console.log(`\nVocê falha miseravelmente.`)
}
else if (pontuacao == 1 || pontuacao == 2) {
console.log(`\nVocê falha, mas ainda consegue fugir da situação.`)
}
else if (pontuacao == 3) {
console.log(`\nVocê chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.`)
}
else if (pontuacao == 4) {
console.log(`\nDepois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`)
}
else if (pontuacao == 5) {
console.log(`\nVocê triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.`)
}





console.log();
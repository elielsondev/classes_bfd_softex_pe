// Exercícios de Laços Básicos em JavaScript
// Lista de exercícios introdutórios com os laços for, while e do...while.


// 1) Contagem simples (for)
// Mostre os números de 1 a 10 usando um laço for.
for (let index = 1; index <= 10; index += 1) {
    console.log(index);
}


// 2) Números pares (for)
// Mostre apenas os números pares de 0 a 20.
for (let index = 0; index <= 20; index += 1) {
    if (index % 2 === 0) {
        console.log(index);
    }
}


// 3) Tabuada (for)
// Peça um número e mostre a tabuada desse número de 1 a 10.
let numero = Number(prompt("Digite um numero entre 1 e 10 para tabuada."));

for (let index = 1; index <= 10; index += 1) {
    console.log(numero * index);
}


// 4) Contagem regressiva (while)
// Mostre uma contagem regressiva de 10 até 1.
let count = 10;

while (count >= 1) {
    console.log(count);
    count -= 1;
    // count = count - 1;
}


// 5) Soma de 1 até N (while)
// Peça um número N e calcule a soma de 1 até N.
let n = Number(prompt("Digite um número:"));
let resultadoSoma = 0;

while (n > 0) {
    resultadoSoma += n;
    n -= 1
}

console.log(resultadoSoma);


// 6) Número maior que 10 (do...while)
// Peça um número e repita até que ele seja maior que 10.
let numeroMaiorQueDez = Number(prompt("Digite um número maior que 10 para sair do loop."));

do {
    numeroMaiorQueDez = Number(prompt("Digite um número maior que 10 para sair do loop."));
} while (numeroMaiorQueDez <= 10);

console.log("Parabéns, você digitou um número maior que dez.");


// 7) Senha (do...while)
// Peça a senha '1234'. Repita até o usuário acertar.
let senha = prompt("Digite sua senha:");

do {
    senha = prompt("Digite sua senha:");;
} while (senha !== "1234");

console.log("Senha correta!");


// 8) Média de notas (while)
// Leia notas até que o usuário digite um valor negativo. Calcule a média.
let nota = Number(prompt("Digite uma nota:"));
let acumuladorDenotas = 0;
let numeroDeNotas = 0;

while (nota >= 0) {
    acumuladorDenotas += nota;
    numeroDeNotas += 1;
    nota = Number(prompt("Digite uma nota:"));
};

console.log(`Média: ${acumuladorDenotas / numeroDeNotas}`);

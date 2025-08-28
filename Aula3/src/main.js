// Parte 1 - Exercícios Gerais até IF

// 1. Maior número: 
// Peça ao usuário dois números e mostre o maior deles:
let valor1 = Number(prompt('Digite um valor: '));
let valor2 = Number(prompt('Digite outro valor:'));

if (valor1 > valor2) {
    console.log(valor1);
} else {
    console.log(valor2);
}


// 2. Maiorridade:
// Peça a idade e mostre se a pessoa é maior de idade (18 anos ou mais) ou não.
let idade = Number(prompt("Digite a sua idade: "));

if (idade >= 18) {
    console.log(`Você tem ${idade} anos, então já é maior de idade.`);
} else {
     console.log(`Você tem ${idade} anos, então ainda é menor de idade.`);
}


// 3. Mensagem personalizada:
// Peça o nome e exiba: "Bom dia, [nome]"
let userName = prompt("Digite seu nome: ");

if (userName.length >= 3) {
    console.log(`Bom dia, ${userName}`);
}


// 4. Média e aprovação:
// Solicite três notas, calcule a média e mostre se foi aprovado (média >= 7) ou reprovado.
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


// 5. Par ou ímpar:
// Leia um número inteiro e informe se ele é par ou ímpar.
let imparOuPar = Number(prompt("Digite um número: "));

if (imparOuPar % 2) {
    console.log(`Você digitou ${imparOuPar}, esse número é par.`);
} else {
    console.log(`Você digitou ${imparOuPar}, esse número é ímpar.`);
}


// 6. Positivo, negativo ou zero:
// Peça um número e informe se é positivo, negativo ou zero.
let numero = Number(prompt("Digite um número: "));

if (numero > 0) {
    console.log(`Número [${numero}] é positivo.`);
} else if (numero < 0) {
    console.log(`Número [${numero}] é negativo.`);
} else {
    console.log(`Número [${numero}] é zero.`);
}


// 7. Mensagem com nome e idade:
// Peça o nome e a idade. Exiba: Olá, [nome]. Você tem [idade] anos.
let nomeUsuario = prompt("Digite seu nome: ");
let idadeUsuario = Number(prompt("Digite sua idade: "));

if (nomeUsuario.length > 3) {
  console.log(`Olá, ${nomeUsuario}. Você tem ${idadeUsuario} anos.`)
}


// 8. Reajuste salarial:
// Peça o salário atual. Se for menor que 2000, aumente 15%. Senão, aumente 7%. Mostre o novo salário.
let salarioAtual = Number(prompt("Digite seu salário: "));
let salarioAntesDoAumento = salarioAtual;

if (salarioAtual < 2000) {
    salarioAtual = salarioAtual * 1.15;
} else {
    salarioAtual = salarioAtual * 1.07;
}

console.log(`Seu salário era R$${salarioAntesDoAumento} e passou a ser R$${salarioAtual}`);


// 9. Operações básicas:
// Peça dois números inteiros e mostre a soma, subtração, multiplicação e divisão.
let numero1 = Number(prompt("Digite um número inteiro: "));
let numero2 = Number(prompt("Digite outro número inteiro: "))

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);


// 10. Comparação simples:
// Peça dois números. Se forem iguais, mostre “Números iguais”, senão, mostre “Números diferentes”.
let number1 = Number(prompt("Digite um número:"));
let number2 = Number(prompt("Digite um número:"));

if (number1 === number2) {
    console.log("Números iguais");   
} else {
    console.log("Números diferentes");
}


// 11. IF Simples – Nota mínima:
// Leia uma nota. Se for maior ou igual a 6, mostre";Nota suficiente".
let nota = 7;

if (nota >= 6) {
    console.log("Nota suficiente.");
} else {
    console.log("Nota insuficiente.");
}


// 12. IF/ELSE – Autorização para entrar:
// Peça a idade. Se for maior ou igual a 18, mostre “Entrada permitida”. Senão, “Entrada proibida”.
let userAge = Number(prompt("Qual a sua idade?"));

if (userAge >= 18) {
    console.log("Entrada permitida.");
} else {
    console.log("Entrada proibida.");
}


// 13. IF/ELSE IF/ELSE (Encadeado) – Faixa etária:
/* Peça a idade. Mostre no console:
-"Criança" se idade < 12
-"Adolescente" se idade ≥ 12 e < 18
-"Adulto" se idade ≥ 18 e < 60
-"Idoso" se idade ≥ 60 */
if (userAge < 12) {
    console.log("Criança");
} else if (userAge >= 12 && userAge < 18) {
    console.log("Adolescente");
} else if (userAge >= 18 && userAge < 60) {
    console.log("Adulto");
} else if (userAge >= 60) {
    console.log("Idoso");
} else {
    console.log("Idade não inserida ou inválida.");
}


// 14. IF Aninhado – Verificador de triângulo:
/* Peça três lados e verifique:
- Se for possível formar um triângulo (cada lado menor que a soma dos outros dois)
- Se todos os lados são iguais, mostre";Triângulo Equilátero";
- Senão, se dois lados são iguais, mostre"Triângulo Isósceles";
- Senão, mostre"Triângulo Escaleno"
- Senão, mostre "Não é um triângulo" */





// 15. IF/ELSE IF/ELSE (Encadeado) – Classificação de aluno:
/* Peça três notas, calcule a média.
- Se média ≥ 7, mostre";Aprovado"
- Senão, se média ≥ 5, mostre "Recuperação"
- Senão, mostre "Reprovado" */

let notaUm = Number(prompt("Digite a primeira nota: "));
let notaDois = Number(prompt("Digite a segunda nota: "));
let notaTres = Number(prompt("Digite a terceira nota: "));

let mediaAluno = (nota1 + nota2 + nota3) / 3;

if (mediaAluno >= 7) {
    console.log("Aprovado");
} else {
    if (mediaAluno >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado"); 
    }
}

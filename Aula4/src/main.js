// Lista de Exercícios – Estrutura Switch/Case (JavaScript)

/* 1. Dia da Semana: Peça ao usuário um número de 1 a 7 e use switch/case para mostrar o dia
correspondente (1 = Domingo, 2 = Segunda, etc.). Se for diferente de 1 a 7, mostre “Dia inválido”. */
let diaDaSemana = Number(prompt("Digite um número de 1 a 7:"));

switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
        break;
}


/* 2. Mês do Ano: Peça um número de 1 a 12 e mostre o nome do mês correspondente. Use default
para valores inválidos. */
let mesDoAno = Number(prompt("Digite um número de 1 a 12:"));

switch (mesDoAno) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
        break;
}


/* 3. Classificação de Notas: Peça ao usuário uma letra de conceito (A, B, C, D ou F) e use
switch/case para mostrar uma mensagem: - A → Excelente - B → Ótimo - C → Bom - D → Regular
- F → Reprovado - Default → Conceito inválido */
let letraDeConceito = prompt("Insira uma letra de conceito (A, B, C, D ou F):");

switch (letraDeConceito.toUpperCase()) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Ótimo");
        break;
    case "C":
        console.log("Bom");
        break;
    case "D":
        console.log("Regular");
        break;
    case "F":
        console.log("Reprovado");
        break;
    default:
        console.log("Conceito inválido");
        break;
}


/* 4. Operações Matemáticas: Peça ao usuário dois números e depois um operador (+, -, *, /). Use
switch/case para realizar a operação correspondente e mostrar o resultado. Caso o operador seja
inválido, mostrar “Operador inválido”. */
let numero1 = Number(prompt("digite um número: "));
let numero2 = Number(prompt("Digite outro número: "))

let operacaoMatematica = prompt("Digite a operação matemática que você deseja: '+', '-', '*' ou '/': ");

switch (operacaoMatematica) {
    case "+":
        console.log("Resultado da soma:", numero1 + numero2);
        break;
    case "-":
        console.log("Resultado da subtração:", numero1 - numero2);
        break;
    case "*":
        console.log("Resultado da multiplicação:", numero1 * numero2);
        break;
    case "/":
        console.log("Resultado da divisão:", numero1 / numero2);
        break;
    default:
        console.log("Operador inválido");
        break;
}

/* 5. Cardápio: Crie um programa que mostre um cardápio numerado de 1 a 4 (comidas ou bebidas à
sua escolha). Peça a escolha do usuário e mostre no console o prato/bebida escolhido. Use default
para escolha inválida. */
let cardapio = Number(prompt(`
Nosso cardápio, escolha um dos nossos produtos:
1 - Coxinha
2 - Bolo
3 - Suco de laranja
4 - Refrigerante
Obs.: Insira apenas o número do produto escolhido.
`));

switch (cardapio) {
    case 1:
        console.log("Coxinha");
        break;
    case 2:
        console.log("Bolo");
        break;
    case 3:
        console.log("Suco de laranja");
        break;
    case 4:
        console.log("Refrigerante");
        break;
    default:
        console.log("Escolha inválida");
        break;
}


/* 6. Estações do Ano: Peça ao usuário um número de 1 a 4 e use switch/case para mostrar a
estação correspondente: 1 = Verão 2 = Outono 3 = Inverno 4 = Primavera Default: “Número
inválido” */
let estacaoDoAno = Number(prompt("Digite um número entre 1 e 4, que correspondem a  1 = Verão 2 = Outono 3 = Inverno 4 = Primavera: "));

switch (estacaoDoAno) {
    case 1:
        console.log("Verão");
        break;
    case 2:
        console.log("Outono");
        break;
    case 3:
        console.log("Inverno");
        break;
    case 4:
        console.log("Primavera");
        break;
    default:
        console.log("Número inválido");
        break;
}

/* 7. Calculadora de Frete: Peça ao usuário um código de transporte (1 = Motoboy, 2 = Correios, 3 =
Transportadora) e mostre o valor fixo do frete (defina valores livres). Se o código for inválido,
mostre “Opção de transporte indisponível”. */
let calculadoraDeFrete = Number(prompt("Insira um código de transporte entre 1 e 3 onde (1 = Motoboy, 2 = Correios, 3 = Transportadora)"));

let freteMotoboy = "R$10,00";
let freteCorreios = "R$7,99";
let freteTransportadora = "R$13,75";

switch (calculadoraDeFrete) {
    case 1:
        console.log(`Valor do frete para Motoboy é: ${freteMotoboy}`);
        break;
    case 2:
        console.log(`Valor do frete para Correios é: ${freteCorreios}`);
        break;
    case 3:
        console.log(`Valor do frete para Transportadora é: ${freteTransportadora}`);
        break;
    default:
        console.log("Opção de transporte indisponível");
        break;
}

/* 8. Classificação de Filme: Peça ao usuário um gênero de filme (Ação, Comédia, Drama, Terror) e
use switch/case para mostrar uma frase típica daquele gênero. Default: “Gênero não encontrado”. */
let classificacaoDeFilme = prompt("Digite um dos gêneros de filme (Ação, Comédia, Drama, Terror): ");

switch (classificacaoDeFilme.toUpperCase()) {
    case "AÇÃO":
        console.log("Adrenalina pura do início ao fim.");
        break;
    case "COMÉDIA":
        console.log("Prepare-se para rir sem parar.");
        break;
    case "DRAMA":
        console.log("Uma jornada de emoções profundas.");
        break;
    case "TERROR":
        console.log("Um filme para não ver no escuro.");
        break;
    default:
        console.log("Gênero não encontrado");
        break;
}


/* 9. Sistema de Cores: Peça ao usuário uma cor primária (vermelho, azul ou amarelo) e use
switch/case para mostrar: - “Cor primária” se for uma das três - Default: “Não é cor primária” */
let corPrimaria = prompt("Escolha e digite uma cor primária (vermelho, azul ou amarelo): ");

switch (corPrimaria) {
    case "vermelho".toLowerCase():
    case "azul".toLowerCase():
    case "amarelo".toLowerCase():
        console.log("Cor primária");
        break;
        
    default:
        console.log("Não é cor primária");
        break;
};

/* 10. Simulador de Loja: Crie um menu com produtos numerados. Peça o código do produto e a
quantidade, depois use switch/case para calcular e mostrar o valor total da compra (defina preços
livres). Default: “Produto inválido”. */
let menu = Number(prompt(`
    Digite apenas o código do produto que você deseja:
    1 - Mouse R$24,99;
    2 - Fone de Ouvido R$19,99;
    3 - Teclado R$57,00;
    `));

let quantidade = Number(prompt("Digite quantos você quer: "));

switch (menu) {
    case 1:
        console.log(`Total: R$ ${(quantidade * 24.99).toFixed(2).replace(/\./g, ",")}`);
        break;

    case 2:
        console.log(`Total: R$ ${(quantidade * 19.99).toFixed(2).replace(/\./g, ",")}`);
        break;
        
    case 3:
        console.log(`Total: R$ ${(quantidade * 57.00).toFixed(2).replace(/\./g, ",")}`);
        break;

    default:
        console.log("Produto inválido");
        break;
};

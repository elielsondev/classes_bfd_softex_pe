// Entrada e saída de dados:

let nome = window.prompt("Insira seu nome: ");

console.log(nome);

window.alert(nome);


// Variáveis e constantes:
var nomeVariavel; // globais
let nomeVariavel; // local

const nomeConstate= "";


// Estrutura de controle:
if (condition) {
    // Insira o que deve ser retornado caso a condição seja verdadeira.
} else {
    // Insira o que deve ser retornado caso a condição não seja verdadeira.
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}

// Operadores: 
    // Matemáticos: +, -, *, /, **, %
    // Relacionais: ==, <, >, !=, <=, >=, !==, ===
    // Lógicos: &&, ||, !



// Estrutura de repetição:

    // for
    for (let index = 0; index < array.length; index += 1) {
        const element = array[index];
    };

    // while
    while (condition) {
        // Executa comandos enquato a condição for verdadeira.
    }

    // do while
    do {
        // Executa comandos enquato a condição for verdadeira.
    } while (condition);


// Array e Matriz;
const listaDeCompras = [];

const nomeMatriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(nomeMatriz[1][2]); // 6

nomeMatriz[1][2] = 20;

console.log(nomeMatriz);

for (let i = 0; i < nomeMatriz.length; i += 1) {
    for (let j = 0; j < nomeMatriz[i].length; j += 1) {
        console.log(`Indice ${i} e Coluna ${j} => ${ nomeMatriz[i][j]} `);
    }
};
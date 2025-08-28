// 1. Crie um aray om 3 cores:
const colors = ["azul", "amarelo", "verde"];
console.log(colors);

// 2. Adicione uma cor com o push:
console.log(colors.push("branco"));

// 3. Remova a primeira com shift:
console.log(colors.shift());

// 4. Use indexOf para encontrar:
console.log(colors.indexOf("amarelo"));

// 5. Crie função contaElementos(array):
function criaElementos(arr) {
    return arr.length;
}

console.log(criaElementos(colors));

// 6. Exiba todo array com o console:
console.log(colors);


// ----------------------------------
let ligaDesliga = false;

function lampada() {
    if (!ligaDesliga) {
        ligaDesliga = true;
        console.log("Carro ligado.");
    } else {
        ligaDesliga = false;
        console.log("Carro desligado.");
    }
}

lampada();
lampada();
lampada();
lampada();

console.log(`\n Trabalhando com Loops `);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

let contador = 0;
const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let destinoExiste = false;
for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
}
// while (contador < 3) {
//     if (listaDeDestinos[contador] == destino) {
//         destinoExiste = true
//         break;
//     }
//     contador++;
// }

console.log("Destino existe :", destinoExiste)
if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}






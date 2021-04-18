console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);
//Adicionando elemento na lista
listaDeDestinos.push(`Curitiba`) 
console.log(listaDeDestinos);

//Removendo elemento na lista
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//Mostrando apenas um elemento na lista
console.log(listaDeDestinos[0]);

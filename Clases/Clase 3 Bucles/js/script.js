const listadoDeNotas =[5, 7, 7];

let sumadorDeNotas = 0;
for (let i = 0; i < 3; i++) {
    sumadorDeNotas = sumadorDeNotas + listadoDeNotas[i];
}

console.log(sumadorDeNotas);
const promedio =  sumadorDeNotas/3
console.log(promedio);

if (promedio > 6){
    console.log('Aprobaste! Felicidades! Sos un Genio! La reencarnacion de Turing! Sacaste: ' + promedio);
}else{
    console.log ('Desaprobaste! Sos un burro! Sacaste un pauperrimo: ' + promedio);
}

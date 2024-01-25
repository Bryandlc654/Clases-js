let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let sumaPares = 0;

for (let numero of numeros) {
    if (numero % 2 === 0) {
        sumaPares += numero;
    }
}

console.log(sumaPares);

let arrayNumeros = [100, 25, 40, 78, 3];
let numeroMaximo = Math.max(...arrayNumeros);

console.log(numeroMaximo)

/* 
let arrayNumeros = [100, 25, 40, 78, 3];
let numeroMaximo = Math.min(...arrayNumeros);

console.log(numeroMaximo)

*/
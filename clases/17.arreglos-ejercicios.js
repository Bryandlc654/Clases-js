/* Uso del map */
let numeros = [1, 2, 3, 4];
let duplicado = numeros.map(num => num * 2);
console.log(duplicado);

/* Uso del Filter */
let numerosN = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosPares = numerosN.filter(numero => numero % 2 === 0);

console.log(numerosPares);

/* Uso del Reduce */
let arrayNumeros = [1, 2, 3, 4];
let suma = arrayNumeros.reduce((acumulador, numero) => acumulador + numero)
console.log(suma)
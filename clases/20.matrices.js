let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(matriz[1][2])

for(let fila = 0; fila < matriz.length;fila++){
    for(let columna = 0;columna<matriz[fila].length;columna++){
        console.log(matriz[fila][columna])
    }
}
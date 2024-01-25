//Funcion normal 
function cuadrado(x) {
    return x * x;
}
console.log(cuadrado(4));

//Funcion asignado a una variable
let cubo = function (y) {
    return y * y * y;
}
console.log(cubo(3))

//funcion flecha
let doble = (z) => {
    return z * 2;
}
console.log(doble(3))
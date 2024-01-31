function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.hacerSonido = function () {
    console.log("Haciendo sonido...");
}

const perro = new Animal("Chato");
perro.hacerSonido();
function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Persona ("Juan", 30);
const persona2 = new Persona ("Ana", 25);


Persona.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
}

persona2.saludar();
function saludar() {
    console.log(`Hola, ${this.nombre}`);
}

const persona = {
    nombre: "Juan"
}

saludar.call(persona)


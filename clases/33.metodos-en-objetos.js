let persona = {
    nombre : "Carlos",
    edad :30,
    ciudad: "Barcelona",
    saludar : function () {
        console.log(`Hola ${this.nombre}`)
    }
}

persona.saludar()
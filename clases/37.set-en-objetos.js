let usuario = {
    _nombre: "",

    set nombre(nuevoNombre) {
        if (typeof nuevoNombre === "string") {
            this._nombre = nuevoNombre;
        } else {
            console.log("El nombre debe ser cadena de texto");
        }
    },

    get nombre() {
        return this._nombre;
    }
};

usuario.nombre = "Maria";
console.log(usuario.nombre);
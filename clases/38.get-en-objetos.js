let producto = {
    _precio: 0,

    set precio(nuevoPrecio) {
        if (typeof nuevoPrecio === "number" && nuevoPrecio >= 0) {
            this._precio = nuevoPrecio;
        } else {
            console.log("El precio debe ser un numero positivo");
        }
    },

    get precio() {
        return `$${this._precio.toFixed(2)}`;
    }
};

producto.precio = -50.2;
console.log(producto.precio);



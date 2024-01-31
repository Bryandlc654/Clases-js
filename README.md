# Clases-js

## Método Constructor de Objetos

### Concepto:
En JavaScript, un método constructor es una función que se utiliza para crear y inicializar objetos. Se llama "constructor" porque se utiliza con la palabra clave `new` para instanciar un nuevo objeto.

### Ejemplo Práctico:
```javascript
// Definir un método constructor para un objeto Persona
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Crear un nuevo objeto Persona usando el constructor
const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Ana", 25);

console.log(persona1);  // Persona { nombre: 'Juan', edad: 30 }
console.log(persona2);  // Persona { nombre: 'Ana', edad: 25 }



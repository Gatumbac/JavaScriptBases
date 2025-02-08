// POO en java script
//Antes - Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Producto('Monitor', 800);
const producto2 = new Producto('Laptop', 700);

// Prototypes -> métodos que apuntan a un tipo de objeto en particular.
Producto.prototype.formatear = function() {
    console.log(this.nombre)
}

producto1.formatear();

// POO actual -> con clases
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() {
        return `Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`;
    }
}

const persona1 = new Persona('Gabriel', 'Tumbaco');
console.log(persona1.saludar());

// Herencia y polimorfismo
class Estudiante extends Persona {
    constructor(nombre, apellido, matricula) {
        super(nombre, apellido);
        this.matricula = matricula;
    }
    saludar() {
        console.log(`${super.saludar()} y mi matricula es ${this.matricula}`);
    }
}

const estudiante1 = new Estudiante('Anabella', 'Tumbaco', '202412584');
estudiante1.saludar();
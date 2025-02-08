//Unir Objetos
const producto = {
    nombre: "Laptop HP",
    precio: 225,
    disponible: true
}

const medida = {
    peso: '1kg',
    medidad: '1m'
}

// Spread Operator -> une los objetos
const nuevoProducto = { ... producto, medida }
console.log(nuevoProducto)
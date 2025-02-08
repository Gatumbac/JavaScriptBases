"use estrict";
// Objetos
// Estructuras que permiten agrupar datos relacionados.
// POO en JS

const producto = {
    nombre: "Laptop HP",
    precio: 225.50,
    disponible: true
}

console.log(producto.nombre);

//Agregar nuevas propiedades
producto.imagen = "imagen.jpg";
//Eliminar propiedades
delete producto.disponible;

console.log(producto);

//Destructuring de objetos
// Antes
const precioProducto = producto.precio;
console.log(precioProducto)

//Despues -> todo en un mismo paso
const {nombre} = producto;
const {precio, imagen} = producto;
console.log(nombre);
console.log(precio);
console.log(imagen);

//Congelar objetos -> para que sean unmodificables
//usar al principio "use strict" -> js en modo estricto
//no agregar, editar o eliminar propiedades a objetos const

Object.freeze(producto);
console.log(Object.isFrozen(producto));

//permitir la edición en modo estrict
Object.seal(producto);
producto.precio = "NUEVO PRECIO";
console.log(producto);

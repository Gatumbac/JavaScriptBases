// Funciones de los array
//array de objetos
const array = [
    {nombre: 'Pedro', edad:25},
    {nombre: 'Maria', edad:48},
    {nombre: 'Lucio', edad:45},
    {nombre: 'Nurcia', edad:20},
    {nombre: 'Lamilla', edad:18},
    {nombre: 'Victor', edad:30},
    {nombre: 'Luis', edad:32},
]
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Diciembre"]
console.log(meses.includes("Noviembre"));

//en arreglo de objetos
console.log(array.some(function(persona) {
    return persona.nombre == 'Pedro'
}))

console.log(array.reduce(function(total, persona) {
    return total + persona.edad;
}, 0))

// filter
const resultado = array.filter(persona => persona.edad <= 20);
console.table(resultado);
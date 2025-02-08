// Arreglos o Arrays
// Estructuras de datos
// Agrupar datos o elementos relacionados en una sola variable
//longitud dinámica 

const numeros = [10,20,30,40,50];
console.log(numeros);
console.table(numeros);

const dias = ["Lunes", "Martes", "Miercoles"];
//Arreglos con elementos de distintos tipos de datos
const array = ["Hola", true, 25, ["h","o"]];
console.table(array)

//acceso a elementos
console.log(array[0]);
console.log(array[3][0]);

//propiedades
console.log(array.length)

//iterar sobre objetos
numeros.forEach(function(numero) {
    console.log(numero)
});

//agregar, editar, eliminar
//agregar
numeros.push(55); //final
numeros.unshift(-10); //inicio
//eliminar
numeros.pop() //final
numeros.shift() //inicio
//eliminar objetivo
numeros.splice(2,1);

//spread operator
const nuevoArray = [...numeros, 100];
const nuevoArray1 = [125, ...numeros];
console.table(nuevoArray1);






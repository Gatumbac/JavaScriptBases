// funciones
// procedimientos almacenados reutilizables
//Declaración de la función
function sumar(a, b) {
    console.log(a + b)
}

sumar(2,2);

//Expresión de la función
const sumar2 = function(a,b) {
    console.log(a+b)
}

sumar2(5,10);

//Hoisting
//Las funciones con declaración se pueden llamar antes de crearlas.
//La expresión de la función no se puede llamar antes de crearlas.

//Metodos y funciones
const numero1 = 20;
const numero2 = '20'
console.log(parseInt(numero2)); //funciones -> no vinculadas a objetos
console.log(numero1.toString()); //Métodos -> asociadas a un objeto

//Parametros por default
function sumar4(a=0, b=0) {
    console.log(a + b)
}

sumar4(5);

//funciones que retornan valores
function multiplicar(a=1, b=1) {
    return a * b;
}

const resultado = multiplicar(4,5);
console.log(resultado);

let total = 0
function agregar(valor) {
    total += valor;
}

agregar(500);
agregar(500);
console.log(total)

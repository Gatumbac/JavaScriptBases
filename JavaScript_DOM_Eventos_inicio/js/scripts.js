console.log("Funciona")
// Seleccionar elementos HTML en java Script
// Funciona con sintaxis similar a los selectores CSS

// query Selector -> 0 o 1 elemento
// Manipulación de elementos
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading Actual';
heading.classList.add('nueva__clase');
//existen muchas propiedades para modificar.

//query selector ALL -> Retorna de 0 a todos los que concuerden con el selector.
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
enlaces[0].textContent = 'Nuevo Enlace';
enlaces[0].href = 'http://google.com'
enlaces[0].classList.add('minuevaclase');
enlaces[0].classList.remove('minuevaclase');


// getElementByID -> no se utiliza mucho
const heading2 = document.getElementById('heading');
console.log(heading2);

// COMO GENERAR CODIGO HTML
const nuevoEnlace = document.createElement('A');
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Un nuevo enlace';
nuevoEnlace.classList.add('navegacion__enlace');
// Agregar al DOM
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace)

//Eventos -> acciones o cambios que suceden en el sitio web
//Add Event Listener "escucha" cuando ocurre un evento y permite ejecutar código.

//Los eventos son acciones que ocurren en una página web.

//addEventListener es una función que permite "escuchar" esos eventos y ejecutar código cuando ocurren.

//Puedes usarlo para hacer que tu página web sea interactiva y responda a las acciones del usuario.

console.log(1)
// load espera que todos los archivos (HTML CSS JS) estén LISTOS
window.addEventListener('load', function() {
    console.log(2);
})

// DOMContentLoaded solo espera que se descargue el HTML
document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
})
console.log(5)

//OTRA FORMA -> Con propiedades
window.onscroll = function() {
    console.log('scrolling');
};

//Eventos con elementos HTML
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    //Se previene el evento por defecto. En este cado se enviaba el formulario por defecto
    evento.preventDefault();
    //Útil para validar un formulario
    console.log('Enviando form');
})
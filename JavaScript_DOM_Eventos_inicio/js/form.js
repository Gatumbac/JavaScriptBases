//Eventos con elementos HTML
// el evento click puede reaccionar a cualquier elemento
// en formularios generalmente se usa el evento submit
/*
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    //Se previene el evento por defecto. En este cado se enviaba el formulario por defecto
    evento.preventDefault();
    //Útil para validar un formulario
    console.log('Enviando form');
})
*/
//Eventos de los inputs y text area en formularios
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// eventos de submit
// usualmente en formuario se usa el evento submit
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    //validar el formulario
    //destructuring de objetos
    const{nombre, email, mensaje} = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true)
    } else if (nombre.length < 3 || mensaje.length < 5) {
        mostrarAlerta('Datos Incompletos', true);
    } else {
        mostrarAlerta('Datos enviados correctamente')
    }
})
//value es la información que está en el input
// Ir leyendo en tiempo real
/*
nombre.addEventListener('input', function(e) {
    console.log(e.target.value);
})
*/

nombre.addEventListener('input', leerTexto);

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);


// tecnica para llenar dinamicamente el objeto de datos en tiempo real
// usar para la mayoria de formularios
// importante la propiedad debe llamarse igual que el id del input del formulario
function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    //console.log(datos);
    // console.log(e.target.value);
};

function mostrarAlerta(mensaje, error = false) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    formulario.appendChild(alerta);
    if (!error) {
        alerta.classList.add('correcto');
    } else {
        alerta.classList.add('error');
    }
    setTimeout(function() {
        alerta.remove();
    }, 5000);
}



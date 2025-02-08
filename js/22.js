// FETCH API
//FETCH API es una herramienta en JavaScript para hacer peticiones HTTP (obtener o enviar datos a un servidor).

//Sirve para comunicarte con servidores y APIs.

//Reemplaza a XMLHttpRequest, que era más complicado de usar.

//Funciona con promesas, lo que lo hace más fácil y eficiente.

function obtenerEmpleados() {
    const archivo = 'json/empleados.json';

    fetch(archivo)
        .then(resultado => resultado.json())
        .then(datos => {
            const {empleados} = datos;
            empleados.forEach(empleado => {
                console.log(empleado)
            });
        })
        .catch(error => console.log(error));
}

//también se puede con async await
// hacer la función asíncrona y las llamadas a fetch y los then hacerlos await (dependientes del resultado anterior)

obtenerEmpleados();
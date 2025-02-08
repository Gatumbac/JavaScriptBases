// Async / Await
// Ejecutar operaciones asíncronicas en la web
// Diferenciar entre el tiempo de operaciones y ejecutar las tareas sin bloquear las demás
// una operación asíncrona es una tarea que tarda tiempo en completarse, pero el programa no se detiene a esperar. En lugar de eso, sigue ejecutando otras cosas y, cuando la tarea asíncrona termina, se maneja el resultado.
// te permite manejar tareas que tardan tiempo (como pedir datos a un servidor) sin bloquear el resto del programa.

async function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando los clientes... Espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados.')
        }, 5000);
    })
}

// funciones asincronas en la web
// async: Se usa para declarar una función asíncrona. Una función async siempre devuelve una Promise.

// await: Se usa dentro de una función async para esperar a que una Promise se resuelva. Hace que el código parezca síncrono (aunque sigue siendo asíncrono por dentro).
async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        console.log('Este código si se bloquea.')
        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
}

app();
console.log('Este código no se bloquea.') // el código debajo del async function no se bloquea
// se ejecutan los promises por detrás mientras el resto del código se ejecuta normalmente
// Async / Await para dos o más operaciones asincrónicas

async function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando los clientes... Espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados.')
        }, 5000);
    })
}

async function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando los pedidos... Espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados.')
        }, 3000);
    })
}

//clientes y pedidos no dependen una de otra
// se debe mejorar el performance
/*
async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        const pedidos = await descargarUltimosPedidos();
        console.log(resultado);
        console.log(pedidos);
    } catch (error) {
        console.log(error);
    }
}
*/

//La mejor forma para dos o mas promises
async function app() {
    try {
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]); 
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
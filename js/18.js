//Promises
//Sirven para manera operaciones asíncronas o en segundo plano
//Básicamente se ejecutan procesos fuera del hilo principal y la promesa dice si ese proceso tuvo éxito, falló o aún está ejecutándose.
//Representa algo que pasará en el futuro
// las Promises se usan para manejar operaciones que tardan tiempo en completarse, como:

//Cuando haces algo que toma tiempo, como consultar una base de datos, cargar un archivo o hacer una llamada a una API en internet, JavaScript usa Promesas para manejar esas operaciones asíncronas.

//JavaScript no se detiene a esperar el resultado de esas operaciones; en cambio, sigue ejecutando el resto del código mientras la promesa trabaja en segundo plano..
//Cuando termine la promise avisará

const usuarioAuntenticado = new Promise((resolve, reject) => {
    const auth = false;
    if (auth) {
        resolve('El usuario fue auténticado correctamente')
    } else {
        reject('El usuario no fue autenticado')
    }
})

//Tres estados en la promesa
// fullfiled -> completada
// pending -> pendiente
// rejected -> rechazada

usuarioAuntenticado
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));

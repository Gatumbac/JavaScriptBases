//Try Catch
//Manejo de excepciones y errores durante la ejecución del programa

try {
    console.log(30/0);
} catch (error) {
    console.log(error.message)
}

console.log('Fin del programa')
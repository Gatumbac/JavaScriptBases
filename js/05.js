// Concatenación de strings
const nombre = 'Juan';
const email = 'correo@correo.com';
console.log(nombre + " " + email);
console.log()

//Template String -> similar a los format en Python
//Comillas ALT+96
console.log(`Nombre Cliente: ${nombre} | Correo: ${email}`);

//Booleans -> igual que en java!
const positivo = true;
const negativo = false;
console.log(positivo && negativo);
console.log(positivo || negativo);
console.log(positivo && !negativo);
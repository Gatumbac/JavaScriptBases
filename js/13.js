// Estructuras de control
// Alterar el flujo del programa 

//IF
const puntaje = 1100;
if (puntaje === 1000) {
    console.log('El puntaje es 1000');
} else if (puntaje < 1000) {
    console.log('El puntaje es menos que 1000')
} else {
    console.log('No es 1000');
}

// Switch
const metodoPago = 'tarjeta'
switch (metodoPago) {
    case 'efectivo':
        console.log('Pagaste en efectivo')
        break;
    case 'tarjeta':
        console.log('Pagaste con tarjeta')
        break;
    default:
        console.log('Metodo de pago no específicado')
        break;
}

//for -> repetir un número fijo de veces
for (i=0; i<10; i++) {
    console.log(i);
}

//while -> repetir en base a una condición
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//do while -> Ejecuta una vez, luego valida
let k = 25
do {
    console.log(k)
    k--;
} while(k < 10);

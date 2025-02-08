// ForEach y MAP
const carrito = [
    {nombre: 'Monitor 20\"', precio: 20},
    {nombre: 'Teclado mecánico', precio: 40},
    {nombre: 'Ratón inalámbrico', precio: 15},
    {nombre: 'Auriculares Bluetooth', precio: 30},
    {nombre: 'Parlantes 2.1', precio: 25},
    {nombre: 'Silla ergonómica', precio: 120},
    {nombre: 'Webcam HD', precio: 50},
    {nombre: 'Micrófono de estudio', precio: 70},
    {nombre: 'Cargador inalámbrico', precio: 18},
    {nombre: 'Funda para portátil', precio: 10},
    {nombre: 'Estabilizador de voltaje', precio: 35},
    {nombre: 'Hub USB 3.0', precio: 15},
    {nombre: 'Cámara de seguridad', precio: 80},
    {nombre: 'Soporte para teléfono', precio: 12},
    {nombre: 'Papelera para oficina', precio: 8},
    {nombre: 'Lámpara LED regulable', precio: 25},
    {nombre: 'Ratón para gaming', precio: 35},
    {nombre: 'Teclado retroiluminado', precio: 45},
    {nombre: 'Almohadilla ergonómica', precio: 10},
    {nombre: 'Lentes anti-reflejo', precio: 20},
    {nombre: 'USB de 128GB', precio: 25},
    {nombre: 'Funda para móvil', precio: 8},
    {nombre: 'Base para portátil', precio: 18},
    {nombre: 'Estación de carga múltiple', precio: 40},
    {nombre: 'Ventilador USB', precio: 15},
    {nombre: 'Altavoces Bluetooth', precio: 60}
];

//forEach -> exclusivo de arreglos
// guarda valores en variables externas o retornos sobre elementos
// ideal para recorrer arrays
carrito.forEach((producto) => console.log(producto.nombre));
carrito.forEach((producto) => console.log(producto.precio));

//map
// retorna un nuevo array con operaciones sobre los elementos
//ideal para tranformar datos
const arreglo2 = carrito.map((elemento) => elemento.precio *= 1.12);
console.table(arreglo2);

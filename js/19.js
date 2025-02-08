// Notification API
//Document hace referencia al contenido HTML
// EVENTO -> ACCIÓN O SUCESO QUE OCURRE EN EL NAVEGADOR
// Permiten páginas web más interactivas.
let boton = document.querySelector('#boton');
boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
});

if (Notification.permission == 'granted') {
    new Notification('Esta es mi notificación!', {
        icon: 'img/pictureprofile.jpg',
        body: 'Gabriel Tumbaco - Descubre más acerca de mi trayectoria.'
    })
}
//Métodos de objetos - propiedad
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción ${id}`);
    },

    pausar: function() {
        console.log('Pausando canción')
    }
}
//fuera del objeto
reproductor.borrar = function(id) {
    console.log(`Borrando canción ${id}`)
}

reproductor.reproducir('3840');
reproductor.pausar();
reproductor.borrar('253');

//this

const reservacion = {
    nombre: 'Gabriel',
    reservado: true,
    getInfo: function() {
        console.log(`${this.nombre} - ${this.reservado}`);
    } 
}

reservacion.getInfo();

// las arrow functions no funcionan dentro de objetos puesto que su contexto es el entorno global (window) (ámbito)

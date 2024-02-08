"use strict";

// 1) El Problema...
// const nombreCliente =  'Juan';
// let ahorro = 200;


// 2) Los IIFE son funciones que se ejecutan inmediatamente que son leidas...


(function() {
    const nombreCliente =  'Juan';
    let ahorro = 200;


})();



// Veamos un ejemplo de export...
export const nombreCliente =  'Juan'; // Esto nos va amarcar un error, nos dirá que los exports solo funcionan en modulos...

// abrir el index.js y declararlo con type="module"



// Importar y exportar multiples valores

export const nombreCliente =  'Juan';
export const ahorro = 200

// Exportar e importar funciones...

// También puedes exportar e importar funciones...


// 3 ) 

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

// 4)
// Exportar una clase
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}




// 6)  EXPORT DEFAULT


export default function funcion() {
    console.log('Función por default')
}

export default function () {
    console.log('Función por default')
}
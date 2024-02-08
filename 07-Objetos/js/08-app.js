"use strict";
// Similar a Freeze, existe otro object method llamado Seal

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

Object.seal(producto);

// Se pueden reasignar
producto.nombre = 'Tablet';

// Pero no eliminar
// delete producto.precio;



// producto.imagen = "imagen.jpg";

// Verificar si un objeto esta sellado
console.log(Object.isSealed(producto))

console.log(producto);
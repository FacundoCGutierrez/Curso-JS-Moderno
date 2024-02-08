"use strict";


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log(producto);



Object.freeze( producto ); // Freeze toma como argumento el objeto

// producto.disponible = false;



// Freeze tampoco permite agregar nuevas propiedaes
// producto.imagen = "imagen.jpg";



// delete producto.nombre;


console.log( Object.isFrozen(producto) );

console.log(producto);

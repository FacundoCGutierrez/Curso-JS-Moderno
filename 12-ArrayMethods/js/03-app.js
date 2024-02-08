


const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500},
    { producto: 'Televisión 50 Pulgadas', precio: 700},
    { producto: 'Tablet', precio: 300},
    { producto: 'Audifonos', precio: 200},
    { producto: 'Teclado', precio: 50},
    { producto: 'Celular', precio: 500},
    { producto: 'Bocinas', precio: 300},
    { producto: 'Laptop', precio: 800},
];

// Con un foreach lo podrías hacer asi...

let total = 0;
carrito.forEach( producto => total += producto.precio );
console.log(total);

                            
                            // total, actual
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //0 es el inicio
console.log( resultado );
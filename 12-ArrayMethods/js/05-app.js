



const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];
// con un foreach 
let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Bocinas') {
        resultado = carrito[index]
    }
});
console.log(resultado);


// con .find 

const resultado2 = carrito.find( producto => producto.nombre === 'Bocinas');
console.log(resultado2);

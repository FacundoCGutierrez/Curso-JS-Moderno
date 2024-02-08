const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);


// Eliminar el primer elemento...
// carrito.shift();

// // Eliminar el ultimo elemento...
// carrito.pop();


carrito.splice(1,0); //

console.log(carrito);
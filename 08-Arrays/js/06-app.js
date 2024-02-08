const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

let resultado = [...carrito, producto];
 resultado = [...resultado, producto2];

 // Para añadir al inicio...
 resultado = [producto3, ...resultado];


console.log(resultado);
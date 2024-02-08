
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

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



const meses2 = [...meses, 'Julio'];
console.log(meses);
console.log(meses2); 


const meses3 = ['Julio',...meses ]; 


const producto = {producto: 'Disco Duro', precio: 300};
const carrito2 = [...carrito, producto];
console.log(carrito2);


const carrito3 = [producto, ...carrito];
console.log(carrito3);

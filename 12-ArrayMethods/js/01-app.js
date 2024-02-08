

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

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



meses.forEach(mes => {
    if(mes === 'Enero') {
        console.log('Enero si existe...')
    }
})


const resultado = meses.includes('Enero'); // Cambiar a Diciembre...
console.log(resultado);


const existe = carrito.some( producto => producto.nombre === 'Celular' );
console.log(existe);

const existe2 = meses.some( mes => mes === 'Febrero' );
console.log(existe2);

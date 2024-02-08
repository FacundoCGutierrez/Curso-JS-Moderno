


localStorage.setItem('nombre', 'Juan');

// añadir algo a sessionstorage
sessionStorage.setItem('nombre', 'Pablo');

// Local Storage solo soporta strings, no soporta arrays ni objetos

const producto = {
    nombre: 'Monitor 24"',
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('productoJSON', productoString);



 const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));

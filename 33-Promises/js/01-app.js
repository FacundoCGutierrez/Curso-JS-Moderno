// Listado de paises
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

// Un nuevo pais se agrega despues de 2 segundos...
function nuevoPais(pais, callback) {
    setTimeout( () =>  {
        paises.push(pais);
        callback();
    }, 2000  );

// Los paises se muestran despues de 1 segundo
function mostrarPaises() {
    setTimeout(  () =>  {
        paises.forEach( pais =>  {
            console.log(pais)
        });
    }, 1000 ); // Después de un segundo obtenemos los paises...
}

mostrarPaises(); // Opcional


// Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises); 
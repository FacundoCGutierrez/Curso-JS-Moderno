// Listado de paises
const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`)
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

// Los paises se muestran despues de 1 segundo
function iniciarCallbackHell() {
    setTimeout(() => {
        // Agregar nuevo pais
        nuevoPais('Alemania', mostrarPaises); 
        setTimeout(  () =>  {
            nuevoPais('Francia', mostrarPaises);
            setTimeout(() => { 
                nuevoPais('Inglaterra', mostrarPaises);
            }, 3000);
        }, 3000 ); 
    }, 3000);
}

iniciarCallbackHell(); // Opcional


// mostrarPaises es el callback, una vez agregado alemania se va a ejecutar esa linea...

// VS Cdoe

//     <!-- 02 - JavaScript en el HTML
//     JavaScript puede ser agregado en cualquier lugar (mostrar head, body o antes del cierre del body)

// 0-->

// <!-- <script>
//     alert("Hola Mundo")
// </script> -->




// <!-- 03 - JavaScript Externo 
// -->


// alert("Hola Mundo")
'use strict';


// const nombre = prompt('Cual es tu nombre?');
// document.querySelector('.contenido').innerHTML = ` ${nombre} está aprendiendo JavaScript Moderno`;


// 05 - Comentar el código



// Existen 2 tipos de comentarios, de una linea o de múltiples lineas

/*

*/
+

// 06 - Todos los navegadores tienen una consola de Javascript, las mejores sin duda son firefox y Chrome
// La consola es muy útil ya que podrás observar tu código JS, resultados y seleccionar elementos

// Se pueden crear variables e imprimirlas
const hola = "Hola desde la consola";
console.log(hola);

// También se pueden crear arreglos
console.log([1, 2, 3, 4]);

// De la misma forma se pueden crear objetos
let obj = { nombre: "juan", profesion: "Desarrollador Web" }
console.log( obj );

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

// o mostrar algún error
console.error("Algo salió mal");

// Limpiar la consola
console.clear();

// O enviar advertencias
console.warn("Eso no esta permitido");

// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); console.warn("Eso no esta permitido"); console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.timeEnd('Hola');
   


// ejemplo

console.log('Hola')
console.log('Mundo')

console.log('Hola'); console.log('Mundo');



// function hola() {
// console.log('ok')
// }


// 08 - Obteniendo ayuda con ESLint para revisar errores de código.

// crear el archivo .eslintrc.json

// {
//     "parserOptions" : {
//         "ecmaVersion": 6
//     },
//     "rules" : {
//         "semi": ["error", "always"] // Muestra errores de código o también errores de código
//     }
// }
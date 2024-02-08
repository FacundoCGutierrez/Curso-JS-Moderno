

                // Todos tus selectores inician con document...
const header = document.getElementsByClassName('header'); // importante las mayusculas y minusculas...
console.log(header);

const hero = document.getElementsByClassName('contenido-hero');
console.log(hero);


const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


// Si una clase no existe, no va a retornar nada...
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);


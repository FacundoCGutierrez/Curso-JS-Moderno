
//  querySelector va a retornar máximo 1 elemento, si hay múltiples coincidencias solo va a retornar el primero...

const card = document.querySelector('.card'); // 
console.log(card);


const info = document.querySelector('.premium .info');
console.log(info);

const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

const formulario = document.querySelector('#formulario'); // En CSS seleccionas los ID con un signo de numeral..
console.log(formulario);

// Si un selector no existe, 
const noExiste = document.querySelector('#no-existe');
console.log(noExiste);

const nav = document.querySelector('nav');
console.log(nav);
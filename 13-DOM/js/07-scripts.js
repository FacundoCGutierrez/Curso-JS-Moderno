
// Vamos a cambiar el color de texto del h1

const heading = document.querySelector('h1');


console.log(heading.style);

// heading.style.backgroundColor = 'red'; //  Nota como las propiedades que le puedes pasar, son similares a las de CSS, con la diferencia de que el guion se elimina y la segunda palabra su primer letra es mayuscula.

// heading.style.textTransform = 'uppercase';
// heading.style.fontFamily = 'Arial';


const card = document.querySelector('.card');
console.log(card);
console.log(card.classList); // Classlist nos permitirá listar las classes
card.classList.add('nueva-clase'); 
card.classList.remove('card'); // 





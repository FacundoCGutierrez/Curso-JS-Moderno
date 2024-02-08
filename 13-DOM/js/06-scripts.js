

const encabezado = document.querySelector('.contenido-hero h1');
// console.log(encabezado);

console.log(encabezado.innerText); 
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);


const textoEncabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(textoEncabezado);


document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading'


const nuevoTexto = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoTexto;




const imagen = document.querySelector('.card img');
console.log(imagen.src);
// Cambiar la imagen...
imagen.src = 'img/hacer2.jpg';
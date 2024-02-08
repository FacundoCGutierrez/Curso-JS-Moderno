


const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

console.log(navegacion.childNodes);

// también existe algo llamado Children
console.log(navegacion.children)


// Hay mucha información aqui...
console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un eleemnto
console.log(navegacion.children[0].nodeName) // Que etiqueta es...




const card = document.querySelector('.card');
console.log(card.nodeType);
console.log(card.nodeName);

// 1 = Elemento
// 2 - Atributo
// 3 - Text node
// 8 - Commentario
// 9 - Documento
// 10 doctype


console.log(card.children);

console.log(card.children[1]);

console.log(card.children[1].children[1]);

// Acceder al titulo
console.log(card.children[1].children[1].textContent);

// Modificar ese titulo con un traversing
card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...'



console.log(card.children);
console.log(card.children[0]);
console.log(card.children[0].src);

// Cambiar la imagen...
card.children[0].src = 'img/hacer2.jpg';







console.log(navegacion.lastChild);
console.log(navegacion.lastElementChild);


// Si desesa acceder al primero
console.log(navegacion.firstChild)
console.log(navegacion.firstElementChild);

// Cambiar el primer texto...
navegacion.firstElementChild.textContent = 'Nuevo Enlace...'
+





// vamos a seleccionar el primer enlace...
const enlace = document.querySelector('a');
console.log(enlace);


// Hay diferente sformas...

console.log(enlace.parentNode)
console.log(enlace.parentElement)



// También puedes ir al padre del padre...
console.log(enlace.parentElement.parentElement)






console.log(enlace);
console.log(enlace.nextElementSibling);
console.log(enlace.nextElementSibling.nextElementSibling);

console.log(card.nextElementSibling);




const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard)

console.log(ultimoCard.previousElementSibling);
// Null y Undefined


// veamos un ejemplo de undefined.
let numero;

console.log(numero); // La variable esta definida pero su valor no, por lo tanto es undefined...
console.log(typeof numero)

// En el caso de null es más bien asignarlo

let numero2 = null;
console.log(numero2);
console.log(typeof numero2); // ahora esto nos dirá que es un objeto, la especificación de ecma que es quien define el standard del lenguaje dice que null debe ser un objeto

// Comparando null y undefined - Comparar un valor null y un undefined puede ser de las cosas más complicadas
console.log (numero == numero2);


console.log(numero === numero2);


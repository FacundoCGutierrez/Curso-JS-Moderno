
let cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

// acceder a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));


// Métodos al MAP
// Tamaño del MAP
console.log(cliente.size);
// Contiene un valor
console.log(cliente.has('tipo'));
console.log(cliente.get('tipo'));
// Borrar
cliente.delete('nombre');
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
console.log(cliente.size);

// Borrar el map
cliente.clear();
console.log(cliente);

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('nombre', 'Antonio');
// paciente.set('cuarto', 400);

console.log(paciente);


// Foreach a un map
cliente.forEach((datos, index) => {
    // console.log(datos);
    console.log(`${index}: ${datos}`);
});


const nombre    = 'Alex';
const apellido  = 'Quispse';

//const nombreComnpleto = nombre + ' ' + apellido;
const nombreComnpleto = `${ nombre } ${apellido}`;

console.log( nombreComnpleto );

function getSaludo(nom) {
    return 'Hola ' + nombre;
}

console.log(`Texto: ${ getSaludo(nombre)}`)

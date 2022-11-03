const saludar = function ( nombre ){
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Alex'));
console.log(saludar3('Alexasd'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'Ayyou'
})

console.log(getUser());

//---------------------------Tarea-----------------

/*function getUsuarioActivo(nombre){
    return {
        uid: 'ABC321',
        username: nombre,
    }
}

const usuarioactivo = getUsuarioActivo('Alex');
console.log( usuarioactivo)*/

//resulucion

const usuarioActivo = ( nombre ) => ({
    uid: 'ABC321',
    username: nombre,
})

console.log(usuarioActivo('Alexasd'));
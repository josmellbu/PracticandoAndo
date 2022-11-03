
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//const { nombre, edad, clave } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );
//console.log( persona.edad);
//console.log( persona.clave);

//const retornaPersona = ( {nombre, edad, rango = 'Capitán'}) => {
    //console.log(nombre,edad,rango)
//}
//retornaPersona( persona )

const useContext = ({clave, nombre, edad, rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad
    }
}
const {nombreClave, anios} = useContext(persona);

console.log(nombreClave, anios);
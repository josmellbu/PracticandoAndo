const persona = {
    nombre: 'Pepe',
    apellido: 'Blue',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 456321,
        lat: 123166,
        lng: 132132,
    }
};

//console.table(persona);
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
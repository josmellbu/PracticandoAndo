import {getHeroes, getHeroesByOwner} from "./Bases/08-import";


/*const promesa = new Promise((resolve, reject)=>{

    setTimeout(() => {
        const p1 = getHeroes(2);
        resolve( p1 )
        reject('Nose pudo encontrar el heroe')
    }, 2000);

});

promesa.then( (heroe) => {
    console.log('heroe', heroe)
} )
.catch(err=> console.warn(err));*/

const getHeroesByIdAsync = (id) => {

    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            const p1 = getHeroes(id);
            
            if ( p1) {
                resolve( p1 )
            } else{
                reject('Nose pudo encontrar el heroe')
            }
            
        }, 2000);

    });
}

getHeroesByIdAsync(1)
    .then( console.log)
    .catch(console.warn)
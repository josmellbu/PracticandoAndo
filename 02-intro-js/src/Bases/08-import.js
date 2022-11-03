//import {heroes} from './data/heroes';
//import { heroes } from './data/heroes'
import heroes, {owners} from "../data/heroes";

//console.log(owners)

export const getHeroes = (id) => heroes.find((heroes) => heroes.id === id)


//console.log(getHeroes(2))

export const getHeroesByOwner = ( owner ) => heroes.filter((heroes) => heroes.owner === owner)

//console.log(getHeroesByOwner('Marvel'))


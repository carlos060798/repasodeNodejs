// desestructuaracion de objetos

const { get } = require("http");


const superman={
    nombre: 'clarck kent',
    poder: 'volar',
    vida: 100,
    ataque: 1000,
    defensa: 1000,

getNombre(){
    return `superman se llama ${this.nombre}`
}
}
// forma normal
console.log(superman.getNombre)    

// con desestructuracion  de objetos
const {nombre,vida,ataque}=superman

console.log(nombre,vida,ataque) 

// desestructuracion de array
const superherues=["batman", "superman", "mujer maravilla"]

const [superheroe1,superheroe2,superheroe3]=superherues
console.log(superheroe1,superheroe2,superheroe3)
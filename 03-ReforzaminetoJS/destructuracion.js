// Destructuracion de un Objeto
const deadpool={
    nombre:"wade",
    apellido:"winston",
    poder:"regeneracion",
    get getNombre(){
        return `${this.nombre} ${this.apellido}`;
    }

}


const {nombre,apellido,poder} = deadpool;/**Esta es la destructuracion donde para traer los atributos de un objeto 
no tengo  que crear multimples variables en multiples lineas sino que puedo traer esos atributo que necesito en una sola linea*/

console.log(nombre+" "+apellido+" "+poder);

function imprimirHeroe({nombre,apellido,poder}){/**Tambien puedo hacer la destructuracion con una funcion pasando por argumeto
    los atributos que quiero de ese objeto y se que es una destructuracion por que tiene las llaves dentro de los paramatros de 
    la funcion */

    console.log(nombre+" "+apellido+" "+poder);

}

imprimirHeroe(deadpool);/**Le paso por parametro el objeto para hacer la destructuracion por parametro */

// Destructuracion de un Array

const heroe = ["deadpool","tanjiro","gust"];

const [h1,h2,h3] = heroe;/**Asi es como se destructura un arreglo es parecido a la destructuracion de un objeto
pero lo unico diferente que en vez de colocar llaves coloco corchetes */
console.log(h1,h2,h3);

const[, heroe2, ] = heroe;/**y si lo que quieo es solo un valor del arreglo hago este procedimineto */ 
console.log(heroe2);

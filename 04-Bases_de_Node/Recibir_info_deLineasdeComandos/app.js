const {tablaMultiplicar}= require("./multiplicar");

console.log(process.argv);/**Con process.argv puedo ver por medio de un array que es lo que recivo por consola 
de esta aplicacion y esto me sirve para recivir argumentos que tengan un valor desde consola y aqui en el codigo 
tratarlos como variables con un valor, algo algo asi como una entrada de datos  */

const [,,arg3] = process.argv;/**Aqui con destructuracion de array recivo el tercer valor de process.argv que seria 
el argumento que voy a enviar por linea de comandos y despues guardo ese valor en 'arg3' */
console.log(arg3);

const [,valor] = arg3.split('=');/**Lo que hago es una destructuracion de un dato tipo String por ende la destructuracion es parecida a la
de un array, lo que hago es que con el metodo split() separo ese String desde el igual'=' estonces tendria dos valores el "--valor" y el "5" o el numero 
que yo le pase por eso al destructurarlo paso una coma en blanco y la otra si coloco una varialble que me recibe el numero  */
console.log(valor);/**Ahora ya con eso puedo tener una entrada de datos en JS sin nesecidad de dar los valores desde el codigo directo */

tablaMultiplicar(valor).then((resolve)=>{console.log(resolve);}).catch((reject)=>{console.log(reject);});/**Envio el valor que recibi por 
argumento desde consola  */
const argv = require("yargs").argv;/**llamo el paquete de 'yargs' que instale con npm utilizando 'require'
 y guardandolo en una constante luego llamo del todo el paquete de yargs que me traiga el 'argv'  */


 console.log(process.argv);/**Con este traigo los argumentos de consola pero desde node y js normal osea sin ayuda
 de ningun paquete */
 console.log(argv);/**Con este ya traigo los argumentos de la consola pero con la ayuda del paquete de 'yargs'
 que esto me facilita mucho en traer el contenido o valor de un argumento de consola para despues guardarlo
 en una variable en el codigo, este yargs me genera un objeto con multiples propiedades donde se van a guardar 
 los argumentos que yo le pase como propiedades de este objeto   */

 console.log(argv.valor);/**y asi es como puedo traer el valor del argumento con la sintaxis de dotnotanion 
 del 'nombreDeObjeto.propiedadDelObjeto' y asi traigo el valor de esa propiedad  */
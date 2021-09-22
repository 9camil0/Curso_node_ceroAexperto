const colors = require("colors");
const argv = require("yargs").option('v',{

 alias:"valor",
 type:"number",
 demandOption:true,
 describe: colors.yellow("es el valor de base en la tabla") /**Agrego una descripcion del argumento  */

}).check((argv,option)=>{
    if(isNaN(argv.v)){
        throw "El valor recivido no es un numero, por favor ingresar un numero"
    }
    return true;
}).option("l",{
   alias:"lista",
   type:"boolean",
   default:false,
   describe: colors.yellow("Se va a enlistar la tabla por consola, su valor por defecto es 'false'")

}).argv;

module.exports = {
    argv
}
const {tablaMultiplicar} = require("./multiplicacion.js");
const colors = require("colors");
const {argv} = require("./config/yargs");/**Asi es como exporto un archivo que contiene un paquete de node donde
tiene una serie de configuraciones echas por mi qu en este caso fue 'yargs' */


let valor = argv.v;
let lista = argv.l

tablaMultiplicar(valor,lista).then((resolve)=>console.log(colors.yellow(resolve))).catch((reject)=>console.log(colors.red(reject)));
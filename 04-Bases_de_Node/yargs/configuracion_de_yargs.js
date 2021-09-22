const argv = require("yargs").option('v',{/**Estas serian las configuraciones de yargs para los argumantos en consosla
    aqui configuro su tipo de valor y sus alias  */
    alias:'valor',
    type:'number',
    demandOption:true/**Aqui obligo a que siempre me tiene que mandar el valor de este argumento */


}).check((argv,option)=>{/**Aqui verifico que lo que estoy reciviendo del valor del argumento sea conforme a su 
    configuracion inicial y si no mando devuelvo un error  */
    if(isNaN(argv.v)){
        throw "El valor tiene que ser un numero";
    }
    return true;
}).option('l',{
    alias:'listar',
    type:"boolean",
    default:false,/**Aqui le pongo un valor por defecto */
    demandOption:true

}).argv;

const {tablaMultiplicar} = require('./multiplicar.js');

const valor = argv.v;
const listar = argv.l;

// console.clear();
// console.log(valor);
// console.log(argv);

tablaMultiplicar(valor,listar).then((resolve)=>{console.log(resolve);}).catch((reject)=>{console.log(reject);})


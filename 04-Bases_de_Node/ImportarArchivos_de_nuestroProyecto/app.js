const {tablaMultiplicar} = require('./helpers/multiplicar');/**Aqui con destructuracion de objetos y con un require traigo la funcion
que estoy esportando desde el archivo 'multiplicar.js' */

const valor = 8;

tablaMultiplicar(valor).then((resolved)=>{console.log(resolved)}).catch((rejected)=>{console.log(rejected);});
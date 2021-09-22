/**En este ejercicio voy a ver como es que con node puedo crear archivos de texto que su contenido sea algo que yo 
 * genere por codigo
 */

const num = 5;
const fs = require("fs");/**Requiero un paquete de node que con esto es como voy a crear el archivo */
let salida="";
console.clear()/**Esto me sirve para limpiar la consola y mostrar mejor lo que aparece despuesde este clear() */

// console.log("==============================");
// console.log("        Tabla del 5");
// console.log("==============================");

// for(let i =0; i<=10; i++){
//     salida +=`${i}*${num} = ${(i*num)} \n`;
// }

// fs.writeFile("Tabla-del-5.txt",salida,(err)=>{
//     if(err){
        
//         throw err;
//     }
//     console.log("El archivo 'Tabla-del-5.txt' fue creado");
// })


console.log("==============================");
console.log("        Tablas de multiplicar del 1-10");
console.log("==============================");

for(let i = 0;i<=10;i++){

    for(let j =0; j<=10; j++){
        salida += `${i}*${j} = ${(i*j)}\n`;
    }
    salida +=`\n`;
}

fs.writeFile("/home/camilo/Documentos/cursos_progra/Node_ceroAexperto/04-Bases_de_Node/Archivos_creados/TablasDeMultiplicar_1-10.txt",salida,(err)=>{
    if(err) throw err;
    console.log("el archivo 'TablasDeMultiplicar_1-10.txt' fue creado");
})

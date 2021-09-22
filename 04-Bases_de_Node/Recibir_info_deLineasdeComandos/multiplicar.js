const fs = require("fs");

let salida = "";

const tablaMultiplicar = (valor)=>{

    return new Promise((resolve,reject)=>{

        for(let i =0; i<=10;i++){
            salida +=`${i} * ${valor} = ${(i*valor)}\n`;
        }

        fs.writeFile(`/home/camilo/Documentos/cursos_progra/Node_ceroAexperto/04-Bases_de_Node/Archivos_creados/TablasDeMultiplicar_${valor}.txt`,salida,(err)=>{
            if(err){
                reject(`'No se pudo crear el archivo por ${err}`);
            }

            resolve(`Se ha creado exitosamente el archivo 'TablasDeMultiplicar_${valor}.txt' `);
        });
    });

}


module.exports ={
    tablaMultiplicar
}
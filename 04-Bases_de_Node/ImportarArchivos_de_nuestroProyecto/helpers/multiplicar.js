const fs = require("fs");
let salida = '';

const tablaMultiplicar = (valor)=>{

    return new Promise((resolved,reject)=>{

        for(let i =0; i<=10; i++){
            salida += `${i} * ${valor} = ${(i*valor)} \n `;
        }
        
        fs.writeFile(`/home/camilo/Documentos/cursos_progra/Node_ceroAexperto/04-Bases_de_Node/Archivos_creados/TablasDeMultiplicar_${valor}.txt`,salida,(err)=>{
            if(err){
                reject(`'No se pudo crear el archivo por ${err}`);
            }
            resolved(`Se ha creado exitosamente el archivo 'TablasDeMultiplicar_${valor}.txt' `)
        });
    
    })
}

module.exports={/**Con 'module.export'(module es un objeto gloval de JS) es como yo puedo exportar a otro archivo funciones a otro archivo
para esto creo un objeto y le paso el nombre de la funcio que yo quiera exportar  */
    tablaMultiplicar
};
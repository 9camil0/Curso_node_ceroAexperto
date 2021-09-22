const fs = require("fs");
let salida="";

const tablaMultiplicar = (valor,l)=>{

    return new Promise((resolve,reject)=>{

            salida += `================================\n  Tabla del ${valor}\n================================\n`;
            
            for(let i=0; i<=10; i++){
                
                salida +=`${valor} * ${i} = ${(i*valor)}\n`;
               
            }

            if(l){
                console.log("================================");
                console.log(`Tabla del ${valor}`);
                console.log("================================");
                console.log(salida);
            }
            fs.writeFile(`tabla_del_${valor}.txt`,salida,(err)=>{
                if(err){
                     reject(`El error es: ${err}`);
                }
            });
            resolve(` se creo el archivo 'tabla_del_${valor}.txt'`);
    
    
       
    })
}


module.exports = {
    tablaMultiplicar
}
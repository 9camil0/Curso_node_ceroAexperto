// const crearUsuario = (id,nombre,callback)=>{
//     const usuario ={
//         id,
//         nombre
//     }

//     return callback(usuario);
// }


// crearUsuario(1,"camilo",(usuario)=> console.log(`El ${usuario.nombre} tiene un id de ${usuario.id}`)) ;

const recivirObj = (obj,callback)=>{
    console.log(obj);

    callback(obj);

}

recivirObj({
    nombre:"camilo",
    edad:21
},(obj)=>{
    console.log(obj.nombre);
})

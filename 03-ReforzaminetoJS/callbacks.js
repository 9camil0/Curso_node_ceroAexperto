/**Un callback es una funcion que se ejecuta y se pasa como argumeto dentro de una funcion */

function getUsuarioById(id,callback){/**Por parametro guardo al callback o la funcion que esta dentro de otra */
    const usuario ={
        id,/**solo colo id ya que esto es igual a que yo colocara (this.id=id) pero por reduccion de codigo solo coloco 
        id */
        nombre:"camilo"
    }

    setTimeout(()=>{
       callback(usuario);/**Aqui disparo la funcion que mando por parametro  */
    },3000)
}

getUsuarioById(10,(usuario)=>{/**Aqui declaro el callback pero aqui no lo disparo lo disparo dentro de la funcion por donde lo envio */
    console.log(usuario.id);
});
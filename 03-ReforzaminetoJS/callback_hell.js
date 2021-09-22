/**Un callback hell son un conjuto de muchos callbacks 'anidados' donde se vuelve un codigo ilegible y dificil de 
 * entender
 */

const empleados = [
    {
        id:1,
        nombre:"camilo"
    },

    {
        id:2,
        nombre:"pavo"
    },
    {
        id:3,
        nombre:"peggy"
    }
]

const salarios=[
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:1500
    }

] 

const getEmpleado= (id,callback) =>{
    const empleado = empleados.find((empleado) => empleado.id === id)?.nombre;

    if(empleado){
        return callback(null,empleado);
    }else{
        return callback( `El empleado con el id ${id} no existe`);
    }

   
}

const getSalario = (id,callback)=>{

    const salario = salarios.find((salario)=> salario.id === id)?.salario;
    if(salario){

        return callback(null,salario);

    }else{
        return callback(`El empleado con id ${id} no existe`);
    }
}

getEmpleado(1,(error,empleado)=>{
    if(error){
        return console.log(error);
    }
    getSalario(1,(error,salario)=>{
        if(error){
            return console.log(error);
        }
        console.log("Salario Existe");
        return console.log(`El empleado ${empleado} tiene un sueldo de ${salario}`);
    });
});



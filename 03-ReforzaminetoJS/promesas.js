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


const getEmpleado = (id)=>{

    return new Promise((resolve,reject)=>{
        const empleado  = empleados.find((empleado)=> empleado.id === id)?.nombre;

        if(empleado){
            resolve(empleado);
        }else{
            reject(`Mi pez el empleado con el id ${id} no existe`);
        }

    })
}

const getSalario=(id) =>{

    return new Promise((resolve,reject)=>{

        const salario = salarios.find((salario) => salario.id === id)?.salario;

        if(salario){
            resolve(salario)
        }else{
            reject(`Mi pez el salario con el id ${id} no existe`);
        }
    });
} 


// getEmpleado(1).then((empleado)=>{console.log(empleado);}).catch((reject)=>{console.log(reject);});

// getSalario(1).then((salario)=>{ console.log(salario);}).catch((reject)=>{console.log(reject);})
let nombre;
getEmpleado(1).then((empleado)=>{
    nombre = empleado;
    return getSalario(1);
}).then((salario)=>{
    console.log(`El empleado ${nombre} tiene un salario de ${salario}`);
}).catch((reject)=>{console.log(reject);})

console.log("Inicion del programa");

console.time("time");
setTimeout(()=>{
    console.log("primer timeout");
    console.timeEnd("time");
},3000);

setTimeout(()=>{
    console.log("segundo timeout");
},0);

setTimeout(()=>{
    console.log("tercer timeout");
},0);

console.log("Fin del programa");

var nombre = 'Wolverine'/**El 'var' me genera una variable global donde puedo cambiar su contenido en cualquier momento 
volviendola a declarar con 'var' */
if(true){
    var nombre = "batman";
}
console.log(nombre);

let nombre2 = 'mails morales'/**Con 'let' puedo declarar una variable en un bloque y redeclararla en otro bloque de codigo
y no se va a cambiar el contenido sino que js entiende que son variables distintas en diferente boloque de codigo 
y no se va a reescribir una de la otra */

if(true){
    let nombre2 = "petter parker"/**Pero si yo le quito el 'let' en esta declaracion js va a cojer como una variable normal y va a reescribir
    el contenido de la variable  */
    console.log(nombre2);
}
console.log(nombre2);

const nombre3 = "pantera nigga";/**Con el 'const' como el nombre de la declaracion lo dice es una constante y no en todos los casos puedo cambiar el valor
de la variable sino que el valor que yo le de desde un principio va a ser ese valor para el resto del codigo pero esto en algunos casos
en otros si puedo cambiar el valor de su contenido pero son en casos muy especificos */

if(true){
    nombre3 = "badbunny";
}
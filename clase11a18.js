var x = 4, y = '4'

//= -> asignacipon
//== -> comparación
//  Toma ambos valores, los lleva al mismo tipo de dato
//  y luego compara
// x == y -> true

//=== -> mismo valor y mismo tipo de variable
//x === y -> false

//Siempre conviene usar el triple igual
//== prohibido a veces

// var sacha = {
//     nombre: 'sacha'
// }

var otraPersona = {
    nombre:'sacha'
}

//CTRL + L -> Limpiar terminal

//Comparar objetos -> JS compara las referencias a 
//   las variables
//Siempre da falso a menjos que ambos sean la misma referencia
//OBJETO LITERAL -> creado en el lugar

/**CLase 12 - Condicionales */
//`${} dadsa`
//TEMPLATE STRING -> permite interpolar varriables

/**if(booleano) {
 *      ....
 * } else {
 *       ....
 * } */

 //Función imprimir si es mayor de edad
 //Sacha es mayor de edad

 var sacha = {
    nombre: 'sacha',
    edad: 27,
    peso: 75
}

var pepito = {
    nombre: 'pepito',
    edad: 16,
    peso: 60
}

 function esMayorDeEdad({nombre, edad}) {
     if(edad >= 18) {
        console.log(`${nombre} es mayor de edad`)
     }     
     else console.log(`${nombre} no es mayor de edad`)
 }

//MAGIC NUMBER -> número que se entiende al 
//leer el contexto
//Valores constantes -> EN MAYÚSCULAS, como variables estáticas en java
const MAYORIA_DE_EDAD = 18

/**Clase 14 - Arrow Funtions */

//Asignar funciones a una variable
/* const esMayor = function(persona) { //puede ser var, pero es mejor const
    return persona.edad >= MAYORIA_DE_EDAD
}  */// -> FUNCIÓN ANÓNIMA

const esMayor = (persona) => { //puede ser var, pero es mejor const
    return persona.edad >= MAYORIA_DE_EDAD
} // -> ARROW FUNCTION
//** si solo hay un parámetro, se puede escribir sin paréntesis
//const esMayor = persona => 
//** si la función solo RETORNA se puede obviar el return
//const esMayor = persona => persona.edad > MAYORIA_DE_EDAD
//** se puede descomponer. Agregar parénttesis
//const esMayor =  ({ edad }) => edad > MAYORIA_DE_EDAD

const esMayorFancy = ({ edad }) => edad >= MAYORIA_DE_EDAD

function permitirAcceso(persona) {
    if(!esMayorFancy(persona)) 
        console.log('ACCESO DENEGADOOO!!!')
}

//Es menor de edad -> retorna la negación de esMayor
const esMenorDeEdad = persona => !esMayorFancy(persona)

/**Clase 15 - Estructura repetitivas: for */

console.log(`peso de ${sacha.nombre} al comienzo del año: ${sacha.peso.toFixed(2)}`)
const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= 365; i++) {
    var random = Math.random()

    if(random < 0.25) 
        aumentarDePeso(sacha)
    else if (random < 0.5)
        adelgazar(sacha)
}

console.log(`peso de ${sacha.nombre} al final del año: ${sacha.peso.toFixed(2)}`)

/**CLase 16 - while */
//** debugger -> si escribo esto en el código,
//la ejecución se pausa al llegar a esta palabra

//Las Arrow functios se pueden escsribir sin parámetros
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3
var dias = 0

 while (sacha.peso > META) {
    //debugger
    //Para debuggear abrir en otra pestaña el programa,
    //con la consola abierta
    if(comeMucho()) {
        aumentarDePeso(sacha)
    }
    if(realizaDeporte()) {
        adelgazar(sacha)
    }
    dias += 1
} 

console.log(`Pasaron ${dias} hasta que ${sacha.nombre} logro su peso ideal`)

/**Clase 17 - do-while */


var contador = 0
const llueve = () => Math.random() < 0.25

do {
    contador++
} while(!llueve())

const frecuencia = cantidad => cantidad > 1 ? `${cantidad} veces` : `${cantidad} vez`

console.log(`Fui a ver si llovia ${frecuencia(contador)}`)

/**Clase 18 - Switch */
//Mostrar formulario emergente 
//var signo = prompt('¿Cuál es tu signo?')
console.log(`Tu signo es ${signo}`)

switch(signo) {
    case 'leo':
        //....
        break
    case 'sagitario':
        //....
        break;
    default: 
        //...
}

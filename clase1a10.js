//CTRL + R ->   Recargar página en chrome

/* Clase 1 - Variables */
console.log("Hola mundo")
var nombre = "mari"
console.log("hola " + nombre)



/*Clase 2 - string */
var nombreMayus = nombre.toUpperCase()
var apellido = "cervantes"
var apellidoMayus = apellido.toLowerCase()
var primerLetraAPellido = apellido.charAt(0)
// Length no es una función!!! Va sin paréntesis ()
var nombreLargo = nombre.length 
var nombreCompleto = nombre + ' ' + apellido

//Interpolación de texto`o variables`
//concatenación más moderna
//Dentro de las llaves se puede escribir código js
var nomC = `${nombre} ${apellido.toUpperCase()}`

//Substring -> Los extremos están incluidos
var str = nombre.substr(1,2)

//TAREA: mostrarle al usuario la última letra de su nombre
console.log(nombre.charAt(nombre.length - 1))

/*Case 3 - Números */
var edad = 24
edad += 1 // edad = edad + 1
var peso = 59
peso -= 1
edad -= 1
//OJO -> La manera de almacenar decimales no es precisa
//Usa cierta cant. de bytes para almacenar 
var precioDeVino = 200.3 
//Redondeo
var total = Math.round(precioDeVino * 100 * 3) / 100
//3 decimales fijos. Devuelve string
var totalStr = total.toFixed(3)
//Pasaje a número de string
var total2 = parseFloat(totalStr)

/**Clase 4 - Funciones */
function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

//Para llamar la función hay que escribir su nombre con parámetros entre paréntesis
imprimirEdad(nombre, edad)
//Si no pasamos parámetros, igual anda. El dato es undefined

/**Clase 7 - El alcance de las funciones */
//Variables globales -> se asignan al objeto global
//Puede ser el servidor, si es el browser, el objeto global es la ventana
//window.variableGlobal
//Acceder a var nombre (global)
//window.nombre

/**Clase 8 - Objetos */
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
    /**clave: valor */
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}


// function imprimirNombreMayus(persona) {
//     var nombre = persona.nombre.toUpperCase()
//     console.log(nombre)
// }

//{ nombre } -> significa que accedemos al atributo
// nombre de un objeto
//Es obligatorio mandar siempre el objeto
function imprimirNombreMayus({ nombre }) {
    console.log(nombre.toUpperCase())
}



imprimirNombreMayus(sacha)
imprimirNombreMayus(dario)
//Se crea el objeto
imprimirNombreMayus({ nombre: 'pepito'})

/**CLase 9 - Desestructurar objetos */
//Son equivalentes
//var nombre = persona.nombre
//var {nombre} = persona

//imprimir nombre y edad que imprima hola, me llamo sacha y tengo 28 años

function imprimirNobreYedad({nombre, edad}) {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNobreYedad(sacha)
imprimirNobreYedad(dario)
/**Clase 10 - Parámetros como referencia o como valor */

// Efecto de lado
//JS se comporta distinto con los objetos
//Una función que recibe objetos siempre tiene
//efecto de lado
//Los objetos se pasan POR REFERENCIA
function cumpleanyos(p) {
    p.edad += 1
}

//DESGLOZAR OBJETO -> ...objeto
//Se pueden modificar los atributos

/**Retorna un nuevo objeto con eddad + 1
 * return {
 *          ...persona
 *          edad: persona.edad + 1
 * } */


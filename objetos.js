/**Clase 19 - Introducción a arrays */
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 4

}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 1
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 2
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 3
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 2
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 2
}

//ARRAY -> Pueden ser distontos tipos de datos juntos
var personas = [sacha, alan, martin, vicky, dario, paula]
/* 
personas[0].altura
es lo mismo que
personas[0]['altura'] 
*/

//personas.length -> no es función
for(var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.table(`${persona.nombre} mide ${persona.altura}`)
}

/**Clase 20 -Filtrar array */
const ALTURA_ALTA = 1.8
const esAlta = ( {altura} ) => altura > ALTURA_ALTA
var personasAltas = personas.filter(esAlta)
var personasAltas2 = personas.filter(function (persona) { return persona.altura > 1.8} )
//Filter no tiene efecto de lado. Retorna una lista nueva

//TAREA -> filtrar personas bajas
//const esBaja = persona => !esAlta(persona)
var personasBajas = personas.filter(persona => !esAlta(persona))

/**Clase 21 - Map */
//SIN efecto de lado. Map devuelve un nuevo array

const pasarAlturaCM = persona => ({
        ...persona,
        altura: persona.altura*100 //Crea un nuevo objeto
    })

/* const pasarAlturaCM = persona => {
    return {
        ...persona,
        altura: persona.altura*100 //Crea un nuevo objeto
    }
}
 */
var personasCMs = personas.map(pasarAlturaCM)

/**Clase 22 -  */
//Console.table(...) -> imprime una lista como tabla
//reducir un array a un solo valor

//reducer -> función 
//const reducer: (acumulador: number, persona: any) => number
//0 -> valor inicial del acumilador
const reducer = (acum, { cantidadDeLibros }) => 
    acum + cantidadDeLibros

var totalDelibros = personas.reduce(reducer, 0)

console.log(`Hay ${totalDelibros} libros en total`)


/**OBJETOS */
/**Clase 23 - Objetos en javascript */
/**NO HAY CLASES, HAY PROTOTIPOS
 * No hay herencia
 * 
 * definición de prototipo
 * function Persona() {} -> es como un constructor. Se ejecuta cuando se crea el objeto
 * -> crear objetos dado un prototipo
 * -> implícitamente retorna un objeto de la clase
 * var sacha = new Persona()
 * 
 * this -> referencia al objeto que se acaba de crear
 *  -> return this está implícito en el prototipo
 */

function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
} //-> Acá modificamos el prototipo


//Todas las funciones deben estar juntas, antes de hacer new
//Sino las funciones no son accesibles hacia todos los objetos

var sachaClase = new Persona('Sacha', 'Lifszyc', 27, 1.87)
var arturo = new Persona('Arturo', 'Gonzalez', 20, 1.70)

//Tarea -> agregar altura y la función soyAlto < 1.8


/**Clase  24 - Modificando un prototipo*/
/**
 * un prototipo es un objeto más de JS
 * Es importante que las funciones del prototipo estén todas
 * juntas
 * Si las funciones se crean despés de crear el objeto, se 
 * produce un error
 * Diferencias con un sistema de herencias
 */

//OJO -> ARROW FUNCTIOS
/**
 * Persona.prototype.soyAlto = () => this.soyAlto
 */

/**Clase 25 - ¿Quién es this? */

//This en arrow function -> es WINDOW!
//THIS.ALTURA = window.altura -> Es undefined y siempre da falso

//THIS -> en el espacio global es window
//THIS === window

/**Case 25 - La verdad oculta sobre las clases en javascript */

/**
 * No existe la herencia entre clases, no hay clases en javascript
 * Existe la herencia prototipal
 * Un prototipo hijo si no entiende un mensaje, js lo busca en el padre
 * 
 * Prototype -> es un atributo que indica los métodos, el constructor,
 *   y el prototipo del que hereda (object es el último)
 * prototipo.prototype en consola lo muestra
*/

//Forma de heredar hasta hace algunos años
/**
 * Todas las funciones tienen el atributo prototype
 */
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
} //Mecanismo de herencia

//** DESARROLLADOR */
function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona) //-> Acá hereda

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`)
}



/**Clase 26 - Clases en javascript */

//TODO ES UN PROTOTIPO, aunque usemos la palabra class
/**
 * Veremos...
 * estándar de JS ECMA script 2015
 * heredaDe ya no es necesario
 */

class Persona2 {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        return this.altura > 1.8
    }
}


class desarrollador2 extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
        //No se puede acceder a this sin llamar a super()
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`)     
    }
}
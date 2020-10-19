/**Clase 19 - Introducción a arrays */
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

//ARRAY -> Pueden ser distontos tipos de datos juntos
var personas = [sacha, alan, martin, vicky, dario]
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
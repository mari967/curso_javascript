//CTRL + SHIFT + R -> Actualizar y borrar la cache

/**Clase 35 - Manejo de errores con callbacks */
//Nos queddamos sin internet...

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const opts = { crossDomain: true }


function pedirPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, callback)
    //En caso de falla se llama esta callback
    .fail( () => {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })
}


//Super callback para get
pedirPersonaje(1, function (personaje) {
    console.log(`Hola, soy ${personaje.name}`)

    pedirPersonaje(2, function(personaje) {
        console.log(`Hola, soy ${personaje.name}`)

        pedirPersonaje(3, function(personaje) {
            console.log(`Hola, soy ${personaje.name}`)

            pedirPersonaje(4, function(personaje) {
                console.log(`Hola, soy ${personaje.name}`)

                pedirPersonaje(5, function(personaje) {
                    console.log(`Hola, soy ${personaje.name}`)

                    pedirPersonaje(6, function(personaje) {
                        console.log(`Hola, soy ${personaje.name}`)

                        pedirPersonaje(7, function(personaje) {
                        })
                    })
                })
            })
        })
    })
})

/**Clase 36 Promesas */
/**
 * Para resolver el callback hell
 * son objetos
 * Valores que aún no conocemos. Prometemos que habrá un valor cuando 
 * finalice una tarea asíncrona
 * Lo tiene que soportar el naveagdor
 * Antes se usabanbibliotecas externas
 * polifil -> detecta si el navegador tiene soporte para promesas.
 *          -> sino crea las clases de las promesas
 * Funcionan de manera asíncrona, pero también es posible que sean síncronas
 */

 /**
  * Estados de la promesas
  * ***********************
  * ***
  * Pending
  * ***
  * al inicializar la promesa
  * ***
  * Fulfilled
  * ***
  * completado satisfactoriamente
  * .then(val => ...)
  * Para obtener el valor devuelto
  * val es el valor esperado
  * ***
  * Rejected 
  * ***
  * ocurrió un error
  * .catch(err => ...)
  * err es el valor de error retorndo
  */

/**
 * Creación
 * *********
 * new Promise(function (resolve, reject) {...} )
 * resolve y reject son funciones que se llaman según el estado final
 * 
 * new Promise( function (resolve, reject){..llamado asíncrono..})
 *          .then(valor => {...})
 *          .catch(err => {...}}
 * 
 * Luego de fulfilled podemos encadenar otra promesa
 */


 function pedirPersonajePromesa(id) {
     return new Promise((resolve, reject) => {
    //Lo que quiero hacer
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, data => resolve(data))
                .fail(() => reject(id))
     })
 }

 //Función que recibe un parámetro, el retornado en caso de éxito
 function onError(id) {
     console.log(`ocurrió un error al obtener el personaje ${id}`)
 }

 //Función que recibe el parámetro retornado en caso de error
 


 //Uso la promesa
 pedirPersonajePromesa(1)
    .then(personaje => {console.log(`El personaje 1 es ${personaje.name}`)})
    .catch(onError) //-> Es la referencia ala función

/**Clase 37 - Promesas encadenadas */

//El catch es el mismo para todas
//Los request son en serie, no en paralelo

//Más leguble que los callbacks encadenados

pedirPersonajePromesa(10)
.then(personaje => {
    console.log(`El personaje 10 es ${personaje.name}`)
    return pedirPersonajePromesa(9)
})
.then(personaje => {
    console.log(`El personaje 9 es ${personaje.name}`)
    return pedirPersonajePromesa(8)
})
.then(personaje => {
    console.log(`El personaje 8 es ${personaje.name}`)
    return pedirPersonajePromesa(7)
})
.then(personaje => {
    console.log(`El personaje 7 es ${personaje.name}`)
    return pedirPersonajePromesa(6)
})
.then(personaje => {
    console.log(`El personaje 6 es ${personaje.name}`)
})
.catch(onError) //-> Es la referencia ala función

//En la consola se muestran en cualquier orden porque
//La api evía la respuesta usando el protocolo ip
// y este es no orientado a la cominicación y no garantiza
//orden


/** Clase 38 - Múltiples request en paralelo*/

//Las respuestas se devuelven en ORDEN
//La resolucipon de tareas es en PARALELO


var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map( id => pedirPersonajePromesa(id))
Promise
        .all(promesas)
        .then(personajes => console.log(personajes))
        .catch(onError) //-> Develve una lista de promesas

/**Clase 39 - Async-await: Lo últmo en asincronismo */
//--------------
//Las respuestas se devuelven en ORDEN
//La resolucipon de tareas es en PARALELO

//No todos los navegadores lo soportan

/**
 * Async-await es la manera más simple y clara de realizar tareas 
 * asíncronas
 * Await detiene la ejecución del programa hasta que 
 * todas las promesas sean resueltas. 
 */


//Cuando esas promesas se resuelvan, se guardan en la var personaje
//O se resuleve todo o no se guarda

async function obtenerPersonajesAwait() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => pedirPersonajePromesa(id))
  
  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch(id) {
      onError(id)
  }
    //AWAIT detiene la ejecución de la función
    //Hasta que todas las promesas se cumplan. Luego se guardan
}   //Agregar ASYNC para poder usar await, antes de function

obtenerPersonajesAwait()
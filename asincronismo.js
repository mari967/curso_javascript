/**Clase 28 - Funciones como parámetro*/

/**
 * Siempre false
 * null, 0, '', undefined, parámetro omitido, false, NaN
 * siempre verdadero
 * [], objeto (aunque esté vacío ({})), string
 */


class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
//******************** */


    saludar(fn) {
        /* var nombre = this.nombre
        var apellido = this.apellido
 */
        var {nombre, apellido } = this


        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn) {
            fn(nombre, apellido) //LLamo a la función
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
        //No se puede acceder a this sin llamar a super()
    }

    saludar(fn) {
        var {nombre, apellido } = this

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`)     
        if(fn) {
            fn(nombre, apellido, true) //LLamo a la función
        }
    }
}


//------------- Funciones
function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev) {
        console.log('Ah mirá, no sabía que eras desarrolladora')
    }
}


var arturo = new Desarrollador('arturo', 'martinez')
arturo.saludar(responderSaludo)

/**Clase 29 - Cómo funciona el asíncronismo en JS */
//No bloquear el EVENT LOOP -> <3 de JS
//lENGUAJE ASÍNCRONO Y CONCURRENTE
//WEB api -> implementado en el navegador
//Las callback no se ejecutan inmediatamente, se agregan a una
//cola 
//JS solo puede ejecutar UNA tarea a la vez -> no es multitarea
//Pero, puede delegar la ejecución de tareas a otros proceso

/**
 * Call stack
 * *********
 * -> llmadas a funciones según el orden de ejecución del programa
 */

//callback -> función que se ejecutará cuando regrese la respuesta del servidor
// --> Cuando llegue la respuesta, la función a ejecutar se agregará a la cola de tareas


/** Cola de tareas (callback queue) **
 * -> Ahí van peticiones a servidores, interacciones visuales, tareas que se realizan
 *    cada cierto tiempo 
 * -> Solo cuando la pila de ejecución está vacía, se ejecutarán
 *  -> Bloquear el event loop
*/


/**
 * Ciclo de eventos -> Cada tarea va de una cola a otra
 * Call stack, web apis, callback queue
 * 
 */


 /**Clase 30 - Cómo funciona el tiempo en JS */
 /**
  * Operaciones asíncronas
  * ****************
  * Tareas a tiempo futuro
  * -> interacciones con el dom, modif título, botón, alert, cambio en el css
  * -> pedidos de datos en apis externas, jquery, vanilla js
  */

  //setTimeout -> recibe función, no función ejecutada
//Ejecuta en orden
  console.log('a')
  console.log('b')
  console.log('c')

  console.log('---------------')
  //b va a la cola de tareas aunque el tiempo sea 0
  //se imprime a c b
  console.log('a')
  setTimeout(() => console.log('b'), 0)
  console.log('c')

  
   //d se manda a la cola de tareas, se ejecuta el for y finalmente se imprime d
   //se imprime -> termié el for  d
 /*  setTimeout(( () => console.log('d')), 2000) //Se envía a la callback queue/cola de tareas
  for (var i = 0; i <= 100000000; i++) {
      if(i == 100000000)
        console.log('terminé el for')
  } */

  /**Clase 32 - Callbacks */

  //Usamos biblioteca externa JQuery -> para hacer request y obtener datos de APIS
  //CDN -> contend delivery network
  //    -> Servidor que sirve el archivo desde la locación más cercana. El
  // servidor dice cupal es la ip más cercana a nosotros

/**
 * Obtener JQuery
 * **************
 * ir a jquery.com
 * DOWNLOAD
 * using jquery with CDN -> permite encontrar la versión desde un CDN
 * https://code.jquery.com/
 * click en la versión minificada
 * copiar el código y pegarlo en el html, antes del archivo JS
 * probar con $ (en consola)
 */

 /**
  * API swapi
  * **********
  * people/:id -> nos da el personaje (json)
  */

  /**
   * Hacer request
   * ***************
   * debemos saber la url de la api
   * la parte de la url de las personas
   * llamar a $.get(URLdelDato, opciones, callback)
   * ***
   * opciones
   * ***
   * crossdomain: true -> indicacion de que el request se hace a otra página
   * 
   * ***
   * callback
   * ***
   * $get va a llamar a la función cuando se termine de ejecutar,
   *  con los datos de respuesta
   * -> Pasarle los datos que devuelva
   * ver pará metros de respuesta en la documentación
   * ajax -> jquery.get()
   * succes(callback) parámetros -> data, stringg estado de respuesta, reques de JS
   ******
   *   Pasarle a la callback DATA
   ******
   */

   const API_URL = 'https://swapi.dev/api/'
   const PEOPLE_URL = 'people/:id/'

   const luke_url = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
   const opts = { crossDomain: true }

   //luke es la data que retorna $.get()

   const onPeopleResponse = function(persona) {
          console.log(`Hola, yo soy ${persona.name}`)
}

   //$.get(luke_url, opts, onPeopleResponse)

//arguments -> variable que tienen todas las funciones con 
//      un array con los parámetros que recube la función


/**Clase 33 - Haciendo múltiples request */

//NUNCA SABEMOS CUÁNDO LLEGARÁN LOS REQUEST NI EN QUÉ ORDEN
//El orden depende del servidor

function pedirPersonaje1(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}
/* 
for(var i = 1; i <= 3; i++) {
    pedirPersonaje1(i)
}
 */

/**Clase 34 - Manejando el orden y el asincrinismo en JS */
/**
 * Al garantizar el orden, se pierde el paralelismo
 * El siguiente pedido es la callback del anterior
 * Los request se hacen en serie y no en paralelo
 * Esto es un CallBack Hell
 */



function pedirPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)

    if(callback) {
        callback()
    }
}

console.log('CALLBACK HELLLL')
pedirPersonaje(1, function() {
    pedirPersonaje(2, function() {
        pedirPersonaje(3, function() {
            pedirPersonaje(4, function() {
                pedirPersonaje(5, function() {
                    pedirPersonaje(6)
                })
            })
        })
    })
})
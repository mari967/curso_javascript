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
/*   console.log('a')
  setTimeout(() => console.log('b'), 0)
  console.log('c')
 */
  
  setTimeout(( () => console.log('d')), 2000) //Se envía a la callback queue/cola de tareas
  for (var i = 0; i <= 1000000000; i++) {
      if(i == 1000000000)
        console.log('terminé el for')
  }
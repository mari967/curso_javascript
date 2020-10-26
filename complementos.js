/**lase 47 - iferencias entre var, let y const */

/**
 * CONST -> El alcance está limitado al área limitada por las llaves y las interiores
 *       -> No permite cambiar su valor
 * LET -> Igual que const, pero permite reasignar la variable
 * VAR -> El alcance de la variable será global (conocida en todo el código)
 * 
 * De ser posible, declara siempre con CONST. Si se requiere reasignar, usar LET
 * 
 */



/**Clase 48 - Fechas */

/**
 * Las fechas se pueden restar
 * El resultado es en milisegundos
 * 
 * fecha actual -> new Date(año, mes, día) mes 0-11
 */

 function diasEntreFechas(fecha1, fecha2) {
        const unDia = 1000 * 60 * 60 * 24
        const diferenciaFechas = Math.abs(fecha1 - fecha2)

        return Math.floor(diferenciaFechas / unDia)
 }

 const hoy = new Date()
 const nacimiento = new Date(1996, 7, 19)
 
 console.log(diasEntreFechas(hoy, nacimiento))


 /**Clase 49 - Recursividad */

 /**Clase 50 - memoriación */
 //Guardar resultados en cache - Ahorramos procesamiento
 //this.cache

 function factorial(n) {
    //MEMORIZACIÓN
    if(!this.cache) {
        debugger
        this.cache = {}
    }
    if(this.cache[n])
        return this.cache[n]

     if(n === 1)
        return 1

    this.cache[n] = n * factorial(n - 1)
    debugger
    return this.cache[n]
 }


 /**Clase 51 - Closures */
 /**
  * Funciones que recuerdan el estado de las cosas
  * cuando fueron invocadas
  * 
  * Las funciones retornadas por funciones "recuerdan" el estado dentro de 
  * la función que las retornó
  */


  function crearSaludo(finalDeFrase) {
      return function(nombre) {
          console.log(`Hola ${nombre} ${finalDeFrase}`)
      }
  }

  const saludoArgentino = crearSaludo('che')
  const saludoMexicano = crearSaludo('wey')
  const saludoColombiano = crearSaludo('parce')

  saludoArgentino('sacha')
  saludoMexicano('sacha')
  saludoColombiano('sacha')

  /**Clase 52 - Estructura de datos inmutables */

  /**
   * Evitar efectos de lado
   */

   const sacha = {
       nombre: 'Sacha',
       apellido: 'Lifszyc',
       edad: 28
   }

   //Tiene efecto de lado
   //const cumpleanios = persona = persona.edad++

   const cumpleaniosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
   })

   /**Clase 53 - Cambiando el contexto al llamar una función */

   /**
    * 
    * THIS es quien ejecuta la función
    * bind(parámetro) -> No tiene efecto de lado
    * 
    */
   

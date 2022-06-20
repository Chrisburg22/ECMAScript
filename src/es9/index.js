/**
 * Spread Operator
 * LA primer caracteristica es el operador de 
 * reposo el cual puedeextraer las propiedades de un objeto que aun no se a construito
 * Trabajaremos con una constante de un objeto que vamos a crear al cual le vamos a poder los eelemntos
 * Despues utilizaremos el operador de reposo paraseparar los elementos, 
 * */

const obj = {
    name: 'Christian',
    age: 22,
    country: 'Mexico',
}

let {name, ...all } = obj;//nos permite extraer el elemento mencionado del objeto y lo demas lo encapsla por medio de all
console.log(name,all);//Se imprime el elemento extraido y lo demas lo imprime de manera encapsulada

const obj2 = {
    name: 'Christian',
    age: 22,
    country: 'Mexici',
}

let {country, ... all} = obj2;
console.log(all);//Imprime solo los objetos encapsulados

/**
 * Propagation Porperties
 * Utlizar la pripieddes de propagacion para poder unir cuantos elementos nosotros queramos de objetos a un
 * nuevo objeto 
 */

const obj3 = {
    name: 'Christian',
    age: 22,
}

const obj4 ={
    ...obj3,//Asi se agregar elementos de otro objeto
    country: 'MX'
}

console.log(obj4);

/**
 * Promise Finally
 * Nosotros podremos saber cuando se ha terminado el llamado y poder ejecutar alguna funcion o logica de codigo 
 * segun sea el caso
 * Para esto crearemos una funcion promise basica
 * Despues de esto vaa ser llamarla y ver como se desencadena la logica segun sea el caso, cuando se termine la promesa
 * Sera cuando podremos utilizar funally y hacer algo al final del resultado ya vea then o catch
 */

const helloWorld= () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout ( ( ) => resolve('Hello World'), 3000 )
        : reject(new Error('Test Error'))
    })
}

helloWorld( )
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally( () => console.log('Finalizado'))

    /**
     * Regex
     * Esto nos sirve pra crear estructuras de datos como en años meses o dias dependiendo lo que queramos hacer 
     * De esta forma voya a poder acceder a cada uno de los elemenetos de rejgex y esta es una caracteriztica que nos
     * para a permitir trabajar sobre los regex en un grupo
     */

    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ 
    const match = regexData.exec('2018-04-20');
    const year = match[1];
    const month = match[2];
    const day = match[3];
    console.log(year, month, day);

    
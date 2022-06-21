/**
 * CARACTERIZTICAS AÑADIDAS EN LA VERSION 8 DE ECMA EN 2017
 */

/**
 * OBJECT.entries
 * NOS PERMITE DEVOLVER LA CLAVE Y LOS VALORES DE UNA MATRIZ
 * PARA ESTO DEFINIREMOS UNA CONSTANTE QUE NOS PERMITIRA TENER UN OBJETO CON VARIOS VALORES
 * DESPUES TRANSFORMAREMOS EL OBJETO EN UNA MATRIZ
 */

const data = {
    frontend: 'Juan',
    backend: 'Raul',
    designer: 'Ana',
}

const entries = Object.entries(data);//Crea una matriz apartir de los elementos 
console.log(entries);
console.log(entries.length);//Saber cuantos elementos hay y podr hacer una validacion

/**
 * OBJECT..values
 * NOS SIRVE PARA DEVOLVER LOS VALORES DE UN OBJETO A UN NUEVO ARREGLO
 * CREAMOS UN OBJETO CON ELEMENTOS ESTABLECIDOS
 * A PARTIR DE HAY CREAMOS UNA NUEVA CONSTANTE EN DONDE ULIZAREMOS EL METODO VALUES 
 * EL OBJETO SE PODRA TRANFORMAR  EN UN NUEVO ARRAY SIN AFECTAR EL OBJETO
 */

const data2 = {
    frontend: 'Juan',
    backend: 'Raul',
    designer: 'Ana',
}

const values = Object.values(data2);//Tranforma los valores de el objeto a un nuevo array
console.log(values);        //ESTO EN MUY BENIFICIOSO PARA HACER CONVERSIONES O PARA SABER CUANTOS ELEMENTOS TIENE UN OBJETO
console.log(values.length);

/**
 * PADDING
 * NOS VA AYUDAR A ANTEPONER O AGREGAR UNA CADENA VACIA O ELEMENTOS A ALGUN STRING
 * PARA ESTO NESECITAMOS UN STRING
 * DESPUES DE ESTO DESNTRO DE UN CONSOLE LOS MANDAMOS LLAMAR AL STRING CON EL METODO .padStart() o .padEnd()
 * AL .padSart()/.padEnd() SE LE PASAN DOS PARAMETROS
 * EL PRIMERO ES CUANTOS CARACTERES VAMOS A TENER EN EL STRING TOMANTO EN CUANTA LOS QUE YA TENEMOS
 * EL SEGUNDO SON LOS ELEMENTOS QUE AÑADIREMOS AL STRING
 */

const String = 'hello';//Creamos el String
console.log(String.padStart(7, 'hi'));//Le agregamos don elementos al princiopio del string
console.log(String.padEnd(12, '-----------'));//Le agregamos elementos al final del string
console.log('Food'.padEnd (12, '-------'));//Creamos un nuevo string y  le agregamos mas caracteres

/**
 *
 */
/**
 * Async Await 
 * Primero crearemos una funcion, dentro de ella crearemos una nueva promesa para posteriormente poder invocarla
 * Esto oara ver como nos ayudar realmente las promesas con el async awai
 */

const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)//Para utilizar el timeout nesecitamos crear un funcion anonima 
        : reject(new Error('Test Error'))                            // Despues de eso colocamos el resolve en la funcion y lo segundo son los milisegundos que tardara en imprimir
    })
}
//Con esto definido podremos trabajar con etas async y  await  que son estas funciones que le van a aindicar que se va a compportar
//de manera destinta de que nosa va a permiter ser mas claro a la Hora de escribir de este tipo de funciones y trabajar mejor cn
//El asincronistmo

//Creamos una funcion constante y de esta forma vamos a empezar  a identificarlas
//usaremos la Parabra Async antes de pasarle los argumentos y de esta manera sabes que va a ser una funcion que va a implementar async 
//y dentro en la logica el await para cada uno de los llamados que vayan a ser necessarios
const helloAsync = async () => {
    const hello =await helloWorld (); //De esta forma va a ser el llamado
    console.log(hello);
}

helloAsync();
/**
 * Optional Catch Binding
 * Otra propuesta es crear otra funcion con la cual vamos atrabajar con el try cactch lo cual va a probar sobre lo que va a 
 * ejecutar y en dado caso que este tenga un error o un valor que no coincide con logica que estamos haciendo obviamente 
 * va a caer en un catch y vamos a poder capturar este erro.
 * De esta manera poder manejar correctamente los errores
 * PRimero se encapsula dentro del try lo que se va a probar, en dado caso que la logica no se cumple se recupera el error
 * en el catch
 * De esta manera podremos manejar cuando tenemos algun error y poder saber que es lo que esta pasando en dado
 * caso de que este ocurriendo 
 */
const anotherAsync = async ()=> {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch(error){
        console.log(error);
    }
}
anotherAsync ();


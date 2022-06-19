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
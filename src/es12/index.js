/**
 * ReplaceAll
 * Nos va a permitir buscar una palabra en especifico en un string y vamos a poder cambiarla todas las veces que aparezca
 */

const string = "JavaScript es maravilloso con JavaScript puedo crear el futuro de la web";
const replecedString = string.replace("JavaScript", "Python");
console.log(replecedString);

const replecedString2 = string.replaceAll("JavaScript", "Python");
console.log(replecedString2);

/**
 * Metodos privados 
 * Los cuales seran utilizados dentro de las clases con esto vamos a poder añadir un prefijo que nos va a permitir decir este metodo es privado y no podemos
 * acceder a el y esto lo vamos a hacer con un signo de gato antes de nombre del metodo
 * vamos a poder tener get y 
 */

class Message {
    #show(val){
        console.log(val);
    };
    get #add(val){
        ...
    }
}

//Hacemos la instancia de la Clase y llamamos el metodo
const message = new Message();
message.show('hola');

/**
 * PromiseAny
 * Es un objeto global de p´romise cuyo argumentos va a serla forma de un array de promesas que vamos nosotros a pasarle gestionando 
 * y capturando la respuesta de la primera que sea resuelta de forma satisfactoria
 */

const promise = new Promise ((resolve, reject) => reject("1"));
const promiseA = new Promise ((resolve, reject) => resolve("2"));//Valor retornado 
const promiseB = new Promise ((resolve, reject) => resolve("3"));

Promise.any([promise, promiseA, promiseB])///Retorna el primero que resuelva
    .then(response => console.log(response));

/**
 * un objeto WeakRef le permite mantener una referencia debil a otro objeto sin evitar que este objeto sea pasado o recogido por el garbash colector
 * Lo que podremos hacer es esta referencia de forma debil a un objeto 
 */

class anyClass {
    constructor(element){//Constructor con un elemento
        this.ref = new WeakRef (element) //Aqui hacemos una referencia con el nuevo metodo que vamos a obtener. Referencia debil para este recurso
    }
    { ... }//Aqui continuariamos con la logica de nuestra progamacion . Podemos utilizar este llamado para evitar que el objeto sea recogido 
}          // por el manejador de la basura que lo que hace es liberar elementos de la memoria asi que con esto garantizamos que no sea recogido


/**
 * Esto es para trabajr con elementos de expreciones y operadores
 * 
 */
//Asignación AND lógico
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);// isTrue && (isTrue = isFalse)
//Asignación OR Lógico
let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);// isTrue || (isTrue = isFalse)
//Asignacion de anulacion Lógico
let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);// isTrue ?? (isTrue = isFalse)
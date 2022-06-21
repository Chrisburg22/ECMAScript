/**
 * Aqui se trabaja la logica de la pagina
 * Dynamic Import
 * Permita llamar nuestro codigo cuando lo necesitemos
 * EL archivo file no se cargara de manera automatica como solia pasar a la hora de impiortar
 * Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande
 * 
 */

const button = document.getElementById("btn"); //Con esto el boton ya esta escuchando o viendo que es lo pasara ahi

button.addEventListener("click", async function () { //addEvenListener nos ayuda a permitir escuchar algun cambio o accion que ocurra en el botton
    const module = await import("./file.js");
    module.hello();
});

/**
 * Bigint 
 * Permite trabajar con numeros mayores a 2^23
 * Añadiendo una "n" al final activas el big int en el valor
 * con el metodo Bigint activas el valor
 */

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

/**
 * Promise AllSettled
 * Nos ayuda a hacer algo despues de que todas las promesas que tenemos se allan cumplido ya sean resolve o reject
 */
 
const promise1 = new Promise((resolve, reject) => reject("reject")); 
const promise2 = new Promise((resolve, reject) => resolve("resolve")); 
const promise3 = new Promise((resolve, reject) => resolve("resolve")); 

Promise.allSettled([promise1, promise2, promise3])//Adentro van las promesas a las cuales vamos a esperar
    .then(response => console.log(response));

/**
 * Global This
 */
console.log(window);
console.log(globalThis);

/**
 * Nuevo operador: NULL operator
 * Se pregunta si es null si lo es imprime default string
 */

const foo = null ?? 'default string';
console.log(foo);

const foo2 = 'not null' ?? 'defaul string';
console.log(foo2);

/**
 * Opcional Chaning
 * Nos ayuda a poder identificar si algun objeto tiene o no elementos definidos, esto sin detener la aplicacion 
 */

const user = { };
console.log(user?.profile?.email);//Le estamos marcando hasta donde va a leer 

if(user?.profile?.email){
    console.log('email')
} else {
    console.log('fail');
}

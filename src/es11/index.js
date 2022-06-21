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


/**
 * IMPORT Y EXPORT
 * ESTO ES ALGO MUY UTIL QUE NOS AYUDA PARA PODER SEPARAR LA LOGICA DE ALGUNA PETICION EN MODULOS
 * DE ESTA MANERA PODEMOS EXPORTAR UNA FUNCION PARA PREVIAMENTE PODER SER IMPORTADA
 */
const hello = () => {
    return 'Hello';
}
module.exports = hello; //ESTA ES LO FORMA EN LA QUE DECLARAMOS UNA EXPORTACION DE UN MODUL0 en sintaxis de node.js
/**
 * Metodo para Crear arreglos o matrices
 * Para esto creamos un arreglo con luna estructura la cual nos va permitir crear la matriz 
 * Ya con el arreglo costituido utilizaremos el array.flat el cual toma como argumanto la profuncidad de la matriz 
 * o en todo caso la cantidad de columnas que va tener 
 */

let array = [1,2,3, [1,2,3, [1,2,3] ] ];
console.log(array.flat(2));

/**
 * Flatmap me va a permitir mapear cada elemento despues pasarle una funcion y despues aplanarlo segun el resultado
 * De esta forma creamos una funcion para fletmap los cual trabajara cpn el arreglo en donde esta definido
 */

let array2= [1,2,3,4,5];
console.log(array2.flatMap( value => [value, value * 2])); //Esto imprime el valor y despues el valor que resulta de la funcion

/**
 * trimStart
 * nos va a permitir eliminar los espacion en blanco de un string
 */

let hello = '                  hello world';
console.log(hello);//Imprime los espacios en blanco del string
console.log(hello.trimStart());//Quita los espacios en blanco y imprime unicamente hello world

/**
 * trimEnd
 * Nos va a ayudar a eliminar los espacios en blanco de un string que esten al final
 */
let hello2 = 'Hello world                 ';
console.log(hello2);//Imrime el string con espacios en blanco   
console.log(hello2.trimEnd());//imprime solo el Hellow world sin espacios en blanco

/**
 * Try y Catch ouedes utilizarlos sin necesidad de especificarlo como catch(error) sino directamente usarlo en el scope del catch
 */
try{

} catch {
    error
}

/**
 * Object.fromEntries()
 * podemos convertir un arreglo de string en un objeto
 */
let entries = [["name", "Christian"], ["age", 22]];
console.log(Object.fromEntries(entries));

/**
 * Symbole.portotype.description
 * Permite regresar la descripcion opcional del Symbol
 */

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
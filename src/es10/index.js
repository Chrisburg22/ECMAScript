/**
 * MEtodo para Crear arreglos o matrices
 * Para esto creamos un arreglo con luna estructura la cual nos va permitir crear la matriz 
 * Ya con el arreglo costituido utilizaremos el array.flat el cual toma como argumanto la profuncidad de la matriz 
 * o en todo caso la cantidad de columnas que va tener 
 */

let array = [1,2,3, [1,2,3, [1,2,3] ] ];
console.log(array.flat(2));

/**
 * Flatmap me va a permitir mapear cada elemento despuesparale una funcion y despues aplenarlo segun el resultado
 * De esta forma creamos una funcion para fletmap los cual trabajara cpn el arreglo en donde esta definido
 */

let array2= [1,2,3,4,5];
console.log(array2.flatMap( value => [value, value * 2])); //Esto imprime el valo y despues el valor que resulta de la funcion

/**
 * 
 *    
 */
//Esta es la  forma convencional
function newFunction(name, age, country){            
    var name = "Chris" || name;
    var age ="32" || age;
    var country ="MX" || country;
    console.log(name, age, country);
}

//es6
function newFunction2(name = " ", age =22, country="Mexico"){
    console.log(name, age, country);
}
 
newFunction2();
newFunction2('Ricardo', '23', 'España');


//Forma convencional
let hello = "Hellow";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//Con es6
//LA ESTRUCTURA ES ` ${variables} ${variables}  ` 
let epicPhrase2 = `${hello} ${world}`;  
console.log(epicPhrase2);

//MULTILINEA
//forma convencional
let lorem = "La diciplina es lo que queda cuando la motivacion se acaba.\n" 
+ "El efecto conpuesto cambiara tu vida segun tus habitos diarios."
//es6
let lorem2 = `La diciplina es lo que queda cuando la motivacion se acaba.
El efecto conpuesto cambiara tu vida segun tus habitos diarios.`
//IMPRIMIR EN CONSOLA
console.log(lorem);
console.log(lorem2);

//DESECTRUCTURACION
//fonrma convencional 
let person = {
    'name': 'chris',
    'age': 22,
    'country': 'MX'
};
console.log(person.name, person.country);
//es6
let { name, country, age} = person;
//IMPRIMIR EN CONSOLA
console.log(name, country,age);


//SPREAD OPERATOR 
let team1 = ['Chris' 'Raul' 'Araceli'];
let team2 = ['Oswaldo' 'Santiago' 'Mariana'];

let education = ['David', ...team1, ...team2];
console.log(education);

/**
 * Este es un ejemplo de que si intentamos mandar a llamar a la variable que fue declarada con let se tiene que  hacer dentro del mismo block scope en el que fue declarada
 * En cambio con var podemos declararla dentro de un block scope y poder utilizarla fuera del scope en que fue declarado
 * 
 * */
{
let globalLet = "Global Let" ;
console.log(globalLet);
}
{
var globalVar = "Global Var";
}
console.log(globalVar);

const paises = ['México','Paris','Alemania'];
console.log(paises);
paises.push('Argentina');
console.log(paises);


/**
 * PARAMETROS EN OBJETOS
 * ESTOS SON ALGUNAS MANERAS DE CREAR UN OBJETO A PARTIR DE UNAS LET YA DECLARADAS
 */
let name3 ='Chris';
let age3 = 22;

//es5
obj = { name: name3, age: age3 } ;

console.log(obj);
//es6
obj2 = {name3, age3};
console.log(obj2);



/**
 * ARROW FUNCTIONS
 * ES UNA FORMA MAS COMODA DE UTILIZAR FUNCIONES ANONIMAS Y HACIENDO QUE NUESTRO CODIGO TENGA MENOS LINEAS
 */

const names = [
    {name: 'Christian', age: 22} ,
    {name: "Alejandro", age:28}
]
//FORMA BASICA PARA USAR UNA FUNTION
let listOfNames = names.map(function(item){
    console.log(item.name);
})
/**
 * ESTA ES LA OPCION UNA DE UNA ARROW FUNCTION
 * EN DONDE PRIMERO SE DEFINE EL PARAMETRO QUE EN ESTE CASO ES item Y SE DEFINA LO QUE RETORNALA LA FUNCION
 */
let listOfNames2 = names.map(item => console.log(item.name));
/**
 * ESTA ES LA OPCION DE DE ARROW FUNCTION
 * EN DONDE SE DEFINE YA LOSARGUMENTOS Y SE ABREN LS CORCHETES PARA APLICARLE ALGUNA LOGICA A LA FUNCION
*/
const listOfNames3 = (name, age) => {
    //Aqui se define que se hara en la funcion
}
/**
 * ESTA ES LA OPCION 3 DE ARROW FUNCTION
 * EN DONDE SOLAMENTE SE PASA UN ARGUMENTO Y DENTO DE LOS CORCHETES SE DEFINE LA LOGICA DE LA FUNCTION
 */
const listOfNames4 = age => {
    //aqui se define la logica en la funcion
}
const square = num => num * num;

/**
 * PROMISES
 * ESTO NOS SIRVE PARA HACER UNA TAREA SI DICHA PROMESA SE CUMPLE O NO
 */
 const helloPromise = () => {
     return new Promise((resolve, reject) => {
         if (true){
             resolve('Hey!')
         } else {
             reject('Ups!')
         }
     });
 }
  
 helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

   
 /**
* CLASES 
* ES UNA FORMA MAS CLARA DE SINTAXIS PARA MANEJAR OBJETOS Y TAMBIEN LA HERENCIA EN JAVASCRIPT 
* ESTO NOS SERVIRA PARA PODER TRABAJAR CPN LA PROGRAMACION ORIENTADA A OBJETOS
*/
class calculator {//Creando una nueva clase
    constructor(){ //Se definae un constructor
        this.valueA = 0;//variables asignadas al scope global
        this.valueB = 0;
     }
 sum (valueA, valueB) { //Metodo al cual se pasamos los dos elementos que vamos a utilizar 
        this.valueA = valueA;//Asignamos las variables previamente contruimos en la clase a los valores que resivimos
        this.valueB = valueB;
        return this.valueA + this.valueB;//Hacemos la suma y retornamos el resultado
        }
    }
const calc = new calculator(); //De esta manera creamos un nuevo objeto a partir de una clase
console.log(calc.sum(10, 5));//Se imprime en consola el metodo del objeto previamente creado y se pasamos dos argumentos

const hello = require('./module');//Esta es l a forma acctualizada de importar un modulo
console.log(hello());

/**
 * GENERETOR
 * CREAMOS UNA FUNCION ALGO ESPECIAL 
 */
function* helloWorld() {
    if(true){
        yield 'hello, ';//El valor yield nos permite retornar algo y guarda el estado de forma interna 
    }
    if(true){
        yield 'World';
    }
};

const generetorHello = helloWorld();//Generamos una constante para poder utilizar el generetor
console.log(generetorHello.next().value);//La forma en la que la llamamos es mostrando el valor que nos retorna 
console.log(generetorHello.next().value);//el valor y con el nextnos termite retornar el preimer valor y despues 
console.log(generetorHello.next().value);//poder retornar el siguiente valor ya que next sabe en donde se quedo cuando retorno el primer dato

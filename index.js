//aqui esta la alerta
//javascript distingue entre mayuscula y minuscula
//la consola del navegador indica el archivo y linea de error.
//para usar emojis se utiliza la tecla window + punto

//ECMAScript: determina como emplear el lenguaje Javascript, que permite a los fabricantes de software desarrollar las herramientas adecuadas para interpretarlo correctamente.
//Javascript vive en el navegador


//---------------Tipos de datos---------------------------------

/**
 string o cadenas de texto
 logicos true o false
 int enteros
 
 */


//---------------Tipos de variables-----------------------------

/*
las variables deben ser descriptivas, usar mayormente descripcion en 
ingles. Se utiliza el camelcase para definirlas, ej:
primerNombre
valorDeFruta

1.-var 
2.-let
3.-const
*/


//---------------Concatenación-----------------------------------

/*
las variables pueden ser concatenadas. Esto va más para variables que 
contienen string o cadenas de textos. Cuando las var contengan int
estos seran sumados
*/

//---------------Promp-Parseint----------------------------------

/*
son ventanillas para que el usuario pueda entregar datos, estos
pueden ser guardados en variables.

ej:
let numeroUno = prompt("ingrese un numero 1");---prompt devuelve un string
let numeroDos = prompt("ingrese un numero 2");
let resultado = numeroUno + numeroDos
console.log(resultado)
para solucionar esto se utiliza parseInt(), esto pasara el dato del cliente
en un entero.

let numeroUno = parseInt(prompt("ingrese un numero 1"));
let numeroDos = parseInt(prompt("ingrese un numero 2"));
let resultado = numeroUno + numeroDos
console.log(resultado)

Ahora nos devolvera la suma de dos integers.

**Las variables hay que hacerlas lo más descriptivas posibles.

*/

//---------------Operadores aritmeticos---------------------------
/*
estos son :
+
-
/
*
%(sobrante o modulo)

los parentesis siguen las mismas reglas de matematicas, primero se
resuelven los parentesis.


*/

//---------------Operadores relacionales--------------------------

/*
estos son :

> (devuelve true o false)
< (devuelve true o false)
>= (devuelve true o false)
<= (devuelve true o false)
== (devuelve true o false) puede ser un "2" y 2 iguales
=== igual estricto (devuelve true o false) debe ser "2" y "2"
!= (devuelve true o false) es distinto
!== (devuelve true o false) es distinto estricto


*/

//---------------Operadores logicos------------------------------

/*
estos son :

&& (devuelve true o false) y, si los dos son verdaderos
|| (devuelve true o false) o, basta con que uno sea verdadero
! (devuelve true o false) negación, !false = true !true=false

*/


//---------------Estructuras de control---------------------------

/*
las estructuras de control permiten modificar el flujo de ejecución de
las intrucciones de un programa.

    Condicionales:
    .- if else (si ocurre algo, haz esto, sino, haz lo otro)
    .- ?: operador ternario (Operador ternario: Equivalente a if/else, metodo abreviado.)
    .- switch (estructura para casos especificos: similar a varios if/else anidados)

    Repetitivas o iterativas
    .- while
    .- do while
    .- for

*/

//---------------If else---------------------------------------

/*
if(condicion){
    >bloque verdadero
}else{
    >bloque falso
}

let stringUser = prompt('escriba "javascript"')
if(stringUser === "javascript"){
    console.log("correcto")
}else{
    console.log("incorrecto");
}

Este ejemplo solicitara al usuario un string, el cual debe ser
estrictamente "javascript". Si es Verdarero pintara correcto.
*/



//---------------If ------------------------------------------

/*
Hay que tener en cuenta que al momento de usar un prompt, 
este devolvera un string y en este caso el condicional if funcionara
correctamente, pero si se es más estricto, esto seria erroneo, porque
la condicion es que sea un integer y no un string.


let numUser = parseInt(prompt('ingrese un numero del 1 al 5'))

if(numUser <=5){
    console.log("perfecto");
}else{
    console.log("mal ahi era del 1 al 5 ");
}
console.log(typeof(numUser))
*/



//------------Plantillas literales, interpolacion------------------------------------------

/*
Las plantillas literales son cadenas literales que habilitan el uso de
expresionesa incrustadas. Con ellas, es posible utilizar cadenas de 
caracteres de más de una linea, y funcionalidades de interpolacion
de cadena de caracteres ``. Se agregan con ALTGR + }

let opcionUser = prompt(`${}`) ---->interpolacion

*/


//----------------------Switch------------------------------------------

/*
La declaracion switch evalua una expresión, comparando el valor de esa
expresión con una instancia case, y ejecuta declaraciones asociadas
a ese case, así como las declaraciones en los case que siguen.
Estos se usan en react, redux, modo pato.

let opcionUser = prompt(`
Elija una opcion:
1: Libros
2: Peliculas
3: Juegos
`);

switch(opcionUser){
    case '1':
        console.log("codigo da vinci")
    break;
    case '2':
        console.log("Matrix")
    break;
    case '3':
        console.log("GOW")
    break;
    default:
        console.log("Esta opcion no existe");
    break;
}

En este ejemplo si sirve el parseInt(), si el case(caso) fuese 1 (integer), 
la respuesta pintada seria "esta opcion no existe", porque el 
prompt recibe un 1 y lo agrega como "1" string

*/



//----------------------While------------------------------------------

/*
Crea un bucle que ejecuta una sentencia especificada mientras cierta
condicion se evalué como verdadera. Dicha condicion es evaluada
antes de ejecutar la sentencia.

let numero = 1

while(numero <= 10){
    console.log(numero)
    numero = numero + 1 ====> tambien puede ser numero ++    
} 
console.log("fin numero 11")

En este ejemplo let empieza en 1 y cumple la condicion de ser menor
a 10. Pasa a la funcion que pintara el valor de numero y luego
sumara 1 a numero, así hasta llegar a 10. Cuando sea 10 ya no 
seguira porque es solo <= menor o igual y parará el bubcle.


*/



//----------------------Practica juego adivinar------------------------------------------

/*
Math.random(): La funcion Math.random() retorna un punto flotante,
un numero pseudo-aleatorio dentro del rango (0-1).

Primero se crea un numero aleatorio, luego con prompt se captura un
string del usuario para hacer la comparacion. Se utiliza el while
para dar la oportunidad 3 veces al usuario y con el condicional
if, se entrega una respuesta si acerto gano y si no perdio, esto
se entrega con la comparacion del valor aleatorio y el valor
capturado.




let numeroMaquina = Math.floor(Math.random() * (10-1)) + 1;
console.log(numeroMaquina);

let vidas = 3

let numeroUsuario = parseInt(prompt('Adivina el numero del 1 al 10'));


while(numeroMaquina !== numeroUsuario && vidas >1 ){

    let mensaje = (numeroMaquina > numeroUsuario) ? ' El numero maquina es mayor' :' El numero maquina es menor';
    


    console.log('Te equivocaste!' + mensaje)
    numeroUsuario = parseInt(prompt('intenta nuevamente'))
    vidas --
}



if(numeroMaquina === numeroUsuario){
    console.log("ganaste 🎈🎈🎈🏆")
}else{
    console.log("perdiste 💩💩💩")
}
*/


//----------------------Array------------------------------------------

/*
Los array, arreglo, colecciones son objetos similares a una lista cuyo prototipo proporciona
metodos para efectuar operaciones de recorrido y de mutacion. Tanto
la longitud como el tipo de los elementos de un array son variables.

En un array la posicion empieza en 0, el length es el tamaño del array
esto quiere decir la cantidad de elementos que contiene,

Undefined: Una variable a la que no se le ha asignado un valor, o no se
ha declarado en absoluto(no se declara, no existe)son de tipo
undefined.


let frutas = ["platano", "sandia", "perita"]

console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

*/



//----------------------Bucle For------------------------------------------

/*
For crea un bucle que consiste en tres explicaciones opcionales,
encerradas en parentesis y separadas por puntos y comas, seguidas
de una sentencia ejecutada en un bucle.
primero recibe un indice (let i = 0);
segundo recibe un punto de escape (i < frutas.length);
tercero incrementar el indice ( i = i + 1)

let frutas = ["platano", "sandia", "perita", "uva"]
for(let i = 0; i<frutas.length; i = i+1 ){
    console.log(frutas[i])
}

se utiliza el frutas.length para indicar el tamaño del array
con esto, se vuelve dinamica la pintada, tomando en cuenta
la disminucion o aumento del tamaño del array

*/






//console.log("mi nombre es alfredo y soy el mejor 🍔");
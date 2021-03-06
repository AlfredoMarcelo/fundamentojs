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



//----------------------Bucle For of------------------------------------------

/*
For of: La sentencia for of, ejecuta un bloque de codigo
para cada elemento de un objeto iterable, como lo son:
String; Array; Objetos, no funciona con integers.



let frutas = ["platano","sandia","uva","manzana"]

for(let fruta of frutas){
    console.log(fruta)
}

print: platano, sandia, uva, manzana

let nameUser = "alfredo"

for(let letra of nameUser){
    console.log(letra)
}
print: 
    a
    l
    f
    r
    e
    d
    o

*/



//----------------------Funciones------------------------------------------

/*
Las funciones son uno de los bloques de construccion fundamentales en 
Javascript. Una funcion en Javascript es similar a un procedimiento 
-un conjunto de instrucciones que realiza una tarea o calcula un valor,
pero para que un procedimiento califique como funcion, debe tomar alguna
entrada y devolver una salida donde hay alguna relacion obvia entre la 
entrada y salida.

Caracteristicas:
.- El nombre de la funcion
.- Una lista de parametros de la funcion, entre parentesis y separados
    por comas
.- Las declaraciones en JavaScript que definen la funcion, encerradas
    entre llaves, {.....}.
    
    
    function saludar (nombre){
        console.log("bienvenido "+nombre);
    }
    saludar("alfredo");

    print: bienvenido alfredo.
    
**Javascript lee desde arriba hacia abajo.
*/


//----------------------Hoisting------------------------------------------

/*
Hoisting sugiere que las declaraciones de variables y funciones son 
fisicamente movidas al comienzo del codigo, pero esto no es lo que
ocurre en realidad. Lo que sucede es que las declaraciones de varibles y 
funciones son asignadas en memoria durante la fase de compilacion,
pero quedan exactamente en donde las has escrito en el codigo.

javascritp primero hace un barrido del codigo, no lo ejecuta,
solo lo lee.
*/


//----------------------Funciones 2------------------------------------------

/*

function saludar (name){
    return "bienvenido " + name
    console.log("Bienvenido "+ name);
}

console.log(saludar("alfredo"));


function sumar (n1, n2){
    return parseInt(n1) + parseInt(n2)
}

let numUno = prompt("ingrese el primer numero");
let numDos = prompt("ingrese segundo numero");

console.log(sumar(numUno, numDos));
*/

//----------------------JAVASCRITP CONCEPTOS CLAVES------------------------------------------

/*
Preocuparse por la eficiencia puede ser una gran distraccion. 
Es otro factor más que complica el diseño del programa, y 
cuando estás haciendo algo que ya es dificil, esa cosa extra de
la que preocuparte puede ser paralizante. Por lo tanto, empieza
siempre por escribir algo que sea correcto y facil de entender.
Si te preocupa que sea demasiado lento, que normalmente no lo
es, ya que la mayoria del codigo simplemente no se ejecuta con 
la frecuencia suficiente para llevar una cantidad significativa
de tiempo, puedes medirlo despues y mejorarlo si es necesario.

*/



//-----------------Interpolacion template string------------------------------------------

/*
Las plantillas de cadena de caracterees pueden contener
marcadores, identificados por el signo de dolar y envueltos
en llaves `${expresion}`. Las expresiones contenidas en los
marcadores, junto con el texto entre ellas, son enviados
como argumentos a una funcion.

let nameUser = "alfredo"
console.log("Bienvenido \n"+ nameUser)

print:
Bienvenido
alfredo


let nameUser = "alfredo"
console.log(`bienvenido: ${nameUser.toUpperCase()}`)

print:
bienvenido: ALFREDO

let estado = true;
console.log(`
${estado ? "online" :"offline"} ***usando operador ternario.
`);

print:
online


*/



//-----------------Var vs  Let vs Const------------------------------------------

/**
Variable var, uno de los mayores problemas al declararla es que 
puede sobreescribir las declaraciones de variables sin errores.

var nombreUser = "alfredo"
var nombreUser = "marcelo"
console.log(nombreUser);
print:
marcelo

La varbible Let, no permitira declarar dos veces la misma variable
pero si deja sobreescribir el valor.

let nombreUser = "alfredo"
let nombreUser = "marcelo"
console.log(nombreUser);
print:
SyntaxError

let nombreUser = "alfredo"
nombreUser = "marcelo"
console.log(nombreUser);
print:
"marcelo"


var estado = true

if(estado ){
    console.log('entro al if')
    var estado = false
}

console.log(estado)
print:
entro al if
false

let estado = true
if(estado ){
    console.log('entro al if')
    let estado = false
}

console.log(estado)
print:
entro al if
false

let estado = true
if(estado ){
    console.log('entro al if')
    let estado = false
    console.log(estado)
}

console.log(estado)
print:
entro al if
false
true

Al usar let, el estado declarado de manera global no será
afectado por el estado que esta dentro del Scope.

*/



//-----------------Scope------------------------------------------

/**
En simples palabras el "scope de una variable" hace referencia
al lugar donde esta va a vivir o podra ser accesible.

let estado = true
if(estado ){
    console.log('entro al if')
    let estado = false
    console.log(estado)
}

console.log(estado)
print:
entro al if
false
true

Al usar let, el estado declarado de manera global no será
afectado por el estado que esta dentro del Scope.

*/


//-----------------Const------------------------------------------

/*
Const tiene todas las caracteristicas increibles de LET, con la 
ventaja adicional de que las variables declaradas usando CONST
son de solo lectura. Son un valor constante, lo que significa
que una vez que se asigna una variable CONST, no se puede 
reasignar.

Algunos desarrolladores prefieren asignar todas sus variables
usando const de forma predeterminada, a menos que sepan que 
necesitaran reasignar el valor. Solo en ese caso, usan LET.
Esto seria en For, for of.


const estado = true
estado = false
print:
error

for( const i = 0; i < 5; i++){
    console.log(i)
}
print:
error

const estado = true
if(estado){
    const estado = false
    console.log(estado)
}
console.log(estado)
print:
false
true

Es importante comprender que los objetos, arrays y las funciones
asignados a una variable const siguen siendo mutables. El
uso de const solo evita la reasignacion del identificador
de variable.

const frutas = [];
frutas[0] = "sandia"
console.log(frutas)
print:
["sandia"]

En este ejemplo, se esta modificando el contenido de la variable
const, para eso se asigna el [0].

*/



//-----------------Metodos de Array(push, pop, shift, unshift)------------------------------------------

/*
El metodo push(), añade uno o mas elementos al final de un
array y devuelve la nueva longitud del array.

const frutas = ["sandia","uva"]
frutas.push("pera")
console.log(frutas)
print:
sandia, uva

El metodo unshift() agrega uno o mas elementos al inicio
del array, y devuelve la nueva longitud del array.

El metodo shift() elimina el primer elemento del array y lo
retorna. Este metodo modifica la longitud del array.

const frutas = ["sandia","uva"]
const frutaEliminada = frutas.shift();
console.log(frutas)
console.log(frutaEliminada)
print:
uva
sandia

El metodo pop() elimina el ultimo elemento de un array
y lo devuelve

const frutas = ["sandia","uva"]
const frutaEliminada = frutas.pop();
console.log(frutas)
console.log(frutaEliminada)
print:
sandia
uva
*/



//-----------------Practica de array------------------------------------

/*

En este ejemplo hay tres partes, la primera es crear el array
que contendra las frutas, luego se realiza la pregunta con 
un prompt, si el usuario desea agregar más se utiliza un while
que creara un bucle, que agegara una fruta si el usuario
le da aceptar(true) al confirm. Si el usuario le da a 
cancelar(false, no seguira el codigo), pasara a la 3parte
donde se pintara el array frutas mas un string de compraste.


const frutas = [];
const fruta = prompt('Bienvenido: Que fruta deseas comprar?🍍');
frutas.push(fruta);

while(confirm('¿desea agregar otra fruta a su carrito🛒')){
    const fruta = prompt('Que fruta deseas comprar?🍌');
    frutas.push(fruta);
}

console.log("compraste")
for (const fruta of frutas){
    console.log(fruta);
}

*/



//-----------------Funciones declarativas vs expesadas------------------------------------

/*
Funciones anonimas: 
En javascript, usualmente no necesitas nombrar tus funciones,
especialmente cuando se pasa una funcion como argumento a 
otra funcion. En su lugar, creamos funciones inline(en linea)
no necesitamos nombrar estas funciones porque no las reutilizamos
en otro lugar.

Funcion declarativa:
Puede ser llamada antes o despues de ser declarara.

function numero(min, max){
    return Math.floor(Math.random() * (max-min) + min)   
}

console.log(numero(10,21))

Funcion expresada:
Funcion que se guarda en una variable y que no tiene nombre.
Una funcion expresada no puede ser llamada antes de ser declarara.

const numAzar = function(min, max){
    return Math.floor(Math.random() * (max-min) + min)
}
console.log(numAzar(10,21))


La forma correcta de definir una funcion varia segun el
comportamiento que esperemos de la misma: con las funciones
expresadas, tendremos que éstas no son evaluadas hasta que
el interprete no alcance su posicion en el codigo, lo 
cual puede generar errores en arquitectura muy anidadas.

El hecho de que las funciones declarativas se evaluen antes
que las expresiones, pueden producir comportamientos no
deseados cuando forman parte de la condicionales.Para 
estos casos, el uso de las funciones expresadas garantiza
que estas formaran parte del flujo general del programa, lo
cual puede evitarnos sorpresas en determinados entornos.

*/



//-----------------Funcion flecha o Arrow function------------------------------------

/*
Una expresion de funcion flecha es una alternativa compacta
a una expresion de funcion tradicional. Sus limitantes son:
No tiene sus propios enlaces a this o super y no se puede
    usar como metodo.
No tiene argumentos o palabras clave new.target.
No apta para los metodos call, apply y bind.
No se puede utilizar constructor.

const azarFlecha = (min, max) => Math.floor(Math.random() * (max-min) + 1)

console.log(azarFlecha(1,10));

Con un solo parametro se puede omitir los parentesis, la ventaja
es que en la arrow function no es necesario agregar el return
basta agregar el codigo a ejecutar despues de la =>.

Otra opcion que hay dentro de la funcion, es que se puede hacer 
una operacion aritmetica con el parametro. En este ejemplo se 
igual el min a 1 y max a 10, ahora solo se debe llamar a la 
funcion y se obtendra un num aleatorio entre 1 y 9.
Si solo se quiere dar valor a un parametro, si es al primero
se utiliza ** y si se quiere dar valor al parametro 2 se
utiliza ***null


const azarFlecha = (min = 1, max = 10) => Math.floor(Math.random() * (max-min) + 1)

console.log(azarFlecha());
**console.log(azarFlecha(10));
***console.log(azarFlecha(null,50));

*/



//-----------------ForEach para recorrer array------------------------------------

/**
El metodo forEach(), ejecuta la funcion indicada una vez por cada
elemento del array. Tenemos la opcion de poder regresar el indice,
y el array completo en cada recorrido.

const frutas = ["sandia", "uvas", "peras"]

frutas.forEach((fruta, index, array) => {
    console.log(`${index}: ${fruta}`);
    console.log(array);
})
print:
1: sandia
array
2: uvas
array
3: peras
array
*/





//-----------------JAVASCRIPT OBEJETOS------------------------------------

/*
*Javascript está diseñado en un paradigma simple basado en objetos.

*Un objeto es una coleccion de propiedades, y una propiedad es una
asociacion entre un nombre(o clave) y un valor.

*El valor de una propiedad puede ser una funcion, en cuyo caso
la propiedad es conocida como un método.

*Ademas los objetos que están predefinidos en el navegador, 
puedes definir tus propios objetos.

*Los objetos son similares a los arreglos(array), excepto que en
lugar de usar indices para acceder y modificar sus datos,
accedes a los datos en objetos a traves de propiedades(properties)
 
 */



//-----------------Objeto literal------------------------------------

/*
Se denomina objeto literal al objeto cuyas propiedades estan
declaradas textualmente en el codigo. Un objeto estatico.
Los atributos o propiedades se ordenan de manera alfabetica 
de la A-Z.


const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"]
}
console.log(gato.nombre)
console.log(gato["nombre"])

esta es una manera de pintar una propiedad
utilizando objeto["nombrepropiedad"] y se llama
notacion de corchetes

console.log(gato.duerme)
console.log(gato["enemigos"][0])

*/



//-----------------Propiedad CRUD------------------------------------


/*
CRUD es un acronimo de 
Crear(create)
Leer(read)
Actualizar(update)
Eliminar(delete)


hasOwnProperty

A veces es util comprobar si existe
la propiedad de un dado. Podemos utilizar
el metodo .hasOwnProperty(propname) para
determinar si un objeto tiene una propiedad
con ese nombre. .hasOwnProperty() devuelve
true o false si se encuentra la propiedad 
o no.

const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"]
}

gato["color"] = "blanco"; CREATE
gato.edad = 5             UPDATE
delete gato.duerme        DELETED
console.log(gato);        READ

if(gato.hasOwnProperty("nombre")){
   gato.nombre = "gatuno" 
}
console.log(gato.hasOwnProperty("edadq"))
console.log(gato);

*/



//-----------------Obejetos anidados------------------------------------


/**
 Encadenamiento opcional: El operador de encadenamiento opcional
 ?. permite leer el valor de una propiedad ubicada dentro de una
 cadena de objetos conectados sin tener que validar expresamente
 que cada referencia en la cadena sea valida.


const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"],
    "otros":{
        "amigos":["cobarde", "timido"],
        "favoritos":{
            "comida":{
                "frio":"salmon",
                "caliente":"pollo"
             }
         }
     }
 }
 
console.log(gato.otros.favoritos.comida.caliente);
console.log(gato.otros.favorito?.comida.caliente);

agregando el ? despues de el atributo, preguntamos si 
existe el atributo y si no esta devolvera un undefined

*/



//-----------------Propiedades vs Metodos------------------------------------

/*
Cuando queremos acceder, a una propiedad utilizamos
objeto.propiedad , para el metodo es lo mismo pero al 
finalizar se agregan (). Incluso en el mismo vs code
indica cuando es una property o un method.

const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"]
}

const amigos = ["cobarde", "timido"];
console.log(amigos.length())


*/



//-----------------Metodos en los objetos------------------------------------

/*
Un metodo es una funcion que esta dentro de un objeto
La interpolacion dentro de un objeto si no se define el 
nombre de la variable y su atributo que contiene el objeto, 
puede tomar una variable global.
Para eso podemos utilizar this. : 
Que hace referencia al objetocontexto (o SCOPE) de 
Javascript en el cual se está ejecutando el 
codigo actual.

En el caso de arrow function, cuando se utiliza este no tiene
this o super y no se debe usar como metodo.

const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"],
    "comerDos":(alimento)=>{
        console.log(`${this.nombre} esta comiendo ${alimento}`)
    }
}

En el ejemplo anterior pintara el this.nombre como UNDEFINED


const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"],
    "comerDos"(alimento){
        console.log(`${this.nombre} esta comiendo ${alimento}`)
    },
    listarEnemigos(){
        this.enemigos.forEach((item)=>console.log(item))
    }
}
gato.comerDos("maiz");
gato.listarEnemigos();
print:
valiente esta comiendo maiz
agua
perros

En este ejemplo si se utiliza la arrow function pero dentro de un 
bucle forEach, aqui si funcionara porque el this va a fuera
del arrow function.

*/


//-----------------Formas de recorrer un objeto------------------------------------
/* 
for of es para los arrays.
For in:
La instruccion for-in itera sobre todas las propiedades
enumerables de un objeto que está codificado por cadenas.

Por que usar for in?
*Dado que for..in esta construido para iterar propiedades
de obejto, no se recomienda su uso con arreglos y opciones como
Array.prototype.forEach() y existe for..of, ¿cual podria ser
el uso de for..in?
*Es posible que se utilice de forma más practica con fines
de depuracion, ya que es una forma facil de comprobar las 
propiedades de un objeto(mediante la salida a la consola
o de otro modo).
*Aunque los arreglos suelen ser más practicos para almacenar
datos, en situaciones en las que se prefiere un par clave-valor
para trabajar con datos(con propiedades que actuan como la
clave), puede haber casos en los que desees comprobar si 
alguna de esas claves cumple un valor particular.

Otra opcion es: Object.values()

const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"]
}

for(let propiedades in gato){
    console.log(propiedades)
    console.log(gato[propiedades])//con esto pintara los valores
}

console.log(Object.values(gato));
Object.values(gato).forEach(item => console.log(item))
Este devuelve un array con lo valores correspondientes a las 
propiedades enumerables de un objeto.

console.log(Object.values(gato));

otras opciones son: 
Object.entries()
Object.Key()
Object.getOwnPropertyNames()
*/



//-----------------Destructuring Object------------------------------------

/* 

Destructuracion: La sintaxis de destructuracion es una
expresion de javascript que permite desempacar valores
de arreglo o propiedades de objetos en distintas
variables.

Para hacer el destructuring se utiliza las llaves{atributos}
se puede utilizar un alias en el destructuring, se 
agrega dos puntos despues de la propiedad ej:
const {nombre : primernombre} = gato

Tambien podemos crear variables dentro del destructuring,
de esta manera:
const {duerme: duermeGato, edad, enemigos, raza: razaGatuna = "no es de raza"} = gato

const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"]
}

const nombreGato = gato.nombre
console.log(nombreGato)

const {duerme: duermeGato, edad, enemigos, raza: razaGatuna = "no es de raza"} = gato
console.log(duermeGato, enemigos, edad, razaGatuna)
Para acceder a objetos anidados se hace lo siguiente:

El destructuring no funciona con los metodos dentro del objeto
const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"],
    "comer":(alimento)=>{
        console.log(`${this.nombre} esta comiendo ${alimento}`)
    }
}

esto dara un undefined


Se puede hacer una destructuracion dentro de otra destructuracion.**

const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"],
    "otros":{
        "amigos": ["cobarde", "timido", "pegajoso"],
        "favoritos": {
            "comida": {
                "fria": "salmon",
                "caliente": "pollo"
            }
        }
    }
}

const amigosGatos = gato.otros.amigos;
console.log(amigosGatos)

//const {amigos} = gato.otros; //esta es la mejor opcion.******
//console.log(amigos)

const {otros:{amigos}} = gato
console.log(amigos)


Esto tambien se puede aplicar a los array, pero utilizando
corchetes[] en vez de llaves{}.

const {amigos:amigosArray} = gato.otros;

const [amigoUno, amigoDos, amigoTres] = amigosArray*****

console.log(amigoUno, amigoDos,amigoTres)
*/


//-----------------Get y Set en Objetos literales------------------------------------


/**
Get enlaza la propiedad de un objeto con una funcion que sera
llamada cuando la propiedad es buscada.
Al trabajar con Get se debe tener exactamente CERO parametros.
No debe haber multiples getters para una misma propiedad.

const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"],
    get nombreMayuscula (){
        return this.nombre.toLocaleUpperCase();
    }
}
console.log(gato.nombreMayuscula);
print:
VALIENTE

Set la sintaxis set asocia la propiedad de un objeto a una
funcion que sera llamada cuando haya un
intento de asignar valor a esa propiedad.
Debe tener exactamente un parametro.

En ambos al querer pintarlo, no se utiliza los () aunque sea un
metodo.

const gato = {
    "nombre":"valiente",
    "duerme":"true",
    "edad": 10,
    "enemigos":["agua", "perros"],
    get nombreMayuscula (){
        return this.nombre.toLocaleUpperCase();
    },
    set agregarEnemigo(nuevoEnemigo){
        this.enemigos.push(nuevoEnemigo);
    }
}

gato.agregarEnemigo = "superman";
console.log(gato);
*/


//-----------------Por valor vs referencia------------------------------------

/*
Por valor: Cuando asignamos valores primitivos(Bolean, null
Undefined, Number, String y Symbol), el valor asignado es una
copia del valor que estamos asignando.
let a = "hola"
let b = a
a = "chao"
console.log(b)
print:
hola  ***Se mantiene porque b es una copia independiente de a.

Por referencia: Pero cuando asignamos valores No primitivos
o complejos (object, Array y Function), Javascript copia 
"la referencia", lo que implica que nos se copia el valor
en si, si no una referencia a traves de la cual accedemos
al valor original.

let a = ["hola"]
let b = a //b es una referencia (como link) de a

a.push("chao");
console.log(b);
print:
['hola','chao']

En este ejemplo b no se mantiene como ["hola"], si no 
que cambia junto con a, esto pasa con los
OBJETOS, ARRAY Y FUNCTION.
*/





//-----------------Metodos en Array------------------------------------


/**
Los metodos en los arrays son muy utiles, los siguientes metodos no mutan el
array original, sino que nos devuelve uno nuevo.
Se repasara:
    map
    find
    filter
    reduce

Todo estro entra en lo que es la PROGRAMACION FUNCIONAL, que es 
otro enfoque comun en el desarrollo de software (paradigma de
programacion). En programacion funcional, el codigo esta organizado
en funciones más pequeñas y basicas que se pueden combinar para
construir programas de mayor complejidad.

Paradigma de programacion: es una forma de ver y crear codigo de
programacion. Para resolver problemas.


Javascritp es un lenguaje de "multiple paradigma".

*/



//-----------------Imperativa y Declarativa------------------------------------


/*

Un paradigma de programacion no es mas que una forma de ver
y crear codigo de programación para resolver problemas.

Existen diferentes formas de diseñar un lenguaje de
programacion y vario modos de trabajar para obtener resultados
que necesitan los programadores,

Los lenguajes de programacion adoptan uno o varios
paradigmas en funcion del tipo de ordenes que permiten
implementar como, por ejemplo, python o javascript
que son multiparadigma.

Los paradigmas de programacion comunes incluyen:

IMPERATIVO: (emperador) en el que el programador instruye
a la maquina como cambiar su estado.
    procedimental que agrupa las instrucciones en procedimientos.
    Orientado a objetos(OPP o POO) que agrupa las instrucciones
    con la parte del estado en el que operan.

DECLARATIVO: en el que el programador simplemente
las propiedades del resultado deseado, pero no como 
calcularlo.
    funcional en el que el resultado deseado se
    declara como el valor de una serie de aplicaciones
    de funcion.
    logico en la que el resultado deseado se 
    declara como la respuesta a una pregunta sobre 
    un sistema de hechos y reglas.
    Matematico en que el resultado deseado se declara
    como la solucion de un problema de optimizacion.
    Reactivo en el que se declara el resultado deseado
    con flujos de datos y la propagacion del cambio.
*/



//-----------------Imperativa  VS Declarativa------------------------------------


/*
Programacion imperativa: Nosotros dictamos el camino a seguir a
traves del control de flujo: variables, funciones, if, else
switch, loops(while, for, for of, for in), try catch, async await.
Por lo tanto siempre utilizas programacion imperativa en 
Javascript.

Programacion declarativa: Declaras lo que quieres que suceda, no
como se hace. La programacion funcional basicamente significa
escribir codigo que hace algo(declara lo que se hace)pero
no es especifico sobre como hacerlo(imperativo).

JAVASCRIPT PERMITE UN ESTILO DE DESARROLLO TANTO DECLARATIVO
COMO IMPERATIVO, ATENDIENDO ASI A QUE OBJETIVO SE BUSCA
ALCANZAR(DECLARATIVO)O EXTENDIENDOSE SOBRE COMO SE DEBE
ALCANZAR UN OBJETO(IMPERATIVO)


La programacion declarativa no puede existir sin la programacion
imperativa, porque para que se ejecute debe haber una
instruccion.

CONCLUSION:

Con Javascript podemos utilizar multiples paradigmas,
por ende conoceremos algunos metodos que nos facilitan la
vida para la programacion declarativa(funcional)pero
seguiremos mezclando nuestra escritura con programacion
imperativa.
*/


//-----------------Array methods------------------------------------

/*
Estos metodos no mutan el array original, sino que nos
devuelven uno nuevo.

*/


//-----------------METODO MAP------------------------------------

/*
El metodo Map iterara sobre casda elemento de un arreglo
y devuelve un nuevo arreglo que contiene los resultados
de llamar a la funcion callback en cada elemento. 
Esto lo hace sin mutar el arreglo original.

Una funcion callback es una funcion que se pasa a otra
funcion como un argumento, que luego se invoca dentro
de la funcion externa para completar algun tipo de 
rutina o accion.

Cuando se utiliza la funcion callback, se pasan tres
argumentos. El primer argumento es el elemento actual
que se esta procesando. El segundo es el indice de ese
elemento y el tercero es el arreglo al que se llamo
el metodo map.

Map recorre el arreglo y nos devuelve un nuevo array, y 
no muta el array original.

ejemplo1
const frutas = ["🍕","🍔","🍟"];

const nuevoArray = frutas.map((item)=>item)
console.log(nuevoArray);
frutas.push("🌭")
console.log(nuevoArray);

ejemplo2
const user = [
    {name:"alfredo", age:29},
    {name:"ashely", age:13},
    {name:"ana", age:35}
]
const names = user.map(item=>(item.name));
names.forEach((item)=>console.log(item));

ejemplo3
const numeros = [1,2,3,4,5,6,7,8,9,10]
const numerosPorDos = numeros.map((num)=>num *2)
console.log(numerosPorDos);


*/



//-----------------METODO FILTER------------------------------------

/*
El metodo filter() crea un nuevo array con todos los elementos
que cumplan la condicion implementada por la funcion dada.

ejemplo 1
const users = [
    {uid: 1 ,name:"alfredo", age:31},
    {uid: 2 ,name:"ashely", age:13},
    {uid: 3 ,name:"ana", age:35}
]
const mayores = users.filter((user)=>user.age >30)
console.log(mayores);
print:
alfredo
ana


ejemplo 2
const userFiltrado = users.filter((user)=> user.uid !==2 )
console.log(userFiltrado);
print:
user con uid:1 y uid:3
*/



//-----------------METODO FIND,SOME Y FININDEX------------------------------------


/*
Para esto hay 3 metodos para buscar:

El metodo find() devuelve el valor del primer elemento
del array que cumple la funcion de prueba proporcionada.

const alfredo = users.find((user)=>user.uid === 1)
console.log(alfredo)

El metodo some() comprueba si al menos un elemento del
array cummple con la condicion implementada por la
funcion proporcionada. Este metodo devuelve un 
true o false.

const existe = users.some((user)=>user.uid ===1)
console.log(existe);

El metodo findIndex() devuelve el indice del primer 
elemento de un array que cumpla con la funcion de 
prueba proporcionada. En caso contrario devuelve -1.
Este metodo es util para validar.

const indice = users.findIndex((user)=>user.uid ===3)
console.log(indice)
console.log(users[indice])//devuelve el user del indice indicado




const users = [
    {uid: 1 ,name:"alfredo", age:31},
    {uid: 2 ,name:"ashely", age:13},
    {uid: 3 ,name:"ana", age:35}
]

const alfredo = users.find((user)=>user.uid === 1)
console.log(alfredo)

const {age}= users.find((user)=>user.uid === 2)
console.log(age);

const existe = users.some((user)=>user.uid ===1)
console.log(existe);

const indice = users.findIndex((user)=>user.uid ===3)
console.log(indice)
console.log(users[indice])//devuelve el user del indice indicado
*/



//-----------------METODO SLICE, CONCAT Y SPREAD------------------------------------


/*
El metodo slice() devuelve una copia de una parte
del array dentro de un nuevo array empezando por
el inicio hasta el fin (fin no incluido). El
array original no se modificara.

El metodo concat() se usa para unir dos o mas arrays.
Este metodo no cambia los arrays existentes, sino
que devuelve un nuevo array. Devuelve la una copia
nueva de dos arrays, no los muta.


El metodo Spread syntax permite a un elemento
iterable tal como un arreglo o cadena(string) u
obejto ser expandido en lugares donde son esperados.
Es muy usado en fetch con los ..., tambien se pueden
añadir elementos dentro de la union.
const animals = ["gato","conejo","perro","burro"];

//slice
const newAnimals = animals.slice(1,3)
console.log(newAnimals)

const letrasA = ["a","b","c"]
const letrasB = ["d","e","f"]

//concat
const letrasAB = letrasA.concat(letrasB);
console.log(letrasAB);

//spread syntax
const letrasAC = [...letrasA,"-",...letrasB];
console.log(letrasAC);
*/


//-----------------METODO REDUCE------------------------------------


/*

El metodo reduce() ejecuta una funcion reductora sobre
cada elemento de un array, devolviendo como resultado
un unico valor.

const numeros = [1, 2, 3, 4, 5];

const sumar = numeros.reduce(
    (acumulador, valorActual)=>acumulador + valorActual
)
console.log(sumar)

const arrrayNumeros = [
    [0,1],
    [2,3],
    [4,5]
];
//reduce mas concat 
const soloNumeros = arrrayNumeros.reduce(
    (acumulador,current)=>acumulador.concat(current) 
)
console.log(soloNumeros)
//reducir con concat y spread syntax
const arrayPlano = [].concat(...arrrayNumeros);
console.log(arrayPlano);
//manera 2 (flat es nuevo, con cautela)
const arrayPlanoDos = arrrayNumeros.flat();
console.log(arrayPlanoDos)
*/


//-----------------METODO SPLIT Y JOIN------------------------------------


/*

El metodo split() divide un objeto de tipo string en 
un array, mediante separador.

El metodo join() une todos los elementos de una matriz
(o un objeto similar a una matriz)en una cadena y 
devuelve esta cadena. Si no se pasa un separador,
por defecto join asignara una ",".

const cadenaMeses = "jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec";
//slice
const arrayMeses = cadenaMeses.split(",")
console.log(arrayMeses)
//join
const arrayMesesTexto = arrayMeses.join("<>");
console.log(arrayMesesTexto)
*/



//users.forEach((item)=>console.log(item.age));

//console.log("mi nombre es alfredo y soy el mejor 🍔");
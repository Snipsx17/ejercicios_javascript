// //Javascript es isomorfico, puedes hacer todas las partes de una aplicacion
// //solo con javascript front, back y bases de datos.
// //es de alto nivel
// //interpretado, no se compila, se compila en tiempo de ejecucion
// //debilmente tipado, la variable puedes cambiar y el tipo tambien
// //multiparadigma, puede usarse POO, funcional 
// //es key sensitive, diferencia entra mayuculas y minusculas
// //no necesita ; al final de cada instruccion

// // ESCRITURA DE CODIGO
// //para archivos se suguere snake case mi_archivo
// //constante en UPPERCASE MI_CONSTANTE
// //en clases UpperCameCase MiClase
// //en objetos lowerCamelCase miVariables y en funciones e instancias

// //ORDEN

// //1 importacion de modulos
// //2 declaracion de variables
// //3 declaracion de funciones
// //4 ejecuciones de codigo

// //TIPOS DE DATOS 

// //primitivos: cno accedemos directamente al valor, sno a una referenciauando 
// //llamamos al dato obtenemos directamente el valor, estos son:
// //string
// //numbre
// //boolen
// //null
// //undefined
// //NaN

// //Compuestos: Son los que hacen referencia a un valor, estos son: 
// //object {}
// //array[]
// //function(){}
// //class{}

// //EXTENCIONES RECOMENDADAS
// //1 ESLINT 
// //2 LIVE SERVER
// //3 PRETTIER (formatea codigo)

// //VARIABLES

// var hola = "Hola mundo";// ambito global (NO USAR)
// let saludo = "hola mundo";// ambito de bloque
// console.log(hola);
// // el objeto window es el objeto global, el principal desde donde parte todo
// console.log(window.hola);//esto de imprime
// console.log(window.saludo); //esto no se imprime

// //Ambito de las variables o SCOPE: si de claramos la variable con LET el alcance de la variable sera
// //global(accesible desde cualquier parte del documentos), si de declara con LET la variable tiene
// //ambito de bloque, es decir es accesible desde el bloque donde se declara como una funcion

// //CONSTANTES
// //SE USAN CUANDO EL VALOR NO VA A CAMBIAR
// //NO SE PUEDEN TENER CONATANTES VACIAS
// const PI = 3.1415;
// console.log(PI);

// //con valores compuestos si se pueden agregar datos a los arreglos y objetos

// //objeto
// let objeto1 = {
//     nombre: 'Ubert',
//     apellido: 'Hernandez'
// };

// const objeto2 = {
//     nombre: 'Luana',
//     apellido: 'Venancio'
// }

// //arreglo o array
// let arreglo1 = ['uberth', 'Hernandez'];
// const arreglo2 = ['luana', 'Venancio'];

// //imprimimos
// console.log(objeto1)
// console.log(objeto2)
// console.log(arreglo1)
// console.log(arreglo2)

// // agregamos propiedades a los objetos declarado con CONST

// objeto2.correo = 'ing@gmail.com';

// //imprimimos

// console.log(objeto2);

// //CADENAS DE TEXTOS

// let miNombre = "Uberth Hernandez";
// let saludos = new String ('Hola')//manera formal

// console.log(saludos, miNombre);
// console.log(miNombre.length)// nomero de caracteres
// console.log(saludos.toLowerCase())//minusculas
// console.log(saludos.toUpperCase())//mayusculas
// console.log(miNombre.includes('Uberth'))//incluye, devuelve true
// console.log(miNombre.trim())//borra espacios en blanco
// console.log(miNombre.split(' '))//divide por el caracter indicado 


// //CONCATENACION

// let nombre = "Uberth";
// let apellido = "Hernandez";

// let sayHola = "Hola " + nombre + ' ' + apellido + '.';

// console.log(sayHola);

// //INTERPOLACION DE VARIABLES
// //Template String
// //se puede identar las demas cadenas con '' y "" no se puede
// let sayHola2 = `Hola mi nombre es 
//                 ${nombre} 
//                 ${apellido}.`;

// console.log(sayHola2);

// sayHola2 += ", adios.";
// console.log(sayHola2);

// //NUMEROS

// let a = 12;
// let b = new Number(34);
// let c = "4.34";
// console.log(a,b);

// //numeros decimales
// console.log(a.toFixed(2))//numero de decimales
// console.log(b.toFixed(4))//numero de decimales
// console.log(parseInt(a))//pasa de cadena a entero 
// console.log(parseFloat(a))//pasa de cadena a flotante 
// console.log(typeof a)//tipo de variable
// console.log(a + Number.parseFloat(c))//constructor de metodos con numero 

// //CASTING ES CUANDO SE CAMBIA EL TIPO DE VARIABLE

// //BOOLEANOS
// //todos los valores son considerados verdaeros a menos que esten definidos como falso
// //exceptuando false, 0, -0, 0n, "", null, undefined, and NaN).

// let si = true;
// let no = false;
// let bConstructor = Boolean(true);

// console.log(typeof si);
// console.log(Boolean(0))//falso
// console.log(Boolean(1))//TRUE
// console.log(Boolean(-5))//TRUE
// console.log(Boolean(''))//faslo


// //null, UNDEFINE y NaN

// //undefine es ua variable sin nada, sin valor
// let indefinido ;
// console.log(typeof indefinido);

// //null es una variable vacia pero declarada null
// let nulo = null;//variable vacia
// console.log(typeof nulo);

// //NaN not a number
// let noEsUnNumero = 'hola' * 34;//se hacen operaciones datos no numericos
// console.log(noEsUnNumero);

// //FUNCIONES
// //las funciones se definen como objetos

// //funciones declaradas
// function funcionUno(){
//     console.log("uno");
//     console.log("dos");
//     console.log("tres");
// }

// //llamada
// funcionUno();

// function funcionDos(){
//     return "Devuelve esto";
// }

// let valoresDeFuncnion = funcionDos();
// console.log(valoresDeFuncnion);

// function conValores(nombre = "Nombre por defecto", edad= 0){
//     return `Hola ${nombre}, tienes ${edad}`;
// }

// console.log(conValores("Uberth", 29));
// console.log(conValores());

// function declarada(){
//     console.log('Esto es una funcion declarada y puede invocarse antes que de declare')
// };

// //hace hoisting, sube la funcion al inicio de la ejecucion
// declarada();

// //funciones expresadas o anonimas
// const funcionExpresada = function (){console.log('esto es una funcion expresada o anonima')};
// //ESTO ES RECOMENDADO

// //no se puede expresar antes de su definicion, no hace Hoisting
// funcionExpresada();

// //ARREGLOS O ARRAYS

// //declarar los arreglos con CONST

// const arreglo = [];
// const arregloDos = [a, "HOla", ["a", "b", "c"]];

// console.log(arregloDos);
// console.log(arregloDos[1]);//segunda pocicion
// console.log(arregloDos[2][1]);//imprime b

// const arregloTre = Array.of('a', 'b', 'c', 9);//nueva manera de declarar arreglos
// console.log(arregloTre);

// const descuesto = Array(100).fill(false);//array de 100 pociciones con el valor false
// console.log(descuesto);

// const colores = ['rojo', 'verde', 'azul'];
// colores.push('amarillo');//agrega un elemento
// colores.pop();//quita el ultimo elemento
// colores.forEach(function(elemento, index){
//     console.log(elemento, index);
// })

// //OBJETOS

// const creador = {
//     nombre: "Uberth",
//     apellido: "Hernandez",
//     DNI: "Y6808109P",
//     pasatiempo: ['comer', 'programar'],
//     contacto:{
//         correo: "ing.uberthhernandez@gmail.com",
//         telefono: 644417889
//     }, saludo: function(){
//         return `Hola ${this.nombre} ${this.apellido}, tu eres nuestro creador`;
//     }
// }

// //dentro de un objeto a las variables se les llamara propiedades y a las funciones
// //les llamamos metodos

// console.log(creador);
// console.log(creador['nombre']);
// console.log(creador['apellido']);
// console.log(creador.saludo());
// console.log(creador.pasatiempo[1]);

// //metodos de los objetos
// console.log(Object.keys(creador));
// console.log(Object.values(creador));
// console.log(creador.hasOwnProperty('nombre'));//verifica que tenga la propiedad

// //TIPOS DE OPERADORES

// //aritmeticos + - * / % ()

// let numero = 4*56/34-5+6;
// console.log(parseInt(numero));

// //relacionales < > >= <= != !== =(asignacion) ==(comparacion de valores) 
// //===(comparacion de valores y tipo UTILIZAR ESTE SIEMPRE) 

// console.log(9>34);

// //operador unitario i++ i-- ++i --i

// //CONDICIONALES
// //if else

// let edad = 18;

// if (edad >= 18){
//     console.log('Eres mayor de edad')
// } else{
//     console.log('Eres menor de edad')
// }

// //operador ternario (condicion) ? verdadero : falso

// let eresMayor = (edad > 17) 
// ? "Eres mayor de dad"
// : "Eres menor de edad";

// console.log(eresMayor);

// //switch case

// let dia = 7;

// switch(dia){
//     case 0:
//         console.log('Es domingo');
//         break;
//     case 1:
//         console.log('Es Lunes');
//         break;
//     case 2:
//         console.log('Es Martes');
//         break;
//     case 3:
//         console.log('Es Miercoles');
//         break;
//     case 4:
//         console.log('Es Jueves');
//         break;
//     case 5:
//         console.log('Es Viernes');
//         break;
//     case 6:
//         console.log('Es Sabado');
//         break;
//     default:
//         console.log('El dia no existe')
//     break;
// }

// //CICLOS LOOP

// let contador = 0;

// while (contador < 10){
//     console.log(contador);
//     contador++;
// }

// //DO WHILE

// do{
//     console.log("Do While inicia")
// }
// while(contador < 10){
//     console.log('Es menor');
//     contador++;
// }

// //for
// const lista = [];

// for (let i = 0; i < 10; i++) {
//     lista.push(i); 
    
// }

// console.log(lista);

// //FOR IN para objetos, no se puede usar la notacion del punto

// for(const elemento in creador){
//     console.log(creador[elemento]);
// }

// //recorre cualquier objeto
// for(const caracter of nombre){
//     console.log(caracter);
// }

// //CONTROL DE ERRORES

// numero = 'd';
// try{

//     if(isNaN(numero)){
//         throw new Error('El caracter no es un numero')
//     }

// }catch (error){
//     console.log(`Tenemos un error ${error}`)
// } finally{

// console.log('esto siempre se ejecuta');
// }

// //BREAK Y CONTINUE

// const listaNumeros = [1,2,3,4,5,6,7,8,9];

// for (let i = 0; i < listaNumeros.length; i++) {
//     if (i === 5){
//         break;
//     } else if(i > 4){
//         continue;
//     }else if (i > 1 && i < 9){
//         console.log('es menor');
//     }
    
// }

// //DESTRUCTURACION

// //asigno cada elemento a una variable
// //la variable que trato de crear tiene que llamarse igual que que la propiedad
// const dato = {
//     miNombreOtro: "Uberth",
//     telefono: 644417889,
//     direccion: "Calle portalet"
// }

// //desctructuramos, le asignamos cada elemento de dato a una variable separada
// let {miNombreOtro, telefono, direccion} = dato;
// console.log(miNombreOtro, telefono, direccion);

// const infoUsuario = {
//     usuario: "snipsx",
//     password: "snipsx1991",
//     tipo: "administrador",
//     fechaAlta: "17-11-1991"
// }

// const {usuario, password, tipo, fechaAlta} = infoUsuario;

// const infoUsuario2 = ["snipsx", "snipsx1991", "administrador", "17-11-1991"];
// const [usuario2, password2] = infoUsuario2;
// console.log(usuario2, password2);

// console.log(usuario);
// //OBJETOS LITERALES

// const objetoLiteral = {
//     usuario,//asigna el nombre y la variable ya definida
//     password,
//     tipo,
//     fechaAlta,
//     saludar(){//nuev manera de declarar metodos, no hace falgta la palabra function
//         return `Hola, ${usuario}, tu password es ${password}, tienes prbilegios de ${tipo} y te diste de alta el ${fechaAlta}`
//     }
// }

// console.log(objetoLiteral["usuario"]);

// console.log(objetoLiteral.saludar());

// //OPERADOR REST 
// //recibe parametros infinitos
// function operadorRest(a, b, ...c){//se simboliza con ...

//     let resultado = a + b;

//     c.forEach(function (n) {//suma todos los numeros que se vayan asignando a c
//         resultado += n;
//     });

//     return resultado;
// }

// console.log(operadorRest(1,3,4,5,6,7))

// //OPERADOR SPREAD
// //crea nuevos arreglos apartir de 2 

// const arre1 = [1,2,3,4,5];
// const arre2 = [6,7,8,9,0];

// const arre3 = [...arre1, ...arre2];// se unen los 2 arreglos
// console.log(arre3);

//ARROW FUNCTION
//nueva manera de definir funciones anonimas expresadas

const saludo = () => console.log('Hola');
const saludo2 = nombre => console.log(`Hola ${nombre}`);
const saludo3 = (nombre, apellido) => console.log(`Hola ${nombre} ${apellido}`);
saludo3("Uberth", "Hernandez");

//recorre un array
const arreglo = [1,2,3,4,5];
arreglo.forEach((elemento, index) => console.log(`${elemento} esta en la posicion ${index}`));

//PROTOTIPOS
//funcion constructora
// function Animal (nombre, genero) {
//     //propiedades
//     this.nombre = nombre;
//     this.genero = genero;
    
//     //metodos  
//     this.sonar = function() {
//         console.log('estoy haciendo sonidos');
//     }
// }

//se deben declarar los metodos fuera de la funcion constructora y luego se le asignan
// function Animal (nombre, genero){
//     //propiedades
//     this.nombre = nombre;
// }

// //definimos los metodos y se los asignamos
// Animal.prototype.saludar = function() {
//     console.log(`Hola me llamo ${this.nombre}`);
// }

//instanciado 


//HERENCIA PROTOTIPICA
// function Perro (nombre, genero, tamanio){
//     this.super() = Animal;//hereda de la clase animal
//     this.super();//llamamamos a la herencia 
//     this.tamanio = tamanio;
// }

// const animal = new Perro("snoopy", "macho", "mediano");
// const animal2 = new Animal("lola bunny", "hembra");
    
//     console.log(animal);
//     console.log(animal2);
//     animal.saludar();
//     animal2.saludar();

    //CLASES Y HERENCIA 

//     class Coche{//no reciben parametros

//         constructor(nombre, modelo){// aqui recibe los parametros
//             this.nombre = nombre;
//             this.modelo = modelo;
//         }

//         acelera = function(){
//             console.log("Ruuuuuuuuuunnn!!!!!!!");
//         }

//     }

// const forruner = new Coche("Ford", "Foruner");
// console.log(forruner);
// console.log(forruner.modelo, forruner.nombre);
// forruner.acelera();

// //herencia
// class TodoTerreno extends Coche{
//     constructor(nombre, modelo,motor){
//         super(nombre, modelo); // llama al construcctor de la clase padre
//         this.motor = motor;
//     }

//     //redefinimos el metodo acelera
//     acelera = function(){
//         console.log("ruun ruuuun ruuuuuuun!");
//     }
    
// }

// const machito = new TodoTerreno("Machito", "f4500", 4500);
// machito
// console.log(Coche);
// console.log(forruner);
// machito.acelera();

// //METODOS ESTATICO

// class Animal{
//     constructor(nombre, raza){
//         this.nombre = nombre;
//         this.raza = raza;
//     }

//     get getRaza(){
//         return this.raza;
//     }

//     get getNombre(){
//         return this.nombre;
//     }

//     set setNombre(nombre){
//         this.nombre = nombre;
//     }

//     set setRaza(raza){
//         this.raza = raza;
//     }
// }

// const bethoben = new Animal("Bethoben", "Sanbernardo");

// console.log(bethoben.getNombre);
// bethoben.setRaza = "Gran danes";
// console.log(bethoben.getRaza);

// //OBJETO CONSOLE

// console.log(console);
// console.error("Error!!");
// console.warn("Aviso!!");
// console.info("Informacion!!");
// //cadenas F
// console.log(`Hola mi nombre es %s y soy un %s`, bethoben.getNombre, bethoben.getRaza);
//ver como objetos
//console.dir(document);

//grupos en la consola
// console.groupCollapsed("Esto es un grupo");
// console.log("uno");
// console.log("dos");
// console.log("tres");
// console.log("cuatro");
// console.groupEnd;


// const usuario = {
//     nombre: "Uberth",
//     apellido: "Hernandez",
//     edad: 29
// }

// console.table(usuario);

//MEDIR TIEMPO POR CONSOLA

// console.time("temporizador");
// const numeros = Array(1000000);//nuevo array de 1000000 de pocisiones vacias

// numeros.forEach(function(numero){
//     numeros[numero] = numero;
// });
// console.timeEnd("temporizador");
// console.log(numeros);

//PRUEBAS POR CONSOLA
// let x = 2;
// let y = 2;
// let pruebaXY = "Algo fue mal con las prueba";

// console.assert(x<y, x, y, pruebaXY);


// //OBJETO DATE
// const fecha = new Date;
// console.log(fecha);
// console.log(fecha.getDate());
// console.log(fecha.getDay());
// console.log(fecha.getMonth());
// console.log(fecha.getFullYear());
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
// console.log(fecha.getMilliseconds());
// //forma string
// console.log(fecha.toDateString());
// console.log(fecha.toLocaleString());
// console.log(fecha.toLocaleTimeString());
// console.log(fecha.getTimezoneOffset());//minutos de diferencia con green witch
// console.log(Date.now());//time stap

// let cumpleUberth = new Date(1991, 10, 17);//fecha de cumpleanos
// console.log(cumpleUberth);

// //OBJETO MATH
// const objetoMath =  Math;
// console.log(objetoMath);
// console.log(objetoMath.abs(-5.7));//valor absoluto
// console.log(objetoMath.ceil(4.5));//va al numero superior
// console.log(objetoMath.floor(4.5));//va al numero inferior
// console.log(objetoMath.round(4.53));//redondea
// console.log(objetoMath.pow(4, 4));//potencia
// console.log(objetoMath.random());//random entre 0 y 1
// console.log(objetoMath.round(Math.random() * 1000));//random entre 0 y 1000

// //OPERADOR CORTOCIRCUITO
// // OR
// function saludar(nombre)
// {
//     nombre = nombre || "Desconocido";
//     // si la primera condicion es false se asigna "Desconocido"

//     console.log(`Hola ${nombre}`);
// }

// saludar("Uberth");

// // AND
// //asigna el valor de la segunda condicion sino el de la primera
// let nombre = false && "Hola";

// //ALERT, PROMPT Y CONFIRM
// console.log(window);
// let alerta = window.alert("Hola");
// let confirma = window.confirm("Confirmas");
// let aviso = window.prompt("Tu nombre");
// console.log(alerta)
// console.log(confirma)
// console.log(aviso)

//EXPECIONES REGULARES
// let expReg = new RegExp("Lorem", "");//nueva expresion
// let expReg2 = /Lorem/ig;

// let cadena = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.'

// console.log(expReg2.test(cadena));
// console.log(expReg2.exec(cadena));

// //FUNCIONES ANONIMAS AUTOEJECUTABLES

// (function(d, w, c){
//     c.log("hola");
//     w.alert("Hola");
// })(document, window, console);//parametros

//
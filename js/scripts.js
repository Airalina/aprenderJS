// /***** FUNCIOENS DE CADENAS DE CARACTERES******/ 

// // let banda = 'metallica',
// // cancion = 'cancion';

// // let nombre;
// // nombre= banda + ": " + cancion;

// // console.log(banda.length); Length cuenta los caracteres de la cadena

// // nombre = nombre.concat(" ", "y es genial");
// // // console.log(aprendiendo+ ' ' + texnologia);
// // // console.log(`${aprendiendo} ${texnologia}`); Otra forma de concatenar "mejor"
// // nombre= nombre.toUpperCase();  A  mayusculas
// // nombre= nombre.toLowerCase(); A minusculas 
// // console.log(nombre);
// // let nombre;
// // let actividad = 'Estoy aprendiendo JavaScript con el curso';
// // // nombre = actividad.split(' ');     Split separa en arreglos
// // // let interes = 'Leer, caminar, escucha r, musica'
// // // nombre = interes.split(', ');

// // //nombre = actividad.replace(' JavaScript', 'JS'); Sustituye la primera por la segunda

// // // nombre = actividad.includes('JavaScript');     Includes busca si existe
// // // console.log(nombre);  Console.log es para ver en la consola de javascript
// // // let master = 'Master ',
// // // puppets = ' Of puppets';

// // // console.log(master.repeat(3));  Repite segun lo que le pongas
// // // console.log(puppets);

// /***** FUNCIONES MATEMATICAS******/ 

// // const numero1 = 30,
// //       numero2 = "20",
// //       numero3 = 20.20,
// //       numero4 = -3,
// //       numero5 = 20;


// //       let resultado;
// // // resultado = numero1 + numero2;
// // // resultado = numero1 - numero2;
// // // resultado = numero1 * numero2;
// // // resultado = numero1 / numero2;

// // resultado = Math.round(2.4);  Este redodea despues de .5 al siguiente numero pero bajo .5 se queda en el mismo numero
// // //resultado= Math.floor(2.9);           Redondea de 2.9 a 2 directamente
// // //resultado= Math.ceil(2.1);          Redondea de 2.1 a 3 directamente
// // resultado= Math.sqrt(144);               raiz cuadrada
// // resultado= Math.abs(numero4);           valor absoluto
// // resultado= Math.pow(8,3);            Potencia 8 elevada a la 3
// // resultado= Math.min(10,2,4,60,5);  Se trae el valor minimo
// // resultado= Math.max(810,2,4,60,5);   Se trae el valor maximo
// // let puntaje = 0;


// /***** DE CADENAS DE CARACTERES A NUMEROS******/ 

// // let numero1 = 50,
// //     numero2 = '10',
// //     numero3 = "tres",
// //     numero4 = "20.20"

// // console.log(numero1 + numero2);
// // console.log(Number(numero2) + numero1);  /**De string a numero */
// // console.log(parseInt(numero4) + numero1);/**De string a numero entero */
// // console.log(parseFloat(numero4) + numero1);/**De string a numero decimal*/

// // let dato;
// // dato = Number("20");
// // dato =  Number(-20.20);
// // dato = Number(true);
// // dato = Number(false);     /**No admiten arreglos ni cadena de letras */

// // let numero1 = "1010201200.20121",
// //     numero2 = 25015.54486478478;

// // /**Fixed solo aplica a numeros, si es una cadena transformal con number */
// // console.log(Number(numero1).toFixed(4));  /**Si fixed esta vacio no trae decimales, sino hay que ponerselos */
// // console.log(numero2.toFixed(4));  

// /***** DE NUMEROS A CADENAS DE CARACTERES******/ 

// let dato = 1985456445455465;

// // dato = String(dato);
// dato = String(true);
// dato = String (new Date());     //fecha actual
// dato = String((1,2,3,4));

// console.log(dato);
// console.log(dato.length);

// /*****TIPO DE DATOS******/ 
// const nombre = 'Juan';
// // console.log(typeof nombre);
// const edad = 80;
// //console.log(typeof edad);
// let aprender = true;
// // console.log(typeof aprender);
// let valor;
// console.log(typeof valor);
// valor = 'hola';
// console.log(typeof valor);
// valor = true;
// console.log(typeof valor);
// valor = 20;
// console.log(typeof valor);
// valor = "20";
// console.log(typeof valor);

//null
// let hijos = null;
// // console.log(typeof hijos);
// //undefined
// let n;
// console.log(typeof n);
//ARREGLO
// let lenguajes = ['HTML5', 'JS', 'PHP'];
// console.log(typeof lenguajes);
// //objeto
// let persona = {
//     nombre: 'Juan',
//     ciudad:'Mexico'
// }
// console.log(typeof persona);

// //fecha
// let fecha = new Date();
// console.log(typeof fecha);

//*** FUNCIONES CON ARREGLOS***/
// const numeros = [10, 20, 30, 40, 50];
// console.log(numeros);
// console.table(numeros); //muestra la tabla
//  const meses = new Array('enero', 'febrero', 'marzo');
// // console.log(meses[2]); PARA AGREGAR A TU ARRAY MAS POSICIONES:
// //meses[3]= 'Abril';  //push agrega al ultimo lugar en el arreglo
// meses.push('abril');
// meses.unshift('uno'); //unshift agrega al principio del arreglo
// meses.pop(); //te elimina el ultimo lugar del arreglo
// meses.shift(); //elimina el inicio del array
// meses.splice(0,2); //eliminar un rango del arreglo del 0 al 2
// meses.reverse(); //voltea el arreglo
// meses.sort(); //ordena el array alfabeticamente
// console.log(meses);


// const arreglo = ['Hola', 10, true, "si", null, undefined];
// console.log(arreglo.length); //Cantidad de cosas en ese arreglo
//console.log(Array.isArray(arreglo)); //funcion que verifica que es un arreglo

//****OBJETOS*****/
//Object literal
// const persona = {
//     nombre: 'Juan',
//     apellido: 'De la torre',
//     edad: 80,
//     trabajo: true,
//     musica: ['Trance', 'Rock', 'Grunge'],
//     hogar: {
//         ciudad: 'Guadalajara',
//         pais: 'mexico'
//     }
// }
//Utilizando this en object literal:  NOTA: New Date d afecha actual y con .getfullyear te da el año anda mas
// const persona = {
//     nombre: 'Juan',
//     edad: 80,
//     anioNacimiento: function(){
//         return new Date().getFullYear()- edad;
//     }
// }
// console.log(persona.anioNacimiento());
// //console.log(persona.edad); //para acceder a cada propiedad
// //console.log(persona.musica[1]); Acceder a array
// //console.log(persona.hogar.pais); Objeto dentro de un objeto
// console.log(persona['hogar']['ciudad']);



//**TEMPLATE STRINGS***/

// const nombre = 'Juan',
//       trabajo= 'programador';
// //console.log("Nombre: "+ nombre+ ', Trabajo: '+ trabajo);
// //concatenar mejor:
// // console.log(`Nombre: ${nombre}, Trabajo: ${trabajo} `);
// const contenedorApp = document.querySelector('#mensaje'); //    querySelector permite seleccionar un elemento de mi html
// let html = '<ul>'+
//                 '<li> Nombre: ' + nombre + '</li>' +
//                 '<li> Trabajo: ' + trabajo + '</li>' +     //inyecta en el html
//                 '</ul>';
// let html2= `<ul>
//                 <li>Nombre: ${nombre}</li>
//                 <li>Trabajo: ${trabajo}</li>

//             </ul>`;   
// contenedorApp.innerHTML = html2;

/*****FUNCIONES***/
//fuction declaration
// saludar('Juan', 'desarrollador web');
// saludar('Pedro');
// saludar();
// function saludar(nombre = 'Visitante', trabajo = 'No sabemos!'){
//     console.log('Hola '+ nombre + ' Tu trabajo es ' + trabajo);
// }
// //saludar();
// //function expression: no puedes llamarla antes de declararla la otra si

// const suma = function(a = 0 ,b = 0){
//     console.log(a + b);
// }
// suma(10,20);
// suma(30,20);
// suma(100,20);

// //IIFE: se invocan a si mismas
// (function(tecnologia){
//     console.log('AQUI ESTOY! aprendiendo '+ tecnologia)
// })('JavaScript');

//***METODOS O FUNCIONES DENTRO DE OBJETOS****/
//metodos//
// const musica = {
//     reproducir: function(cancion){
//         console.log('Reproduciendo la cancion: '+ cancion );
//     },
//     pausar: function(){
//         console.log('Pausando...');
//     }
// }
// //Los metodos pueden ir por fuera
// musica.borrar = function(id) {
//     console.log('Borrando la cancion con el ID: '+ id)
// }
// musica.reproducir('Hotel california');
// musica.pausar();
//musica.borrar(121);

/***FUNCIONES QUE RETORNAN VALORES Y ARROW FUNCTIONS***/
// const suma = function (a = 0, b = 0) {
//    return a + b;
// }
// const multiplicar = function(a){
//     return a * 5;
// }
//USANDO LAS ARROW FUNCTION:
//  const suma =  (a = 0, b = 0) =>  a + b;

//  const multiplicar =  a => a * 5;

// let resultadoSuma = suma(10, 20),
// total = multiplicar(resultadoSuma);

// console.log(total);

// let viajando = destino => 'viajando a la ciudad de ' + destino;
// let viaje;
// viaje = viajando('Londres');
// console.log(viaje); 

/****OBJECT CONSTRUCTOR Y PALABRA THIS****/
//object constructor: declarando el objecto
// function Tarea(nombre, urgencia){
//         this.nombre = nombre;
//         this.urgencia = urgencia;
// }  
// AHORA SE HACE:
//object constructor: declarando el objecto
// class Tarea {
//     constructor(nombre,urgencia){
//       this.nombre = nombre;
//        this.urgencia = urgencia;
//     }
// }
// //crear tareas
// const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
// const tarea2 = new Tarea('Pasear al perro', 'Media');
// console.log(tarea1);
// console.log(tarea2);
/*Fecha**/
//const diaHoy = new Date();
// let valor = diaHoy;
// //retorna el numero del mes = 0 = Enero
// // valor = diaHoy.getMonth();
// //Retorna el numero de dia 0= Domingo
// // valor= diaHoy.getDay();     
// //retorna el numero del dia del mes
// valor = diaHoy.getDate();         //sumarle 1 al mes o dia porque empieza desde 0
// //retorna el año actual
// valor = diaHoy.getFullYear();
// //retorna los minutos de la hora
// valor = diaHoy.getMinutes();
// //retorla la hora del dia
// valor = diaHoy.getHours();
// //Timestamp
// valor= diaHoy.getTime();
// valor = diaHoy.getFullYear();
// valor = diaHoy.setFullYear(1998);   //linea 304 a 306 es para obtener un año reescribirlo y publicarlo
// valor = diaHoy.getFullYear();

//ejemplo2 Newdate es igual a MES, DIA Y AÑO
// const unDia = new Date('04-07-1999');
// let valor;
// valor= unDia.getDay();
//console.log(valor);

/***ESTRUCTURAS DE CONTROL***/

// const logueado = true;
// if(logueado){
//     console.log('Si es estas logueado');
// } else {
//     console.log('Inicia Sesion');
// }


// let puntaje2;
// if (puntaje2) {
//     console.log('Si hay puntaje');
// } else {
//     console.log('No hay puntaje');
// }
// const puntaje = 1000;
// if (puntaje === '1000') {
//     console.log('Si es igual');
// } else {
//     console.log('No es igual');
// }
// //const edad = 18;
// // if(edad >= 18){
// //     console.log('Eres mayor de edad');
// // } else {
// //     console.log('No eres mayor de edad');
// // }

// let dinero = 500;
// let carrito=300;
// let  tarjeta = true;
// // if(dinero>carrito){
// //     console.log('Pago correcto');
// // } else if(tarjeta){
// //         console.log('Pagaste con tarjeta');
// // } else {
// //         console.log('Monto insuficiente');
// // }
// //Con or: 
// if(dinero>carrito || tarjeta){
//     console.log('Pago correcto');
// } else {
//         console.log('Monto insuficiente');
// }
// //Con Y:
// if(dinero>carrito && tarjeta){
//     console.log('Pago correcto');
// } else {
//         console.log('Monto insuficiente');
// }

// let hora = 8;
//     if(hora > 0 && hora <= 12){
//         console.log('Buenos dias');
//     }else if(hora > 12 && hora <= 18){
//         console.log('Buenos tardes');}
//         else if(hora > 18 && hora <= 24){
//             console.log('Buenos noches');}
//             else{
//                 console.log('Horario invalido '); 
//            }

/**TERNARIO**/
// let logueado = true;
// console.log( logueado ? 'Si si se logueo' : 'No se logueo');

 //SWITCH

//  const metodoPago = 'efectivo';
//  switch(metodoPago){
//      case 'efectivo':
//              console.log(`Pagaste con ${metodoPago}`);
//              break;
//              case 'cheque':
//              console.log(`Pagaste con ${metodoPago} revisaremos si tiene fondos`);
//              break;
//              case 'tarjeta':
//              console.log(`Pagaste con ${metodoPago} espere un momento`);
//              break;
//             default: 
//             console.log('metodo invalido '); 
//             break;
//             }

//**LOOPS***/
// for(let i = 0; i < 10; i++){
//     console.log(`Numero: ${i} `);
// }

// const carrito = ['producto 1', 'producto 2', 'producto 3'];
// console.log();

// for(let i = 0; i < carrito.length; i++){
//     console.log(`Producto en el carrito: ${carrito[i]} `);
// }

// let i= 0;
// while(i< 10){
//     console.log(`Numero: ${i} `);
    
// }
// let i= 10;
// do{

//     console.log(i);
//     i++;
// }while(i< 10);

//arreglo
// const pendiente = ['Tarea','Comer', 'Proyecto', 'Estudiar JS'];

// //arreglo con objeto

// const carrito = [
//     { id: 1, producto: 'libro'},
//     { id: 2, producto: 'camisa'},
//     { id: 3, producto: 'disco'}
// ];
// //un objeto

// let automovil = {
//     modelo: 'Camaro',
//     motor: 6.0
// }
// for (let i=0; i< pendiente.length; i++){
//     console.log(pendiente[i]);
// }
//otra forma

// for(pendientes of pendiente){
//     console.log(pendientes);
// }
// for(producto of carrito ){
//     console.log(producto.producto);
// }
// for(info of Object.values(automovil) ){
//     console.log(info);
// }
// Object.values(automovil).forEach(info => {
//     console.log(info);
// } );
// let nuevoArreglo= pendiente.forEach(function(pendientes){
// console.log(pendientes);
// });
// // es igual a este pendiente.forEach(pendientes => {
// // console.log(pendientes);
// // });
// //map crea una copia del arreglo
// let nuevoArreglo2= pendiente.map(pendientes  => {
//     console.log(pendientes);
//     return pendientes;
// }
//     )   //es igual a 
//     let nuevoArreglo2= pendiente.map(pendientes  => pendientes); 
//     console.log(nuevoArreglo); 
//     console.log(nuevoArreglo2);  
/**SCOOPE**/
// let musica = 'Rock';
// if(musica){
//     let musica = 'Grunge';
//     console.log('Dentro del if ' + musica );
// }
// console.log('Fuera del IF ' + musica);
/***Object Destructuring***/
// const cliente = {
//     nombre: 'Alejandra',
//     tipo: 'Premium',
//     datos : {
//         ubicacion: {
//             ciudad: 'Mexico',
//             pais: 'Mexico'
//         },
//         cuenta: {
//             desde: '10-12-2020',
//             saldo: 4000
//         }
//     },
//     gustos: {
//         musica: ['trance', 'rock']
//     }
// }
// // console.log(cliente);

// // //crear la variable
// // const nombreCliente = cliente.nombre;

// //aplicando destructuring

// // let {nombre, tipo} = cliente;
// // let {datos: {ubicacion: {ciudad}}} = cliente;
// // console.log(ciudad);
// // console.log(tipo);
// // let {datos: {cuenta: {saldo}}} = cliente;
// // console.log(saldo);
// let { gustos: musica} = cliente;
// console.log(musica);
/**Object Literal Enhacement**/
// const banda = 'Metallica',
// genero = 'Heavy metal',
// canciones = ['cancion1', 'cancion2', 'cancion3'];

// //version anterior
// // const metallica = {
// //     banda: banda,
// //     genero: genero,
// //     canciones: canciones
// // }
// //version nueva
// const metallica = { banda, genero, canciones }
// console.log(metallica);

//****.FILTER .FIND Y .REDUCE****/
// const personas = [
//     {nombre: 'Juan', edad: 20},
//     {nombre: 'Davida', edad: 50},
//     {nombre: 'Alejandra', edad: 22, aprendiendo: 'JavaScript'},
//     {nombre: 'Karen', edad: 28},
//     {nombre: 'Miguek', edad: 30}
// ];
// //obtener las personas mayores de 25
// // const mayores = personas.filter(persona =>  persona.edad > 25);

// //  console.log(mayores);

// //extraer inf de alejandra
// // const alejandra = personas.find(persona =>  persona.nombre === 'Alejandra');
// // console.log(alejandra);
// // let {aprendiendo} = alejandra
// // console.log(aprendiendo);

// //reduce
// let total = personas.reduce((edadTotal, persona) => {
// return edadTotal+persona.edad;

// },0);
// console.log(total/personas.length);

//***FETCH API***/
descargarUsuarios(30);
 
function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;
 
    //llamado a Fetch
    fetch (api)
    .then(respuesta => respuesta.json() )
    .then(datos => imprimirHTML( datos.results ) );
}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        console.log(usuario);
        const li = document.createElement('li');
        const { name: {first}, name: {last}, picture: {medium}, nat } = usuario;
        li.innerHTML = `
            Nombre: ${first} ${last}
            Pais: ${nat}
            imagen:   <img src="${medium}">
        `;
         document.querySelector('#app').appendChild(li);

    });
}
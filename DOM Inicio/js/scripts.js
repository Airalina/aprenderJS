
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    //GetElementById
    // var logo= document.getElementById('logo');
    // var navegacion = document.getElementById('navegacion');
      //getElementsByClassName
   /* var navegacion = document.getElementsByClassName("navegacion");
    console.log(navegacion[0]);
    var contenido = document.getElementsByClassName("contenido");
    console.log(contenido);*/
    //contenido[0].style.display = "none";
    //getElementbyTag
    // var enlances = document.getElementsByTagName('a');
    // console.log(enlances);
    // for(var i =0; i <enlances.length; i++){
    //   enlances[i].setAttribute('target', '_blank');
    // }
    //   var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    // console.log(enlacesSidebar);

    // for(var i=0; i< enlacesSidebar.length; i++){
    //   enlacesSidebar[i].setAttribute('href','http://www.google.com')
    // }
      // var logo = document.querySelector('#logo');
      // console.log(logo);
      // var encabezado = document.querySelectorAll(' h2');
      // console.log(encabezado[0].innerText);
      // var enlaces = document.querySelectorAll('a');
      // console.log(enlaces);
      // var enlace = document.querySelectorAll('a');

      // for(var i=0; i< enlace.length; i++){
      //   console.log(enlace[i].innerText);
      // }
      // var enlaces = document.querySelectorAll('#menu ul li a'); //o pones al lado del )[0]
      // console.log(enlaces[0].nodeType);
      // console.log(enlaces[0].nodeName);
      // console.log(enlaces[0].attributes);
      // console.log(enlaces[0].firstChild);
      // console.log(enlaces[0].firstChild.nodeValue);
      // enlaces[0].firstChild.nodeValue = "HOLA";
      // enlaces[0].id = "mi_ID";
    //crear contenido
//     var sidebar = document.querySelector('#sidebar');
// var nuevoElemento= document.createElement("H1");
// var nuevoTexto = document.createTextNode("Hola mundo");
// nuevoElemento.appendChild(nuevoTexto);
// sidebar.appendChild(nuevoElemento);
//  //agregar entrada 6 VA DE LO MICRO A MACRO
//  var enlacesSidebar = document.querySelectorAll('#sidebar ul');
//  //creando el enlace
//  var nuevoEnlace= document.createElement('A');
//  nuevoEnlace.setAttribute('href','#');
//  var textoEnlace= document.createTextNode('Entrada 6');
//  nuevoEnlace.appendChild(textoEnlace);
//  //crear lista
//  var nuevaLista= document.createElement('li');
//  nuevaLista.appendChild(nuevoEnlace);
//  //agregamos a menu
//  enlacesSidebar[0].appendChild(nuevaLista);
/**Clonar nodo***/
    // var contenido = document.querySelectorAll('main');
    // var nuevoContenido = contenido[0].cloneNode(true);
    // var sidebar = document.querySelector('aside');

    // sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5] );
//post mas visitados
// var sidebar = document.querySelector('aside');
// var masVisitados= document.createElement('H2');
// var textoVisitados= document.createTextNode('Posts mas visitados');
// masVisitados.appendChild(textoVisitados);
//creando lista de post populares
// sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);
//   var contenido = document.querySelectorAll('main h2');
//   for(var i = 0; i<contenido.length; i++){
//     var nuevoElemento = document.createElement('li');
//     var nuevoTexto= document.createTextNode(contenido[i].firstChild.nodeValue);
//     nuevoElemento.appendChild(nuevoTexto);
//     sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
//   }
//REMOVER NODOS eliminar
// var primerPost= document.querySelector('main article');
//     primerPost.parentNode.removeChild(primerPost);//debe llamarse al padre con parentNode

//   var enlaces= document.querySelector('#navegacion nav ul li a'); //con querySelectorAll si al lado del ()[posicion] ese se elimina
//   enlaces.parentNode.removeChild(enlaces);
//REEMPLAZAR NODOS
// var viejoNodo= document.querySelector('main h2');
// var nuevoNodo = document.querySelector('footer h2');
// viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);
 //reemplazar nodo con uno nuevo
 var nuevoTitulo= document.createElement('h2');
 var nuevoTexto= document.createTextNode('hola mundo');
 nuevoTitulo.appendChild(nuevoTexto);
 var viejoNodo= document.querySelector('main h2');
 viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);

  });
  
})();

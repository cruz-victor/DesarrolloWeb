//BY TAGNAME
// var cajas =document.getElementsByTagName('div');
// console.log(cajas);
// console.log(cajas[0]);

//BY CLASSNAME
// var cajas=document.getElementsByClassName('caja');
// console.log(cajas);
// console.log(cajas[0]);

//BY ID
// var caja=document.getElementById('primeraCaja');
// console.log(caja);
// caja.textContent = 'Hola Victor'

// var caja=document.getElementById('primeraCaja');
// caja.innerHTML = '<u>1.-Loren Ipsum</u>';

//AGREGANDO NODOS
// //1. Crear el elemento
// var caja1=document.createElement('div');
// //2. Crear un nodo de texto
// var contenido1=document.createTextNode('Caja 1');
// //3. Anadir el nodo de texto al elemento
// caja1.appendChild(contenido1);
// //4. Agregar atributos a la caja
// caja1.setAttribute('class','caja naranja');
// //5. Agregar el elemento al documento
// var contenedor=document.getElementById('contenedor');
// contenedor.appendChild(caja1);


//-----------------Ejercicio 1
// var caja2=document.createElement('div');
// var contenido2=document.createTextNode('Caja 2');
// caja2.appendChild(contenido2);
// caja2.setAttribute('class','caja');
// var contenedor=document.getElementById('contenedor');
// contenedor.appendChild(caja2);

//-----------------Ejercicio 2
var caja3=document.createElement('div');
var contenido3=document.createTextNode('Caja 3');
caja3.appendChild(contenido3);
caja3.setAttribute('class','caja naranja');

var contenedor=document.getElementById('contenedor');
contenedor.appendChild(caja3);


"use strict";
function Saludar(target) {
    target.prototype.saludos = function () {
        console.log('Hola desde decoradores');
    };
}
// @Saludar
// class Hola{
//     constructor(){}
// }
// let hola1=new Hola();
// hola1.saludos();

"use strict";
//Variable usuario que respecta/cumple el contrato de la interfaz definido
let usuario1 = { nombreUsuario: 'Victor', password: '1234', confirmaPassword: '1234' };
console.log(usuario1);
console.log(usuario1.nombreUsuario);
let avion = {
    // abordarTransporte:function(){
    //     console.log("abordando...");	
    // }
    // abordarTransporte():void{    
    //     console.log("abordando void...");
    // }
    abordarTransporte() {
        console.log("abordando void....");
    }
};
console.log(avion.abordarTransporte());

interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmaPassword?:string;    
}

//Variable usuario que respecta/cumple el contrato de la interfaz definido
let usuario1:Usuario = {nombreUsuario:'Victor', password:'1234', confirmaPassword:'1234'};
console.log(usuario1);
console.log(usuario1.nombreUsuario);

//------------------------------------------------------------------------
interface Abordar{
    //abordarTransporte():void;
    abordarTransporte():void;
}

let avion:Abordar={
    // abordarTransporte:function(){
    //     console.log("abordando...");	
    // }
    
    // abordarTransporte():void{    
    //     console.log("abordando void...");
    // }

    abordarTransporte(){    
        console.log("abordando void....");
    }

}

console.log(avion.abordarTransporte()); 


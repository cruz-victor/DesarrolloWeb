let suma=function(a:number, b:number){
    return a+b;
};

console.log(suma(5,3));

// let sumaFlecha=(a:number,b:number)=>{
//     return a+b;
// };

let sumaFlecha=(a:number,b:number)=>a+b;

console.log(sumaFlecha(5,4));

var obtenerNombre=function(){
    return 'Victor Cruz';
};

console.log(obtenerNombre());

let obtenerNombreFlecha=()=>'Victor Cruz Flecha';

console.log(obtenerNombreFlecha());
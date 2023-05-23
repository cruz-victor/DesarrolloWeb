"use strict";
class Persona {
    // public nombre:string;
    // nombre:string;
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
//ES6
let persona1 = new Persona('Victor');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());

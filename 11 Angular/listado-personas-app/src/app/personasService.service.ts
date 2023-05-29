import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";


export class PersonasService{
  personas:Persona[]=[
    new Persona('Victor','CG'),
    new Persona('Grace','CG'),
    new Persona('Elon','CG')];

  agregarPersona(persona:Persona){
    this.personas.push(persona);
  }
}

import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import { LoggingService } from "./loggingService.service";

@Injectable()
export class PersonasService{
  personas:Persona[]=[
    new Persona('Victor','CG'),
    new Persona('Grace','CG'),
    new Persona('Elon','CG')];

  saludar=new EventEmitter<number>();

  constructor(private loggingService:LoggingService) {}

  agregarPersona(persona:Persona){
    this.loggingService.enviaMensajeAconsoloca("agregamos a una personas: "+persona.nombre);
    this.personas.push(persona);
  }

  encontrarPersona(i: number) {
    let persona:Persona=this.personas[i];
    return persona;
  }

  modificarPersona(i: number, persona: Persona) {
    let persona2:Persona=this.personas[i];
    persona2.nombre=persona.nombre;
    persona2.apellido=persona.apellido;
    this.personas[i]=persona2; //Esta linea se puede oviar por que los datos son pasados por referencia
  }

  eliminarPersona(i:number) {
      this.personas.splice(i,1);
  }
}

import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import { LoggingService } from "./loggingService.service";

@Injectable()
export class PersonasService{
  personas:Persona[]=[
    new Persona('Victor','CG'),
    new Persona('Grace','CG'),
    new Persona('Elon','CG')];

  constructor(private loggingService:LoggingService) {}


  agregarPersona(persona:Persona){
    this.loggingService.enviaMensajeAconsoloca("agregamos a una personas: "+persona.nombre);
    this.personas.push(persona);
  }
}

import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import { LoggingService } from "./logging.service";
import { DataServices } from "./data.service";

@Injectable()
export class PersonasService{
  personas:Persona[]=[];
  // personas:Persona[]=[
  //   new Persona('Victor','CG'),
  //   new Persona('Grace','CG'),
  //   new Persona('Elon','CG')];

  saludar=new EventEmitter<number>();

  constructor(private loggingService:LoggingService,
    private dataService:DataServices) {}

  agregarPersona(persona:Persona){
    this.loggingService.enviaMensajeAconsoloca("agregamos a una personas: "+persona.nombre);
    if (this.personas==null) {
      this.personas=[];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
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
    this.dataService.modificarPersona(i, persona);
  }

  eliminarPersona(i:number) {
      this.personas.splice(i,1); //eliminacion en memoria
      this.dataService.eliminarPersona(i);//eliminacin en la base de datos
      this.modificarPersonas();//guardar en la base de datos todo el arreglo
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }

  setPersonas(personas: Persona[]) {
    this.personas=personas;
  }

  modificarPersonas(){
    if (this.personas!=null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }
}

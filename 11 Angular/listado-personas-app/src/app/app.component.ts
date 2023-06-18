import { Component, Inject, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './loggingService.service';
import { PersonasService } from './personasService.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string='Listado de personas';
  // // personas:Persona[]=[new Persona('Victor','CG'), new Persona('Grace','CG'), new Persona('Elon','CG')];
  // personas:Persona[]=[];

  // //ngOnInit() se ejecuta despues del constructor
  // ngOnInit():void{
  //   this.personas = this.personasService.personas;
  // }

  // constructor(private loggingService: LoggingService, private personasService:PersonasService){}
  // constructor(private loggingService: LoggingService, private personasService:PersonasService){}

  // personaAgregada(persona:Persona){
  //   this.loggingService.enviaMensajeAconsoloca('Persona agregada:'+persona.nombre);
  //   this.personas.push(persona);
  // }
}

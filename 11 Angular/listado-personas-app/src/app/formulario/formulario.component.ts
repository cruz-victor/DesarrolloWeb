import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { outputAst } from '@angular/compiler';
import { LoggingService } from '../loggingService.service';
import { PersonasService } from '../personasService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //providers:[LoggingService] //Inyeccion de dependencia

})
export class FormularioComponent {

  // @Output()
  // personaCreada=new EventEmitter<Persona>();


  // nombreInput:string='';
  // apellidoInput:string='';

  @ViewChild('nombreInput')
  nombreInput:ElementRef;

  @ViewChild('apellidoInput')
  apellidoInput:ElementRef;


  // agregarPersona(){
  //   let persona1=new Persona(this.nombreInput,this.apellidoInput);
  //   this.personaCreada.emit(persona1);
  // }

  // agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){
  //   let persona1=new Persona(nombreInput.value, apellidoInput.value);
  //   this.personaCreada.emit(persona1);
  // }

  //Inyeccion de dependencia
  constructor(private loggingService:LoggingService, private personaService:PersonasService){

  }

  agregarPersona(){
    let persona1=new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loggingService.enviaMensajeAconsoloca("Enviamos persona:"+persona1.nombre);
    this.personaService.agregarPersona(persona1);
    //this.personaCreada.emit(persona1);
  }
}

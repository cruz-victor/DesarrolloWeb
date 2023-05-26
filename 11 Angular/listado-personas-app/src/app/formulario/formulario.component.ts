import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output()
  personaCreada=new EventEmitter<Persona>();

  // nombreInput:string='';
  // apellidoInput:string='';

  // agregarPersona(){
  //   let persona1=new Persona(this.nombreInput,this.apellidoInput);
  //   this.personaCreada.emit(persona1);
  // }

  agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){
    let persona1=new Persona(nombreInput.value, apellidoInput.value);
    this.personaCreada.emit(persona1);
  }
}

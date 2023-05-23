import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string='Listado de personas';
  personas:Persona[]=[new Persona('Victor','CG'), new Persona('Grace','CG'), new Persona('Elon','CG')];
  nombreInput:string='';
  apellidoInput:string='';

  agregarPersona(){
    let persona1=new Persona(this.nombreInput,this.apellidoInput);
    this.personas.push(persona1);
  }
}

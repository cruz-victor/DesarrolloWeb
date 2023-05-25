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

  personaAgregada(persona:Persona){
    this.personas.push(persona);
  }
}

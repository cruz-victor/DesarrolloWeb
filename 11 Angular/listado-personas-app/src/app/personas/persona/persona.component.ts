import { Component, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personasService.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @Input()
  persona:Persona;

  @Input()
  i:number;

  constructor(private personasService: PersonasService){}

  emitirSaludo(){
    this.personasService.saludar.emit(this.i);
  }
}

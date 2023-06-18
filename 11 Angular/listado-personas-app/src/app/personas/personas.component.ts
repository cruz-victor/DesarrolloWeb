import { Component } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../loggingService.service';
import { PersonasService } from '../personasService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
personas:Persona[]=[];

ngOnInit():void{
  this.personas = this.personasService.personas;
}

constructor(private loggingService: LoggingService,
  private personasService:PersonasService,
  private router:Router){}

agregar(){
  this.router.navigate(['personas/agregar']);
}

}



import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../loggingService.service';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
personas:Persona[]=[];

constructor(private loggingService: LoggingService,
  private personasService:PersonasService,
  private router:Router){}

ngOnInit():void{
  //this.personas = this.personasService.personas;
  this.personasService.obtenerPersonas()
  .subscribe(
      (personas:Persona[]) => {
        this.personas=personas;
        this.personasService.setPersonas(personas);
    }
  );
}

agregar(){
  this.router.navigate(['personas/agregar']);
}

}



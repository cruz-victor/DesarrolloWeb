import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Persona } from '../../persona.model';
import { outputAst } from '@angular/compiler';
import { LoggingService } from '../../loggingService.service';
import { PersonasService } from '../../personasService.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //providers:[LoggingService] //Inyeccion de dependencia
})
export class FormularioComponent {
  // @Output()
  // personaCreada=new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';
  i: number;

  // @ViewChild('nombreInput')
  // nombreInput:ElementRef;

  // @ViewChild('apellidoInput')
  // apellidoInput:ElementRef;

  // agregarPersona(){
  //   let persona1=new Persona(this.nombreInput,this.apellidoInput);
  //   this.personaCreada.emit(persona1);
  // }

  // agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){
  //   let persona1=new Persona(nombreInput.value, apellidoInput.value);
  //   this.personaCreada.emit(persona1);
  // }

  //Inyeccion de dependencia
  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((i: number) =>
      alert('El indici es:' + i)
    );
  }

  // agregarPersona(){
  //   let persona1=new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
  //   this.loggingService.enviaMensajeAconsoloca("Enviamos persona:"+persona1.nombre);
  //   this.personasService.agregarPersona(persona1);
  //   //this.personaCreada.emit(persona1);
  // }

  ngOnInit() {
    this.i = this.route.snapshot.params['id'];
    if(this.i){ //Si el indice es diferente de nulo, entonces editar
      let persona:Persona=this.personasService.encontrarPersona(this.i);
      this.nombreInput=persona.nombre;
      this.apellidoInput=persona.apellido;
    }
  }

  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    // this.loggingService.enviaMensajeAconsoloca(
    //   'Enviamos persona:' + persona1.nombre
    // );

    if (this.i) { //modo edicion
      this.personasService.modificarPersona(this.i, persona1);
    }else{
      this.personasService.agregarPersona(persona1);
    }

    this.router.navigate(['personas']);
  }
}

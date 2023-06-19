import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';


@Injectable() //se inyectara otro servicio dentro de la clase DataService
export class DataServices {
  constructor(private httpClient:HttpClient){

  }

  guardarPersonas(personas:Persona[]){
    this.httpClient.put('https://listado-personas-2bfc9-default-rtdb.firebaseio.com/datos.json', personas)
    .subscribe(
        response=>console.log("Resultado guardar personas: "+response),
        error=>console.log("Error al guardar personas: "+error)
    );
  }

  cargarPersonas(){
    return this.httpClient.get<Persona[]>('https://listado-personas-2bfc9-default-rtdb.firebaseio.com/datos.json'); //retorna un objeto observable
  }
}

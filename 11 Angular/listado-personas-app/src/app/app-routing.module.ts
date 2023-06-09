import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

//Variables de rutas
// const routes:Routes = [
//   {path:'', component:PersonasComponent},
//   {path:'personas', component:PersonasComponent},
//   {path:'personas/agregar', component:FormularioComponent},
//   {path:'personas/:id', component:FormularioComponent}
// ]

const routes:Routes = [
  {path:'', component:PersonasComponent},
  {path:'personas', component:PersonasComponent, children:[
    {path:'agregar', component:FormularioComponent},
    {path:':id', component:FormularioComponent}
  ]},
  {path:'**', component:ErrorComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

//Archivo de rutas
export class AppRoutingModule {


}

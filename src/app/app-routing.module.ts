import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarCarroComponent } from './Componentes/agregar-carro/agregar-carro.component';
import { EditarCarroComponent } from './Componentes/editar-carro/editar-carro.component';
import { ListarCarroComponent } from './Componentes/listar-carro/listar-carro.component';

const routes: Routes = [

{path:'', pathMatch:'full', redirectTo:'agregar-carro.component'},
{path: 'agregar-carro', component:AgregarCarroComponent},
{path: 'listar-carro', component:ListarCarroComponent},
{path: 'editar-carro/:id', component:EditarCarroComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

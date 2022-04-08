import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarCarroComponent } from './Componentes/agregar-carro/agregar-carro.component';
import { EditarCarroComponent } from './Componentes/editar-carro/editar-carro.component';
import { ListarCarroComponent } from './Componentes/listar-carro/listar-carro.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AgregarCarroComponent,
    EditarCarroComponent,
    ListarCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

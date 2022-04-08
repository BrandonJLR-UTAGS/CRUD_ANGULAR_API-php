import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Carro } from './Carro';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/Carros/'; //API de php CRUDO ( API )

  constructor(private clienteHttp:HttpClient) { }

  AgregarCarro(datosCarro:Carro):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosCarro);


  }

  ObtenerCarros(){
    return this.clienteHttp.get(this.API);

  }

  BorrarCarro(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);


  }

  ObtenerCarro(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);


  }

  EditarCarro(id:any,datosCarro:Carro):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosCarro);
  }




}

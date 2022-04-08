import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';


@Component({
  selector: 'app-listar-carro',
  templateUrl: './listar-carro.component.html',
  styleUrls: ['./listar-carro.component.css']
})
export class ListarCarroComponent implements OnInit {

  Carros:any;


  constructor(
    private crudService:CrudService

  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerCarros().subscribe(respuesta=>{
      console.log(respuesta);
      this.Carros=respuesta;
    })
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar el registro?")){
    this.crudService.BorrarCarro(id).subscribe((respuesta)=>{
      this.Carros.splice(iControl,1);
    });
    }

  }




}

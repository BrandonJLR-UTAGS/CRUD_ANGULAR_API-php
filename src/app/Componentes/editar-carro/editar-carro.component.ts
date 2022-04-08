import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editar-carro',
  templateUrl: './editar-carro.component.html',
  styleUrls: ['./editar-carro.component.css']
})
export class EditarCarroComponent implements OnInit {
  formularioDeCarros:FormGroup;
  elID:any;

  constructor(
  private activeRoute:ActivatedRoute,
  private crudService:CrudService,
  public formulario:FormBuilder,
  private ruteador:Router
  ) {
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ObtenerCarro(this.elID).subscribe(
       respuesta=>{
        console.log(respuesta);
        this.formularioDeCarros.setValue({
        Modelo:respuesta[0]['nombre'],
        Descripcion:respuesta[0]['descripcion'],
        Precio:respuesta[0]['precio']
      });

      }
    );
    this.formularioDeCarros=this.formulario.group(
      {
        Modelo:[''],
        Descripcion:[''],
        Precio:['']
      }
    );

  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeCarros.value);


    this.crudService.EditarCarro(this.elID,this.formularioDeCarros.value).subscribe(()=>{
        this.ruteador.navigateByUrl('/listar-carro');
    });
    // this.crudService.EditarCarro(this.elID,this.formularioDeCarros.value).subscribe();


  }

}

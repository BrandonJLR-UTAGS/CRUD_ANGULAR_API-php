import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-agregar-carro',
  templateUrl: './agregar-carro.component.html',
  styleUrls: ['./agregar-carro.component.css']
})
export class AgregarCarroComponent implements OnInit {

  formularioDeCarros:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router

    ) {

    this.formularioDeCarros=this.formulario.group({
      Modelo:[''],
      Descripcion:[''],
      Precio:['']
    });
   }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log("Me presionaste");
    console.log(this.formularioDeCarros.value);
    this.crudService.AgregarCarro(this.formularioDeCarros.value).subscribe();

    this.ruteador.navigateByUrl('/listar-carro');
  }

}

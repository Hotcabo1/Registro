import { Component, OnInit } from '@angular/core';
// ----------------RECEPCION DE DATOS---------------------
import { FormGroup, FormBuilder } from '@angular/forms';

// ----------------RECEPCION DE DATOS---------------------
// ----------------Importamos la API---------------------
import { CrudService } from 'src/app/servicio/crud.service';
// ----------------Importamos la API---------------------

import { Router } from '@angular/router';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  formularioE:FormGroup;


  constructor(
    public formulario:FormBuilder,
    private CrudService:CrudService,
    private roteador:Router

    ) { 
    this.formularioE=this.formulario.group({
      nombre:(''),
      correo:('')
    });

  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log("Click");
    console.log(this.formularioE.value);
    this.CrudService.AgregarEmpleado(this.formularioE.value).subscribe();
    
    this.roteador.navigateByUrl('/show-people');

  }
}

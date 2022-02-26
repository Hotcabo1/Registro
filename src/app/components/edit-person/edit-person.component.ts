import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  formularEmpleados:FormGroup;
  elID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudservice:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ){
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudservice.EditarEmpleado(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularEmpleados.setValue({
          nombre:respuesta[0]['nombre'],
          correo:respuesta[0]['correo']

        });
      }
    );
    this.formularEmpleados=this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }
    

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularEmpleados.value);
    this.crudservice.EditarContenidoEmpleado(this.elID, this.formularEmpleados.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/show-people');
    });
  }



}

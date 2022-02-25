import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.css']
})
export class ShowPeopleComponent implements OnInit {
  
  Empleados:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerE().subscribe(resp=>{
      console.log(resp);
      this.Empleados=resp;
    });
  }
  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);

    this.crudService.EliminarEmpleado(id).subscribe((resp)=>{
      this.Empleados.splice(iControl,1);
      Swal.fire('¡Empleado eliminado!');
    });
    

  }

}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';


@Injectable({
  providedIn: 'root'
})
// --------------CRUD SERVICE-------------- //
export class CrudService {

  API: string="http://localhost/empleados-main/"; // Api proveniente del doc de PHP corriendo en servidor xampp

  constructor(private clienteHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1", datosEmpleado);
  }

  ObtenerE(){
    return this.clienteHttp.get(this.API);
  }

  EliminarEmpleado(id:Empleado):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+1);
  }

}
// --------------CRUD SERVICE-------------- //
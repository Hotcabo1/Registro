import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';


@Injectable({
  providedIn: 'root'
})
// --------------CRUD SERVICE-------------- //
export class CrudService {
API: string="http://localhost/empleados-main/"
  constructor(private clienteHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1", datosEmpleado);
  }
}
// --------------CRUD SERVICE-------------- //
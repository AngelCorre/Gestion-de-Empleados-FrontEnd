import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // La url obtiene el listado de los empleados en el backend

  constructor(private httpClient : HttpClient) { // crea una variable de tipo HttpClient

  }

  // Metodo para obtener empleados
  obtenerEmpleados(): Observable<Empleado[]> { // Se crea una funcion que retorna un observable de tipo lista de empleado

    return this.httpClient.get<Empleado[]>(`${baseUrl}`); // retorna


  }

  // Metodo para registrar un empleado
  guardarEmpleado(empleado:Empleado) : Observable<object> {

    return this.httpClient.post(`${baseUrl}`, empleado);

  }

  actualizarEmpleado(id:number, empleado:Empleado) : Observable<object> {

    return this.httpClient.put(`${baseUrl}/${id}`, empleado)


  }

  obtenerPorId(id:number) : Observable<Empleado> {

    return this.httpClient.get<Empleado>(`${baseUrl}/${id}`);

  }

  eliminarEmpleado(id:number) : Observable<Object> {

    return this.httpClient.delete(`${baseUrl}/${id}`)

  }



}

import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit{ // Implementamos OnInit

  empleados:Empleado[] // Lista llamada empleados de tipo Empleado de la clase empleado.ts

  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit(): void {

    this.obtenerEmpleados();


    /*
    this.empleados = [{ // Utilizamos la lista y la llenamos en formato Json

      "id":1,
      "nombre": "Mateo",
      "apellido": "Correa",
      "email": "mat@gmail.com"

    },{

      "id":2,
      "nombre": "Damaris",  
      "apellido": "Correa",
      "email": "da@gmail.com"

    }];*/


  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerEmpleados().subscribe(dato => {

      this.empleados = dato;

    })
  }

  actualizarEmpleado(id:number) {

    this.router.navigate(['actualizar', id]);

  }

  eliminarEmpleado(id:number) {

    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar al empleado',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      confirmButtonText: 'Si, confirmo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {

      if(result.value) {

        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {

          this.obtenerEmpleados();

          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          );
    
        });

      }

    })

  }

  detallesEmpleado(id:number) {

    this.router.navigate(['detalles', id]) // Nos redirecciona a detalles y gracias al routing module inclye el id

  }


}

import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado';
import { EmpleadoService } from '../../services/empleado.service';
import {Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent implements OnInit{
  
  empleado : Empleado = new Empleado();

  // Creamos dos parametros. Uno para llamar al metodo guardarEmpleado de ese servicio y otro para utilizar funciones del router
  constructor(private empleadoService: EmpleadoService, private router:Router){}
  
  ngOnInit(): void {

  }

  guardarEmpleado() { // Metodo para guardar empleado

    this.empleadoService.guardarEmpleado(this.empleado).subscribe(dato => {  // Nos suscribimos para resivir el objeto con los datos y guardarlos

      swal(
        'Empleado Registrado',
        'El empleado ha sido registrado con exito',
        'success'
      )

    },error => console.log(error)); // prevenimos errores
    this.redirectLista(); // llamamos al metodo que nos llevara a la lista
    
  }

  redirectLista() { // Metodo para redireccionar a la lista

    this.router.navigate(['/lista']); // Redireccionamos a la lista con su endpoint

  }


  onSubmit() { // Creamos un metodo llamado onSubmit que se usará al enviar el formulario

    this.guardarEmpleado(); // llamamos al metodo para guardar

  }

}

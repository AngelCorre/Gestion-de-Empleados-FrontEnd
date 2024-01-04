import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../empleado';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrl: './update-empleado.component.css'
})
export class UpdateEmpleadoComponent implements OnInit{
  
  id:number;
  nombre:String;
  apellido:String;
  email:String;
  empleado : Empleado = new Empleado;
  
  constructor(private empleadoService:EmpleadoService ,private router:Router, private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params["id"]; // Extraemos el id del path asociado con el componente update ubicado en routing module 
    this.empleadoService.obtenerPorId(this.id).subscribe(dato => { // Buscamos el usuario para traer sus datos
      
      this.empleado = dato
      
    });
  }
  
  actualizarEmpleado() {
    
    swal({
      
      title: '¿Estas seguro?',
      text: 'Confirma si deseas actualizar al empleado',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: "Si, confirmo",
      cancelButtonText: "No, cancelar",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      buttonsStyling: true
    }).then((result) => {
      
      if (result.value) {
        
        this.empleadoService.actualizarEmpleado(this.empleado.id, this.empleado).subscribe(dato => {
          
          swal(
            'Empleado actualizado',
            'El empleado ha sido actualizado con exito',
            'success'
            );
            
          });
          
          this.redirectList();
          
        }
        
      })
      
    }
    
    redirectList() {
      
      this.router.navigate(['/lista']);
      
    }
    
    onSubmit() {
      
      this.actualizarEmpleado();
      
    }
    
  }
  
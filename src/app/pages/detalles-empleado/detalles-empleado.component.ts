import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrl: './detalles-empleado.component.css'
})
export class DetallesEmpleadoComponent implements OnInit{
  
  id:number;
  empleado : Empleado = new Empleado;

  constructor(private empleadoService : EmpleadoService, private route : ActivatedRoute){}
  
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerPorId(this.id).subscribe(dato => {

      this.empleado = dato;
      
      swal(`Detalles del empleado ${this.empleado.nombre}`)

    });

  }

  

}

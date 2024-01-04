import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { SingupComponent } from './pages/singup/singup.component';
import { UpdateEmpleadoComponent } from './pages/update-empleado/update-empleado.component';
import { DetallesEmpleadoComponent } from './pages/detalles-empleado/detalles-empleado.component';

const routes: Routes = [
  {path: 'lista', component:ListaEmpleadosComponent}, // Enlazando el path con el componente correspondiente
  {path:'',redirectTo:'lista', pathMatch:'full'}, // Cuando el path esta vacio entonces redirecciona a un path establecido
  {path:'registrar', component:SingupComponent}, // Enlazando el path con el componente correspondiente
  {path:'actualizar/:id', component:UpdateEmpleadoComponent},
  {path:'detalles/:id', component:DetallesEmpleadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

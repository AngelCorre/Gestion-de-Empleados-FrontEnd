import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { SingupComponent } from './pages/singup/singup.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmpleadoComponent } from './pages/update-empleado/update-empleado.component';
import { DetallesEmpleadoComponent } from './pages/detalles-empleado/detalles-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    SingupComponent,
    UpdateEmpleadoComponent,
    DetallesEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Importamos HttpClientModule que nos permitira conectar al controlador backend
    FormsModule // Importamos FormsModule que nos permite utilizar los metodos para un formulario
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent {

  constructor(private router: Router, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {

  }

  agregarEmpleado() {

    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);
  }

  empleados: empleado[] = [];

  cuadroNombre: string = ""; //estic fent que la informació que introduim en el formulari, viatje a traves del NgModel "cuadroNombre", ací
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;


  volverHome() {
    this.router.navigate(['']);
  }

}

import { Component } from '@angular/core';
import { empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  titulo = 'Listado de empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {
    this.empleados = this.empleadosService.empleados;
  }
  empleados: empleado[] = [];


  agregarEmpleado() {

    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

  }

  cuadroNombre: string = ""; //estic fent que la informació que introduim en el formulari, viatje a traves del NgModel "cuadroNombre", ací
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
}


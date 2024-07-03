import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { empleado } from '../empleado.model';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent {

  constructor(private router: Router,  private route:ActivatedRoute, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {

  }

  empleados: empleado[] = [];


  agregarEmpleado() {

    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);

    this.indice = this.route.snapshot.params['id'];

    let empleado2: empleado = this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado2.nombre;
    this.cuadroApellido = empleado2.apellido;
    this.cuadroCargo = empleado2.cargo;
    this.cuadroSalario = empleado2.salario;
  }


  cuadroNombre: string = ""; //estic fent que la informació que introduim en el formulari, viatje a traves del NgModel "cuadroNombre", ací
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  indice: number;

  volverHome() {
    this.router.navigate(['']);
  }

}

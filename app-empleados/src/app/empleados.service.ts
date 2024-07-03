import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {

  }


  empleados: empleado[] = [ //Empleados es la clase
    new empleado("Juan", "Diaz", "Presidente", 7500),
    new empleado("Ana", "Martín", "Directora", 5500),
    new empleado("María", "Fdez", "Jefa sección", 3500),
    new empleado("Laura", "Lopez", "Admin", 2500),
  ];


  agregarEmpleadoServicio(empleado: empleado) {

    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregrar:" + "\n" +
      empleado.nombre + "\n " + "Salario:" + empleado.salario);
    this.empleados.push(empleado);
  }

  encontrarEmpleado(indice: number) {
    let empleado: empleado = this.empleados[indice];
    return empleado;

  }
}

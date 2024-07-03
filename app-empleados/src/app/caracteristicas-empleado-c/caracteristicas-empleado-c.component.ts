import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent implements OnInit{

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio2: ServicioEmpleadosService) { }


  ngOnInit():void { }

  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
    this.miServicio2.muestraMensaje(value);
  }

}

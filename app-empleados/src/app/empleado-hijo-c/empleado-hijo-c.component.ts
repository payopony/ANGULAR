import { Component, Input, OnInit } from '@angular/core';
import { empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDeLista: empleado;

  @Input() indice: number;

  constructor() { }

  ngOnInit(): void { }

  empleados: empleado[] = [ //Empleados es la clase
    new empleado("Juan", "Diaz", "Presidente", 7500),
    new empleado("Ana", "Martín", "Directora", 5500),
    new empleado("María", "Fdez", "Jefa sección", 3500),
    new empleado("Laura", "Lopez", "Admin", 2500),
  ];
  empleadoAgregado(empleado: empleado) {

    this.empleados.push(empleado);
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);

  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre:string="";
  apellido: string = "";
  cargo: string = "";
  entradas: { titulo: string }[];

  constructor() {
    this.entradas = [
      { titulo: "Python cada dia mas presente" },
      { titulo: "Java presente aaa" },
      { titulo: "JavaScript cada dia vez mas presente" },
      { titulo: "Kotlin maja" },
      { titulo: "Pascal dond quedo" }, 
    ]
  }

  registrarUsuario() {

    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito";
  }

}




export class empleado {


  constructor(nombre: string, apellido: string, cargo: string, salario: number) {

    this.nombre = nombre; //el 1er "nombre" fa referencia a nombre:string="", el 2n fa referncia a "nombre" del constructor
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;

  }

  nombre: string = "";
  apellido: string = "";
  cargo: string = "";
  salario: number = 0;

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  sumar(): void {
    this.resultado = this.numero1 + this.numero2; //this fa referencia a "resultado" de esta clase
    //  this.resultado = parseInt(this.numero1) + parseInt(this.numero2); si en app.component.html el inputType fora "text"  
  }

  restar(): void {
    this.resultado = this.numero1 - this.numero2;

  }

}

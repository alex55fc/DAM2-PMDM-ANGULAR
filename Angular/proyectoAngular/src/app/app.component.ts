// Importa el decorador 'Component' desde el módulo '@angular/core'
import { Component } from '@angular/core';

// Importa los módulos 'CommonModule' y 'RouterOutlet' desde '@angular/common' y '@angular/router' respectivamente
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './Alumnos/Alumno.component';

// Define un componente con metadatos
@Component({
  // Define el selector del componente, este será usado para insertar este componente en otros archivos HTML
  selector: 'app-root',  
  standalone: true,  
  imports: [CommonModule, RouterOutlet, AlumnoComponent],
  
  template: 
  //ngIf es para que si es true se muestre y si es false no se muestre
  `
    <img src="assets/tricolorr.jpg" width='200' *ngIf='visible'>
    <button (click)="onClick()">Pulsa aqui</button>
  `,
  /*`
    <div> 
      <h1>{{(encabezado == '')?getNombreCompleto() : 'No encontrado'}}</h1>
      <img src="{{imagen}}" alt="Logo Salesianos" width='200'>
      <el-alumno></el-alumno>
      <button [disabled]="desactivado">Pulsa aqui</button>
    </div>
  `,
  */
  // Define la ruta al archivo CSS que se usará para estilos específicos de este componente
  styleUrl: './app.component.css'
})

// Define la clase del componente
export class AppComponent {
  //depende de lo que pongamos en el encabeza aqui abajo se vera una cosa u otra en la pagina web
  encabezado = 'e';
  imagen : string = 'https://salesianosrioja.com/wp-content/uploads/2016/03/Logo-Salesianos_vertical.png';
  desactivado : boolean = false;
  nombre : string= 'Perico';
  apellido : string = 'Delgado'

  getNombreCompleto() : string {
    return this.nombre + ' '+ this.apellido;
  }
  //ejercicio imagen
  visible : boolean = true;
  onClick(): void{
    this.visible = false;
  }
}

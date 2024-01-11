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
  
  template: `
    <div> 
      <h1>{{encabezado}}</h1>
      <el-alumno></el-alumno>
    </div>
  `,
  // Define la ruta al archivo CSS que se usará para estilos específicos de este componente
  styleUrl: './app.component.css'
})

// Define la clase del componente
export class AppComponent {
  encabezado = 'Datos alumno';
}

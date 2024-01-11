import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'el-alumno',
  standalone: true,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './Alumno.component.html',  
  styleUrl: './Alumno.component.css'
})

// Define la clase del componente
export class AlumnoComponent {
    nombre: string = 'Perico';
    apellidos: string = 'Delgado';
    direccion: string = 'Madrid';
    edad: number = 20;

  }
  

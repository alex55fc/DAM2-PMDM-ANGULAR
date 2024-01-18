import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
// Define el selector del componente, este será usado para insertar este componente en otros archivos HTML
  selector: 'lista-alumnos',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './AlumnoLista.component.html',  
  styleUrl: './Alumno.component.css'
})

// Define la clase del componente
export class AlumnoListaComponent {
    //depende de lo que pongamos aqui abajo se vera una cosa u otra en la pagina web
    alumnos : any[] = [
        {nombre: 'Perico', apellidos: 'Delgado', direccion: 'Madrid', edad: 20},
        {nombre: 'Juan', apellidos: 'Garcia', direccion: 'Zaragoza', edad: 32},
        {nombre: 'Pedro', apellidos: 'Gomez', direccion: 'Pamplona', edad: 11},
        {nombre: 'Pablo', apellidos: 'Delgado', direccion: 'Madrid', edad: 22},
    ];

  }
  

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cuantos-alumno',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './AlumnosCount.component.html',  
  styleUrl: './AlumnosCount.component.css'
})

// Define la clase del componente
export class AlumnoCountComponent {
    //depende de lo que pongamos aqui abajo se vera una cosa u otra en la pagina web
    todos : number = 0;
    hombres : number = 0;
    mujeres : number = 0;
  }
  

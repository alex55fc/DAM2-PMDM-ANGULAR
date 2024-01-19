import { Component, Input } from '@angular/core';
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
    //usamos input para que el padre pueda pasarle parametros al hijo
    @Input()
    todos : number = 0;
    @Input()
    hombres : number = 0;
    @Input()
    mujeres : number = 0;
  }
  

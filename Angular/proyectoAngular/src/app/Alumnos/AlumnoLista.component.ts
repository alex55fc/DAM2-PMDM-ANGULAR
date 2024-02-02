import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoTituloPipe } from './AlumnoTitulo.pipe';
//para ejercicio de pasar parametros entre componentes 
import { AlumnoCountComponent } from './AlumnosCount.component';
import { IAlumno , Alumno} from './Alumno';
import { AlumnosService } from './AlumnosService';
@Component({
// Define el selector del componente, este será usado para insertar este componente en otros archivos HTML
  selector: 'lista-alumnos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoTituloPipe, AlumnoCountComponent],
  templateUrl: './AlumnoLista.component.html',  
  styleUrl: './Alumno.component.css',
  //como no se puede usar el servicio en el constructor, se debe declarar en el providers
  providers: [AlumnosService]
})

// Define la clase del componente
export class AlumnoListaComponent {
    //----------
    //esto  es para el ejercicio de pasar parametros entre componentes, del hijo al padre  
    seleccion : string = 'Todos';
    //este metodo es para que el padre pueda escuchar el evento
    alCambiar (opcionElegida : string) : void {
      this.seleccion = opcionElegida;
    }
    //---------
    //ejercicio con la interfaz
    alumnos : Alumno[];
    //ejercicio del service
    constructor(losAlumnos : AlumnosService) {
      this.alumnos = losAlumnos.getAlumnos();
    }

      //nuevo ejercicio pasar parametros de componente padre a hijo
      getNumTodos() : number {
        return this.alumnos.length;
      }
      // USAMOS 3 = para que compare el tipo de dato
      getNumHombres() : number {
        return this.alumnos.filter(a => a.sexo === 'Hombre').length;
      }
      getNumMujeres() : number {
        return this.alumnos.filter(a => a.sexo === 'Mujer').length;
      }

  }
  

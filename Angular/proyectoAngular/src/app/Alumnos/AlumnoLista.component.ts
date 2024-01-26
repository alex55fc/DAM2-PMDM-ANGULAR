import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoTituloPipe } from './AlumnoTitulo.pipe';
//para ejercicio de pasar parametros entre componentes 
import { AlumnoCountComponent } from './AlumnosCount.component';
import { IAlumno , Alumno} from './Alumno';
@Component({
// Define el selector del componente, este será usado para insertar este componente en otros archivos HTML
  selector: 'lista-alumnos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoTituloPipe, AlumnoCountComponent],
  templateUrl: './AlumnoLista.component.html',  
  styleUrl: './Alumno.component.css'
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
    constructor() {
      this.alumnos = [
        {nombre: 'Perico', apellidos: 'Delgado', direccion: 'Madrid', fnac: '02/28/1999', sexo: 'Hombre', nom_padre: 'ee'},
        {nombre: 'Juan', apellidos: 'Garcia', direccion: 'Zaragoza', fnac: '02/28/1998', sexo: 'Hombre'},
        {nombre: 'Pedro', apellidos: 'Gomez', direccion: 'Pamplona', fnac: '02/28/1997', sexo: 'Mujer'},
        {nombre: 'Pablo', apellidos: 'Delgado', direccion: 'Madrid', fnac: '02/28/1996', sexo: 'Hombre'},
        ]
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
  

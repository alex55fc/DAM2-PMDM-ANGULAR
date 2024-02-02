import { Injectable } from "@angular/core";
import { Alumno } from "./Alumno";
@Injectable()
export class AlumnosService {
    getAlumnos(): Alumno[] {
        return [
            { nombre: 'Perico', apellidos: 'Delgado', direccion: 'Madrid', fnac: '02/28/1999', sexo: 'Hombre', nom_padre: 'ee' },
            { nombre: 'Juan', apellidos: 'Garcia', direccion: 'Zaragoza', fnac: '02/28/1998', sexo: 'Hombre' },
            { nombre: 'Pedro', apellidos: 'Gomez', direccion: 'Pamplona', fnac: '02/28/1997', sexo: 'Mujer' },
            { nombre: 'Pablo', apellidos: 'Delgado', direccion: 'Madrid', fnac: '02/28/1996', sexo: 'Hombre' },
        ]
    }
}
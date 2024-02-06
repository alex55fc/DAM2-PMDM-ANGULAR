import { Injectable } from "@angular/core";
import { Alumno } from "./Alumno";
@Injectable()
export class AlumnosService {
    getAlumnos(): Alumno[] {
        return [
        ]
    }
}
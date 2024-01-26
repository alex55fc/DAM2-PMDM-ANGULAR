export interface IAlumno {
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;
    nom_padre?: string;
}
export class Alumno implements IAlumno {
    constructor(public nombre: string,public apellidos: string,public direccion: string,public fnac: string,public sexo: string, public nom_padre? : string) {
    }

}
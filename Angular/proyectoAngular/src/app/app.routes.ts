import { Routes } from '@angular/router';
import { AlumnoListaComponent } from './Alumnos/AlumnoLista.component';
import { ProfesorComponent } from './Profesores/Profesor.cmp';
import { PaginaNoEncontradaComponent } from './Otros/PaginaNoEncontrada';

export const routes: Routes = [
    //el path es el nombre que se le da a la ruta para poder acceder a ella desde el navegador
    //http://localhost:4200/(path)
    {path: 'Alumnos', component: AlumnoListaComponent},
    {path: 'Profesores', component: ProfesorComponent},
    // si no se especifica ninguna ruta, se redirige a la pagina de Profesores
    {path: '', redirectTo: '/Profesores', pathMatch: 'full'},
    // si no se encuentra la ruta, se redirige a la pagina de error
    {path: '**', component: PaginaNoEncontradaComponent}
];

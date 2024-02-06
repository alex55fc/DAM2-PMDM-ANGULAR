import { Injectable, NgModule } from "@angular/core";
import { Alumno } from "./Alumno";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
	imports: [HttpClientModule],
	providers: [HttpClient]
})
@Injectable({
    providedIn: 'root'
})
export class AlumnosService {
    //el servicio se encarga de hacer la peticion al servidor
    constructor(private http: HttpClient) {
    }
    getAlumnosFromAPI(): Observable<Alumno[]> {
        return this.http.get<Alumno[]>("https://localhost:44367/api/Alumno");
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://backend-4f2f.onrender.com/proyectos/';
  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<any>{
    return this.http.get(this.URL + 'traer');
  }

  public addProyecto(agregar:any){
    return this.http.post<proyecto>(this.URL + 'crear', agregar)
  }
  
  public editProyecto(edit:proyecto){
    return this.http.put<proyecto>(this.URL + 'editar/'+ edit.id , edit)
  }
  
  public Eliminar(id:any){
    return this.http.delete<any>(this.URL + 'borrar/'+ id)
  }

  public getProyectoById(id:number){
    return this.http.get<number>(this.URL + id)
  }

  
}
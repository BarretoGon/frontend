import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../models/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'http://localhost:8080/experiencias/';
  constructor(private http: HttpClient) { }

 
  getExperiencia(): Observable<any>{
    return this.http.get(this.URL + 'traer')
  }

  addExperiencia(agregar:any){
    return this.http.post<experiencia>(this.URL + 'crear', agregar)
  }
  
  editExperiencia(edit:experiencia){
    return this.http.put<experiencia>(this.URL + 'editar/'+ edit.id , edit)
  }
  
  Eliminar(id:any){
    return this.http.delete<any>(this.URL + 'borrar/'+ id)
  }

  public getExperienciaById(id:number){
    return this.http.get<number>(this.URL + id)
  }
}


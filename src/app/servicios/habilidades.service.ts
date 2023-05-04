import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidad } from '../models/habilidad';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  URL = 'https://backend-4f2f.onrender.com/habilidades/';
  constructor(private http: HttpClient) { }

  public getHabilidad(): Observable<any>{
    return this.http.get(this.URL + 'traer');
  }

  public addHabilidad(agregar:any){
    return this.http.post<habilidad>(this.URL + 'crear', agregar)
  }
  
  public editHabilidad(edit:habilidad){
    return this.http.put<habilidad>(this.URL + 'editar/'+ edit.id , edit)
  }
  
  public Eliminar(id:any){
    return this.http.delete<any>(this.URL + 'borrar/'+ id)
  }

  public getHabilidadById(id:number){
    return this.http.get<number>(this.URL + id)
  }

  
}
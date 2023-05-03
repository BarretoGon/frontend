import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { estudio } from '../models/estudio';


@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  URL = 'http://localhost:8080/estudios/';
  constructor(private http: HttpClient) { }

  public getEstudio(): Observable<any>{
    return this.http.get(this.URL + 'traer');
  }

  public addEstudio(agregar:any){
    return this.http.post<estudio>(this.URL + 'crear', agregar)
  }
  
  public editEstudio(edit:estudio){
    return this.http.put<estudio>(this.URL + 'editar/'+ edit.id , edit)
  }
  
  public Eliminar(id:any){
    return this.http.delete<any>(this.URL + 'borrar/'+ id)
  }

  public getEstudioById(id:number){
    return this.http.get<number>(this.URL + id)
  }

  
}
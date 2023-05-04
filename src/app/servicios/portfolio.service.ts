import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona';
import{AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient, private afauth: AngularFireAuth) { }

    url="https://backend-4f2f.onrender.com/personas/";

    obtenerDatos():Observable<any>{

      return this.http.get(this.url+"traer");

      
    }


    public getPersonaById(Persona:persona): Observable<any>{
      return this.http.get<persona>(this.url + Persona.id);
    }

    public eliminarDatos(id:any){
      return this.http.delete<any>(this.url + 'borrar/'+ id)
    }


    public editPersona(Persona:persona): Observable<any>{
      return this.http.put<persona>(this.url + 'editar/'+ Persona.id, Persona);
    }
    

    getUserLogged(){
      return this.afauth.authState;
    }
  
    logout(){
      this.afauth.signOut();
    }

  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

import { HabilidadService } from 'src/app/servicios/habilidades.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent  implements OnInit{

  Habilidad:any;
  editHabilidad:any;
  agregarHabilidad:any;
  HabilidadById:any;
  formHabilidad:FormGroup;
 
  ngOnInit(): void {
    this.GetHabilidad();
  }

  constructor(public habilidadService : HabilidadService, private router:Router, private formBuilder: FormBuilder,  private authService:AuthService  ){
    this.formHabilidad = this.formBuilder.group({
      id:['',[]],
      nombre:['',[Validators.required]],
      porcentaje:['',[Validators.required]]
    })
  }

  userLogged=this.authService.getUserLogged();

  GetHabilidad():void{
    this.habilidadService.getHabilidad().subscribe(result => {
      console.log(result); 
      this.Habilidad = result;
    });
  }


  
  AgregarHabilidad(event : Event){
    event.preventDefault;
    console.log("agregar hab");
    this.agregarHabilidad = {
      "nombre": this.formHabilidad.value.nombre,
      "porcentaje": this.formHabilidad.value.porcentaje,
      }
    this.habilidadService.addHabilidad(this.agregarHabilidad).subscribe(data => {
      console.log(data); 
    });
    setTimeout(this.recargar, 1000);
  }

  recargar(){ 
    location.reload();
  }

  vaciarForm(){
    console.log("vaciar formulario");
    this.formHabilidad.setValue({id:"",nombre:"",img:"",porcentaje:""});
  }

  EliminarHabilidad(){
    const id = this.formHabilidad.value.id;
    this.habilidadService.Eliminar(id).subscribe(data => {
      console.log(data); 
    });
    setTimeout(this.recargar, 1000);
  }

  EditarHabilidad(){
    this.editHabilidad = {
      "id": this.formHabilidad.value.id,
      "nombre": this.formHabilidad.value.nombre,
      "porcentaje": this.formHabilidad.value.porcentaje,
      }
    this.habilidadService.editHabilidad(this.editHabilidad).subscribe(data => {
      console.log("Editado"); 
    });
    setTimeout(this.recargar, 1000);
 }

  GetEditHabilidad(id:number){
    this.habilidadService.getHabilidadById(id).subscribe(result => { 
      this.HabilidadById = result;
      this.formHabilidad.setValue({
        id:this.HabilidadById.id,
        nombre:this.HabilidadById.nombre,
        porcentaje:this.HabilidadById.porcentaje,
      });
    });
  }

}

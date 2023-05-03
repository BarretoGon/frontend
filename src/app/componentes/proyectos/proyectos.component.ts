import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
//import { getAuth } from 'firebase/auth';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  
  Proyecto:any;
  editProyecto:any;
  agregarProyecto:any;
  ProyectoById:any;
  formProyecto:FormGroup;
  
 constructor(public proyectoService : ProyectosService, private router:Router, private formBuilder: FormBuilder, private authService: AuthService ){
  this.formProyecto = this.formBuilder.group({
    id:['',[]],
    nombre:['',[Validators.required]],
    descripcion:['',[Validators.required]],
    link:['',[Validators.required]]
  })
 }

 userLogged=this.authService.getUserLogged();


  ngOnInit(): void {
   
    
    
    this.GetProyecto();
  }

  GetProyecto():void{
    this.proyectoService.getProyecto().subscribe(data => {
      console.log(data); 
      this.Proyecto = data; 
    });
  }
  


  
  AgregarProyecto(event : Event){
    event.preventDefault;
    console.log("agregar");
    this.agregarProyecto = {
      "nombre": this.formProyecto.value.nombre,
      "descripcion": this.formProyecto.value.descripcion,
      "link": this.formProyecto.value.link,
      }
    this.proyectoService.addProyecto(this.agregarProyecto).subscribe(data => {
      console.log(data); 
    });
    setTimeout(this.recargar, 1000);
  }

  vaciarForm(){
    console.log("vaciar formulario");
    this.formProyecto.setValue({id:"",nombre:"",descripcion:"",link:""});
  }

  EliminarProyecto(){
    const id = this.formProyecto.value.id;
    this.proyectoService.Eliminar(id).subscribe(data => {
      console.log(data); 
    });
    setTimeout(this.recargar, 1000);
  }

  recargar(){ 
    location.reload();
  }

  EditarProyecto(){
    this.editProyecto = {
      "id": this.formProyecto.value.id,
      "nombre": this.formProyecto.value.nombre,
      "descripcion": this.formProyecto.value.descripcion,
      "link": this.formProyecto.value.link,
      }
    this.proyectoService.editProyecto(this.editProyecto).subscribe(data => {
      console.log("Editado");
      location.reload(); 
    });
 }

  GetEditProyecto(id:number){
    this.proyectoService.getProyectoById(id).subscribe(result => { 
      this.ProyectoById = result;
      this.formProyecto.setValue({
        id:this.ProyectoById.id,
        nombre:this.ProyectoById.nombre,
        descripcion:this.ProyectoById.descripcion,
        link:this.ProyectoById.link
      });
    });
  }
  
}
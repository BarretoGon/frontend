import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

import { EstudioService} from 'src/app/servicios/estudios.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent  implements OnInit{

  editEstudio:any;
  agregarEstudio:any;
  EstudioById:any;
  formEstudio:FormGroup;

  
  constructor(public estudioService : EstudioService, private router:Router, private formBuilder: FormBuilder, private authService:AuthService ){

    this.formEstudio = this.formBuilder.group({
      id:['',[]],
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      periodo_inicio:['',[Validators.required]],
      periodo_fin:['',[Validators.required]]
    })
  }

  userLogged=this.authService.getUserLogged();

  Estudio:any;
  ngOnInit(): void {
   
    
    
    this.GetEstudio();
  }

  GetEstudio():void{
    this.estudioService.getEstudio().subscribe(data => {
      console.log(data); 
      this.Estudio = data; 
    });
  }


  
  AgregarEstudio(event : Event){
    event.preventDefault;
    console.log("agregar exp");
    this.agregarEstudio = {
      "nombre": this.formEstudio.value.nombre,
      "descripcion": this.formEstudio.value.descripcion,
      "periodo_inicio": this.formEstudio.value.periodo_inicio,
      "periodo_fin": this.formEstudio.value.periodo_fin,
      }
    this.estudioService.addEstudio(this.agregarEstudio).subscribe(data => {
      console.log(data); 
    });
    setTimeout(this.recargar, 1000);
  }
  
  recargar(){ 
    location.reload();
  }


  vaciarForm(){
    console.log("vaciar formulario");
    this.formEstudio.setValue({id:"",nombre:"",descripcion:"",periodo_inicio:"",periodo_fin:""});
  }


  EliminarEstudio(){
    const id = this.formEstudio.value.id;
    this.estudioService.Eliminar(id).subscribe(data => {
      console.log(data); 
    });
    setTimeout(this.recargar, 1000);
  }

  
  EditarEstudio(){
    this.editEstudio = {
      "id": this.formEstudio.value.id,
      "nombre": this.formEstudio.value.nombre,
      "descripcion": this.formEstudio.value.descripcion,
      "periodo_inicio": this.formEstudio.value.periodo_inicio,
      "periodo_fin": this.formEstudio.value.periodo_fin,
      }
    this.estudioService.editEstudio(this.editEstudio).subscribe(data => {
      console.log("Editado"); 
    });
    setTimeout(this.recargar, 1000);
 }

  GetEditEstudio(id:number){
    this.estudioService.getEstudioById(id).subscribe(result => { 
      this.EstudioById = result;
      this.formEstudio.setValue({
        id:this.EstudioById.id,
        nombre:this.EstudioById.nombre,
        descripcion:this.EstudioById.descripcion,
        periodo_inicio:this.EstudioById.periodo_inicio,
        periodo_fin:this.EstudioById.periodo_fin
      });
    });
  }
}

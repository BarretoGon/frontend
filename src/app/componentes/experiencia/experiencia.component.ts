import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
 
  educacionList:any;

  formexp:FormGroup;
  Experiencia:any=[];
  edit:any;
  agregar:any;
  ExperienciaById:any;
 
  id:any;

  experiencia:any;
    constructor(public experienciaService  : ExperienciaService,  private router:Router, private formBuilder: FormBuilder, private authService:AuthService ){ 
      this.formexp = this.formBuilder.group({
        id:['',[]],
        nombre:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        periodo_inicio:['',[Validators.required]],
        periodo_fin:['',[Validators.required]]
      })

    }


    userLogged=this.authService.getUserLogged();


    ngOnInit(): void{
      
      this.GetExperiencia();
      
    }
    recargar(){ 
      location.reload();
    }


    GetExperiencia():void{
      this.experienciaService.getExperiencia().subscribe(data => {
        console.log(data); 
        this.Experiencia = data;
      });
    }

    Eliminarexp(){
      const id = this.formexp.value.id;
      this.experienciaService.Eliminar(id).subscribe(data => {
        console.log(data); 
      });

      setTimeout(this.recargar, 1000);
     
    }


    Agregarexp(event : Event):void{
      event.preventDefault;
      console.log("agregar exp");
      this.agregar = {
        "nombre": this.formexp.value.nombre,
        "descripcion": this.formexp.value.descripcion,
        "periodo_inicio": this.formexp.value.periodo_inicio,
        "periodo_fin": this.formexp.value.periodo_fin,
        }
      this.experienciaService.addExperiencia(this.agregar).subscribe(() => {
        console.log("agregado"); 
      });
      console.log("agregado"); 
      setTimeout(this.recargar, 1000);
      
    }

    vaciarForm(){
      console.log("vaciar formulario");
      this.formexp.setValue({id:"",nombre:"",descripcion:"",periodo_inicio:"",periodo_fin:""});
    }

    
  Editarexp(){
    this.edit = {
      "id": this.formexp.value.id,
      "nombre": this.formexp.value.nombre,
      "descripcion": this.formexp.value.descripcion,
      "periodo_inicio": this.formexp.value.periodo_inicio,
      "periodo_fin": this.formexp.value.periodo_fin,
      }
    this.experienciaService.editExperiencia(this.edit).subscribe(data => {
      console.log("Editado"); 
    });

    setTimeout(this.recargar, 1000);
   
   }

   GetEdit(id:number){
    this.experienciaService.getExperienciaById(id).subscribe(result => { 
      this.ExperienciaById = result;
      this.formexp.setValue({
        id:this.ExperienciaById.id,
        nombre:this.ExperienciaById.nombre,
        descripcion:this.ExperienciaById.descripcion,
        periodo_inicio:this.ExperienciaById.periodo_inicio,
        periodo_fin:this.ExperienciaById.periodo_fin
      });
    });
  }
  
   
}

import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

//import { AuthService } from 'src/app/servicios/auth.service';
import { getAuth } from 'firebase/auth';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  id:any;
  form:FormGroup;
  editarPer:any;
  

  perfil:any;
  constructor(private datosPortfolio:PortfolioService, private formBuilder : FormBuilder, private authService: AuthService){
    this.form = this.formBuilder.group({
      id:['',[Validators.required]],
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      edad:['',[Validators.required]],
      domicilio:['',[Validators.required]],
      fechaNac:['',[Validators.required]],
      telefono:['',[Validators.required]],
      correo:['',[Validators.required]],
      sobre_mi:['',[Validators.required]],
      url_foto:['',[Validators.required]],
      titulo:['',[Validators.required]],
   
    })



  }

  recargar(){ 
    location.reload();
  }


    ngOnInit(): void{
      
     
      this.GetPerfil();
      
    }


    GetPerfil():void{
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.perfil=data;
      });
    }

  

    Editar(){
      console.log(this.form); 
     
      this.perfil = {
        "id": this.form.value.id,
        "nombre": this.form.value.nombre,
        "apellido": this.form.value.apellido,
        "url_foto": this.form.value.url_foto,
        "titulo": this.form.value.titulo,
        "sobre_mi": this.form.value.sobre_mi,
        "edad": this.form.value.edad,
        "domicilio": this.form.value.domicilio,
        "fechaNac": this.form.value.fechaNac,
        "correo": this.form.value.correo,
        "telefono": this.form.value.telefono,
        }
      this.datosPortfolio.editPersona(this.perfil).subscribe(data => {
        console.log(this.perfil);
        this.datosPortfolio.obtenerDatos().subscribe(data => {
          this.perfil = data;
        }); 

        setTimeout(this.recargar, 500);
      });


   }

    
      
   userLogged=this.authService.getUserLogged();
    
   /*
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url = jdbc:mysql://localhost:3306/portfolio?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect


   */


}

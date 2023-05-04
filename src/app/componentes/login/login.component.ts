import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario={
    email:'',
    password:''
  }
  constructor(private authService: AuthService){

  }

 
  Ingresar(){

    console.log(this.usuario);
    const {email,password}=this.usuario;
    this.authService.login(email,password).then(res => {
      console.log("se logeo", res);
      window.location.href = "https://portfolio-firebase-auth-bd6f8.web.app";
   
    })
    
  }

  obtenerUsuaroLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    });
  }

  logout(){
    this.authService.logout();
  }


  userLogged=this.authService.getUserLogged();

}

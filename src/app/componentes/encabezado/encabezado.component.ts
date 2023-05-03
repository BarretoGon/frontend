import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { getAuth } from 'firebase/auth';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  
  miPorfolio:any;
 

    ngOnInit(): void{
      
    }

    constructor(private authService: AuthService){
        
    }
   
    /*
    obtenerUsuaroLogeado(){
      this.authService.getUserLogged().subscribe(res=>{
        console.log(res?.email);
      });
    }
  
    */
  

    logout(){
      this.authService.logout();
    }
  
    userLogged=this.authService.getUserLogged();
  
}

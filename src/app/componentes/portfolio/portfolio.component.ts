import { Component } from '@angular/core';

import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private authService: AuthService){

  }
  userLogged=this.authService.getUserLogged();
  
}

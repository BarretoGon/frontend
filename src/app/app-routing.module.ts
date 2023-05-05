import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  {path:'portfolio',component:PortfolioComponent},
  {path:'login',component:LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

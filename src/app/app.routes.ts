import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { Home } from './home/home';
import { peticiones } from './peticiones/peticiones';
import { Peticion } from './peticion/peticion';

export const routes: Routes = [
  { path: '', component: LoginComponent },      
  { path: 'home', component: Home },
  {path:'petiones',component:peticiones},
  {path:'peticion',component:Peticion}     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

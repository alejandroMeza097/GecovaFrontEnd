import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar-component/navbar-component";
import { ImgcarruselComponent } from "./imgcarrusel-component/imgcarrusel-component";
import { NotificacionesComponent } from "./notificaciones-component/notificaciones-component";
import { AnunciosComponent } from "./anuncios-component/anuncios-component";
import { AccesosComponent } from "./accesos-component/accesos-component";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ImgcarruselComponent, NotificacionesComponent, AnunciosComponent, AccesosComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private router:Router){}
  
  irAPeticiones(){
    this.router.navigate(['/petiones'])
  }

}

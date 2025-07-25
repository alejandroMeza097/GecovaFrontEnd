import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login-component/login-component";
import { Home } from "./home/home";
import { peticiones } from "./peticiones/peticiones";
import { Peticion } from "./peticion/peticion";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, Home, peticiones, Peticion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GecovaFront');
}

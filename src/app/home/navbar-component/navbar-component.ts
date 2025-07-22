import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  constructor(public auth: Auth) {}

  logOut() {
    this.auth.logout();
  }
}

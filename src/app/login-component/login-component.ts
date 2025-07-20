import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 



export interface Usuario {
  username: string;
  password: string;
 
}


@Component({
  selector: 'login-component',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})


export class LoginComponent {

  //propiedad formulario
  loginForm !: FormGroup;
  
  //datos de prueba
  private usuarios: Usuario[] = [
    { username: 'alex', password: '1234' },
    { username: 'maria', password: 'abcd' },
    { username: 'juan', password: '5678'}
  ];



  //constructor del formulario...
  constructor(private fb:FormBuilder, private router:Router){
    this.loginForm = this.fb.group({
      //campos del formulario...
      username:['',[Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required,Validators.minLength(4)]]

    });
  }

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password');
  }

onSubmit() {
  if (this.loginForm.valid) {  //verifica que los inputs del formulario pasen las validaciones

    const username = this.loginForm.value.username;  //extraccion de valores ingresados por el usuario
    const password = this.loginForm.value.password;
   
    const usuarioEncontrado = this.usuarios.find(
      u => u.username === username && u.password === password //
    );

    if (usuarioEncontrado) {
      console.log("Usuario autenticado:", usuarioEncontrado);
      this.router.navigate(['/home']); 

    } else {
      console.log("Credenciales incorrectas");
      alert("Usuario o contraseña incorrectos");
    }
  } else {
    console.log("Formulario no válido");
    this.loginForm.markAllAsTouched();
  }
}

}

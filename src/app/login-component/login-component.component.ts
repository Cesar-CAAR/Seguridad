import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router'
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})

export class LoginComponentComponent {

  constructor(private api: ApiService, private router: Router) {}

  usuario = '';
  password = '';

  login() {

    this.api.login(this.usuario, this.password).subscribe({
      next: (data) => {
        this.api.guardarToken(data.token); // Guardamos token
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert("Usuario o contraseña incorrectos");
      }
    });

  }

}

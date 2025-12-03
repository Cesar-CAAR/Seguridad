import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registrar-component',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './registrar-component.component.html',
  styleUrl: './registrar-component.component.css'
})
export class RegistrarComponentComponent {

  usuario = '';
  password = '';
  confirmPassword = '';

  constructor(private api: ApiService) {}

  registrar() {

    if (this.password !== this.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    this.api.register(this.usuario, this.password).subscribe({
      next: (resp) => {
        alert("Usuario registrado correctamente");
      },
      error: (err) => {
        alert("Error al registrar usuario");
      }
    });

  }
}

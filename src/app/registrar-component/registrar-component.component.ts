import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registrar-component',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './registrar-component.component.html',
  styleUrl: './registrar-component.component.css'
})
export class RegistrarComponentComponent {

  usuario = '';
  password = '';
  confirmPassword = '';

  verPassword = false;
  verPassword2 = false;

  // Estados de validación
  validaLongitud = false;
  validaMayuscula = false;
  validaMinuscula = false;
  validaNumero = false;
  validaEspecial = false;

  mensajeExito = false;

  constructor(private api: ApiService,private router: Router) {}

  // ---- VALIDACIONES EN TIEMPO REAL ---- //
  validarPassword() {
    this.validaLongitud = this.password.length >= 8;
    this.validaMayuscula = /[A-Z]/.test(this.password);
    this.validaMinuscula = /[a-z]/.test(this.password);
    this.validaNumero = /[0-9]/.test(this.password);
    this.validaEspecial = /[!@#$%^&*.\-]/.test(this.password);
  }

  // Validación general del formulario
  get formValido() {
    return (
      this.usuario.length > 0 &&
      this.validaLongitud &&
      this.validaMayuscula &&
      this.validaMinuscula &&
      this.validaNumero &&
      this.validaEspecial &&
      this.password === this.confirmPassword
    );
  }

  // -------- REGISTRAR USUARIO ------ //
  registrar() {
  if (!this.formValido) return;

  this.api.register(this.usuario, this.password).subscribe({
    next: () => {
      this.mensajeExito = true;

      setTimeout(() => {
        this.router.navigate(['/']); // login
      }, 1500);
    },
    error: (err) => {
      console.error(err);
      alert("Error: no se pudo registrar el usuario");
    }
  });
}

}

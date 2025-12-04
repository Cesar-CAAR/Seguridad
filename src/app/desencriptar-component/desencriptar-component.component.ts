import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../shared/menu/menu.component';
@Component({
  selector: 'app-desencriptar-component',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, MenuComponent],
  templateUrl: './desencriptar-component.component.html',
  styleUrl: './desencriptar-component.component.css'
})
export class DesencriptarComponentComponent {

  textoEncriptado = '';
  textoPlano = '';

  errorLongitud = false;

  MIN_CARACTERES = 10;
  constructor(private api: ApiService) {}

  desencriptar() {

    if(this.textoEncriptado.length < this.MIN_CARACTERES) {
      this.errorLongitud = true;
      return;
    }

    this.api.decrypt(this.textoEncriptado).subscribe({
      next: (data) => {
        this.textoPlano = data.decrypted;
      },
      error: () => alert("Texto no válido o token expiró")
    });
  }

}

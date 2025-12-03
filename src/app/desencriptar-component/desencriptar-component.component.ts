import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-desencriptar-component',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './desencriptar-component.component.html',
  styleUrl: './desencriptar-component.component.css'
})
export class DesencriptarComponentComponent {

  textoEncriptado = '';
  textoPlano = '';

  constructor(private api: ApiService) {}

  desencriptar() {
    this.api.decrypt(this.textoEncriptado).subscribe({
      next: (data) => {
        this.textoPlano = data.decrypted;
      },
      error: () => alert("Texto no válido o token expiró")
    });
  }

}

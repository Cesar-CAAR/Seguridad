import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-encriptar-component',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './encriptar-component.component.html',
  styleUrl: './encriptar-component.component.css'
})
export class EncriptarComponentComponent {

  texto = '';
  textoEncriptado = '';
  cargando = false; // ⬅ para mostrar spinner o deshabilitar botón

  constructor(private api: ApiService) {}

  async encriptar() {
    this.cargando = true;

    try {
      const data = await firstValueFrom(this.api.encrypt(this.texto));
      console.log(data);
      this.textoEncriptado = data.encrypted;


    } catch (error) {
      alert("Error al encriptar");
    } finally {
      this.cargando = false;
    }

  }
}

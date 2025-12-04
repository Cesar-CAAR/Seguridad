import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:7087/api';

  constructor(private http: HttpClient) { }

  // ===============================
  //  AUTH
  // ===============================
  login(usuario: string, contraseña: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth/login`, {
      nombreUsuario: usuario,
      password: contraseña
    }).pipe(
      tap(resp => {
        if (resp.token) {
          this.guardarToken(resp.token);
        }
      })
    );
  }

  register(usuario: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth/register`, {
      nombreUsuario: usuario,
      password: contraseña
    });
  }

  // Guardar token local
  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
  localStorage.removeItem('token');
}


  // ===============================
  //  ENCRIPTAR
  // ===============================
  encrypt(texto: string): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.obtenerToken()}`
    });

    return this.http.post(`${this.apiUrl}/crypto/encrypt`,
      { texto },
      { headers }
    );
  }

  // ===============================
  //  DESENCRIPTAR
  // ===============================
  decrypt(textoEncriptado: string): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.obtenerToken()}`
    });

    return this.http.post(`${this.apiUrl}/crypto/decrypt`,
      { textoEncriptado },
      { headers }
    );
  }

}

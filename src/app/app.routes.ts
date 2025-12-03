import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component'
import { RegistrarComponentComponent } from './registrar-component/registrar-component.component'
import { HomeComponent } from './home/home.component'
import { EncriptarComponentComponent } from './encriptar-component/encriptar-component.component'
import { DesencriptarComponentComponent } from './desencriptar-component/desencriptar-component.component'

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponentComponent },

    { path: 'registrar', component: RegistrarComponentComponent },
    { path: 'home', component: HomeComponent },
    { path: 'encriptar', component: EncriptarComponentComponent },
    { path: 'desencriptar', component: DesencriptarComponentComponent },
];

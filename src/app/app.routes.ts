import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component'
import { RegistrarComponentComponent } from './registrar-component/registrar-component.component'
import { HomeComponent } from './home/home.component'
import { EncriptarComponentComponent } from './encriptar-component/encriptar-component.component'
import { DesencriptarComponentComponent } from './desencriptar-component/desencriptar-component.component'
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponentComponent },

    { path: 'registrar', component: RegistrarComponentComponent },
    //Rutas protegidas
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'encriptar', component: EncriptarComponentComponent, canActivate: [AuthGuard] },
    { path: 'desencriptar', component: DesencriptarComponentComponent, canActivate: [AuthGuard] },

    { path: '**', redirectTo: '' }
];

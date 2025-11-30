import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component'
import { RegistrarComponentComponent } from './registrar-component/registrar-component.component'

export const routes: Routes = [
    { path: '', component: LoginComponentComponent },
    { path: 'registrar', component: RegistrarComponentComponent},
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component'; // Importa el componente de registro

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a /login
  { path: 'login', component: LoginComponent },         // Ruta para login
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Ruta para recuperar contraseña
  { path: 'register', component: RegisterComponent } // Ruta para registro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

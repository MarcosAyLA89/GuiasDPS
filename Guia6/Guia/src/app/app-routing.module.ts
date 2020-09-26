import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar todos los componentes para los que se debe activar el servicio de navegación
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "./guard/auth.guard";
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {
  //RUTA DONDE VA ANGULAR
  path: 'ejercicio1',
  //ESTA LINEA MUESTRA EN PANTALLA EL COMPONENTE EL MUY OBJETO HTML
  component:Ejercicio1Component
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
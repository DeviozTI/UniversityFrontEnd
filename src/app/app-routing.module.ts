import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PerfilUsuariosComponent } from './perfil-usuarios/perfil-usuarios.component';
import { RegistrosDeVentasComponent } from './registros-de-ventas/registros-de-ventas.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'perfil-usuario', component: PerfilUsuariosComponent},
  {path: 'registro-de-ventas', component: RegistrosDeVentasComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

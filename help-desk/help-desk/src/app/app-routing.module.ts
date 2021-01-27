import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent }
];

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'login' },
//   { path: 'login', pathMatch: 'full', redirectTo: 'login' },
//   { path: 'login', pathMatch: 'full', redirectTo: 'login' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

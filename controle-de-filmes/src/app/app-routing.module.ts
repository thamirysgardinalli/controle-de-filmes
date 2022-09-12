import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ListarFilmeComponent } from './listar-filme/listar-filme.component';
import { LoginComponent } from './login/login.component';
import { NenhumFilmeComponent } from './nenhum-filme/nenhum-filme.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: BemVindoComponent },
  { path: 'cadastrar', component: CadastrarFilmeComponent},
  { path: 'listar', component: ListarFilmeComponent},
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NenhumFilmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

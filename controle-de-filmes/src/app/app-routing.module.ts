import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component';
import { ListarFilmeComponent } from './listar-filme/listar-filme.component';
import { NenhumFilmeComponent } from './nenhum-filme/nenhum-filme.component';

const routes: Routes = [
  { path: 'inicio', component: BemVindoComponent },
  { path: 'cadastrar', component: CadastrarFilmeComponent},
  { path: 'listar', component: ListarFilmeComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: NenhumFilmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

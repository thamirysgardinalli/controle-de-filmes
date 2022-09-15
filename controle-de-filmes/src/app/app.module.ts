import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TopComponent } from './top/top.component';
import { MenuComponent } from './menu/menu.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { LoginComponent } from './login/login.component';
import { NenhumFilmeComponent } from './nenhum-filme/nenhum-filme.component';
import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component';
import { ListarFilmeComponent } from './listar-filme/listar-filme.component';
import { ModalMensagemComponent } from './modal-mensagem/modal-mensagem.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopComponent,
    MenuComponent,
    BemVindoComponent,
    LoginComponent,
    NenhumFilmeComponent,
    CadastrarFilmeComponent,
    ListarFilmeComponent,
    ModalMensagemComponent,
    CadastrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

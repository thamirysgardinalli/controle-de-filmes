import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { UsuarioStorageService } from './usuario-storage.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
  providers: [UsuarioStorageService]
})
export class CadastrarUsuarioComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  usuario!: Usuario;
  usuarios?: Usuario[];

  usuarioResenha: string = '';

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private usuarioService: UsuarioStorageService) {}

  ngOnInit(): void {
    this.usuario = new Usuario('', '');
    this.usuarios = this.usuarioService.getUsuarios();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.usuarioService.isExist(this.usuario.nome)) {
      this.usuarioService.save(this.usuario);
    } else {
      this.usuarioService.update(this.usuario);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.usuario = new Usuario('', '');

    this.usuarios = this.usuarioService.getUsuarios();
  }

  onEdit(usuario: Usuario) {
    let clone = Usuario.clone(usuario);
    this.usuario = clone;
  }

  onDelete(usuarioNome: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + usuarioNome
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.usuarioService.delete(usuarioNome);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'Usuário removido com sucesso!';
    } else {
      this.message = 'O usuário não pode ser removido!';
    }
    this.usuarios = this.usuarioService.getUsuarios();
  }
}

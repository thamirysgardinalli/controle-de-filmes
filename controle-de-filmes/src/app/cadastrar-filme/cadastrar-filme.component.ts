import { Component, OnInit, ViewChild } from '@angular/core';
import { Filme } from '../model/filme';
import { Usuario } from '../model/usuario';
import { FilmeService } from '../services/filme-service';
import { NgForm } from '@angular/forms';
import { Assistido } from '../model/opcoes';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  //usuario!: Usuario;
  filme!: Filme;

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filme = new Filme('', '', 0, '', Assistido.queroAssistir);
  }

  onSubmit() {
    this.filmeService
      .do(this.filme)
      .then(() => {
        this.onSucesso()
      })
      .catch((e) => {
        this.modal.show = true;
        this.modal.title = 'Erro';
        this.modal.text = 'Não foi possível salvar o filme!';
      })
  }

  onSucesso() {
    this.modal.show = true;
    this.modal.title = 'Aviso!';
    this.modal.text = `Cadastro efetuado com sucesso`;
  }

  onCloseModal() {
    this.modal.show = false;
  }

  onAssistidoChange(event: Event) {
    this.filme.assistido = (event.target as HTMLInputElement)
      .value as Assistido;
  }

}

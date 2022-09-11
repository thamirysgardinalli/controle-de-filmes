import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent implements OnInit {

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSucesso() {
    this.modal.show = true;
    this.modal.title = 'Aviso!';
    this.modal.text = `Cadastro efetuado com sucesso`;
  }

  onCloseModal() {
    this.modal.show = false;
  }

}

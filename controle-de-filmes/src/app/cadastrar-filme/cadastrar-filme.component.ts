import { Component, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { Filme } from '../model/filme';
import { FilmeService } from '../services/filme-service';
import { NgForm, NgModel } from '@angular/forms';
import { Assistido } from '../model/opcoes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  filme!: Filme;

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeService
  ) 
  {
    this.filme = new Filme();
  }

  ngOnInit() {
    if (this.route.snapshot.params['id'] != null){
      let idFilme = this.route.snapshot.params['id'];

      this.filmeService.getById(idFilme).subscribe({
        next: (data) => {
          this.filme = data;
        },
        error: (error) => {
          alert('Não foi possível buscar os dados do filme');
        }
      });
    } else {
      this.filme = new Filme();
    }
  }

  onSubmit() {
    this.filmeService
      .do(this.filme)
      .then(() => {
        this.onSucesso();
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

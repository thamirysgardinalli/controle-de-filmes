import { Component, OnInit } from '@angular/core';
import { Filme } from '../model/filme';
import { Assistido } from '../model/opcoes';
import { FilmePromiseService } from '../services/filme-promise-service';
import { FilmeService } from '../services/filme-service';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.css']
})
export class ListarFilmeComponent implements OnInit {
  filme: Filme;
  filmes?: Filme[];

  constructor(
    private filmePromiseService: FilmePromiseService, 
    private filmeService: FilmeService
  ) 
  {
    this.filme = new Filme('', '', 0, '', Assistido.queroAssistir);
  }

  ngOnInit(): void {
    this.filmePromiseService.getAll().subscribe({
      next: (data) => {
        this.filmes = data;
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  onEdit(filme: Filme){
    let cloneFilme: Filme = Filme.clone(filme);
    this.filme = cloneFilme;
  }

  onDelete(id: number) {
    this.filmeService.onDelete(this.filme.id);
  }

}

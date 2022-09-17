import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private filmeService: FilmeService,
    private router: Router
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
    this.router.navigate(['/cadastrar', {id: filme.id}]);
  }

  onDelete(id: string) {
    this.filmeService.onDelete(id);
  }

}

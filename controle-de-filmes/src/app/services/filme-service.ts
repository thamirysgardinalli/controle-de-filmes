import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { Filme } from "../model/filme";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FilmePromiseService } from "./filme-promise-service";

@Injectable({
    providedIn: 'root',
})
export class FilmeService {
    URL = 'http://localhost:3000/filmes';
   
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    filme!: Filme;
    filmes?: Filme[];

    constructor(private filmePromiseService: FilmePromiseService, private httpClient: HttpClient){
        
    }

    do(filme: Filme): Promise<Filme> {
        const p = new Promise<Filme>((resolve, reject) => {
            let p1 = this.filmePromiseService.save(filme);
            Promise.all([p1])
            .then((filmes) => {
              resolve(filmes[0]);
            })
            .catch((e) => {
              reject('Não foi possível salvar o filme!');
            });
        });
        return p;
    }

    onEdit(filme: Filme): Promise<Filme> {
        const p = new Promise<Filme>((resolve, reject) => {
            let p1 = this.filmePromiseService.update(filme);
            Promise.all([p1])
            .then((filmes) => {
              resolve(filmes[0]);
            })
            .catch((e) => {
              reject('Não foi possível salvar o filme!');
            });
        });
        return p;
    }

    getById(id: string): Observable<Filme> {
      const query: HttpParams = new HttpParams().set('id', id);
      const options = id ? { params: query } : {};
  
      return this.httpClient.get<Filme>(`${'http://localhost:3000/filmes'}`, options).pipe();
    }

    onDelete(id: string): Observable<Filme> {
        return this.httpClient.delete<Filme>(`${this.URL}/${id}`, this.httpOptions);
    }
}
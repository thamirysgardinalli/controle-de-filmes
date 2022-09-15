import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../model/filme';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FilmePromiseService {
    URL = 'http://localhost:3000/filmes';
   
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  
    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<Filme[]>{
        return this.httpClient.get<Filme[]>(`${this.URL}`);
    }

    getById(id: number): Observable<Filme> {
        return this.httpClient.get<Filme>(`${this.URL}/${id}`);
    }
  
    save(filme: Filme): Promise<Filme> {
      return firstValueFrom(this.httpClient
        .post<Filme>(this.URL, JSON.stringify(filme), this.httpOptions));
    }
  
    patch(filme: Filme): Promise<Filme> {
      return firstValueFrom(this.httpClient
        .patch<Filme>(
            `${this.URL}/${filme.id}`,
            JSON.stringify(filme),
            this.httpOptions
        ));
    }
  
    update(filme: Filme): Promise<Filme> {
      return firstValueFrom(this.httpClient
        .put<Filme>(
            `${this.URL}/${filme.id}`,
            JSON.stringify(filme),
            this.httpOptions
        ));
    }
}
  
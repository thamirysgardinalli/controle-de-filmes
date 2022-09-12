import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Usuario } from '../model/usuario';
import { UtilStorage } from 'src/utilStorage';
  

@Injectable()
export class UsuarioStorageService {
    usuarios!: Usuario[];
    private usuarioSource: BehaviorSubject<number>;
    constructor() {
      this.usuarios = UtilStorage.get('usuarios') || [];
      this.usuarioSource = new BehaviorSubject<number>(this.usuarios.length);
    }

    save(usuario: Usuario) {
      this.usuarios.push(usuario);
      UtilStorage.set('usuarios', this.usuarios);
      this.usuarios = UtilStorage.get('usuarios') || [];
    }
  
    update(usuario: Usuario) {
      this.delete(usuario.nome);
      this.save(usuario);
    }
  
    delete(nomeUsuario: string): boolean {
      if (this.usuarios != null){
      this.usuarios = this.usuarios.filter((u) => {
        return u.nome?.valueOf() != nomeUsuario?.valueOf();
      });
    }
  
      UtilStorage.set('usuarios', this.usuarios);
      return true;
    }
  
    isExist(value: string): boolean {
      for (let u of this.usuarios) {
        if (u.nome?.valueOf() == value?.valueOf()) {
          return true;
        }
      }
      return false;
    }
  
    getUsuarios(): Usuario[] {
      return this.usuarios;
    }
  
    asObservable(): Observable<number> {
      return this.usuarioSource;
    }
}

export class Usuario {
    id!: string;
    nome: string;
    senha: string;

    constructor(nome: string, senha: string){
        this.id = String(Math.round(Math.random() * 1000));
        this.nome = nome;
        this.senha = senha;
    }

    public static clone(usuario: Usuario){
        let u: Usuario = new Usuario(usuario.nome, usuario.senha);
        u.nome = usuario.nome;
        u.senha = usuario.senha;
        return u;
    }

    public static toWS(usuario: Usuario) {
        let u: Usuario = new Usuario(usuario.nome, usuario.senha);
        u.nome = usuario.nome;
        u.senha = usuario.senha;
        return u;
      }
}
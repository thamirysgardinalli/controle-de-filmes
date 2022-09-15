import { Assistido } from "./opcoes";

export class Filme {
    public id: string;
    public nome: string;
    public genero: string;
    public anoLancamento: number;
    public diretor: string;
    public assistido: Assistido;
    public idUsuario!: string;

    constructor(nome: string, genero: string, anoLancamento: number, diretor: string, assistido: Assistido){
        this.id = String(Math.round(Math.random() * 1000));
        this.nome = nome;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
        this.diretor = diretor;
        this.assistido = assistido;
    }

    public static clone(filme: Filme) {
        let f: Filme = new Filme(filme.nome, filme.genero, filme.anoLancamento, filme.diretor,filme.assistido);
        
        f.nome = filme.nome;
        f.genero = filme.genero;
        f.anoLancamento = filme.anoLancamento;
        f.diretor = filme.diretor;
        f.assistido = filme.assistido;
        
        return f;
    }
}
export class Produto {
  constructor(
    public id: number,
    public nome: string,
    public descricao: string,
    public preco: number,
    public precoAntigo: number,
    public imagem: string,
    public valor: number,
    public descritivo: string,
    public quantidade: number,
    public especificacoes: string[]

  ) {}
}

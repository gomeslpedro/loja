import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  public mensagem: string = '';
  public filtro: string = '';
  public lista: Produto[] = []; 
  searchTerm: string = '';

  constructor(
    private sharedService: SharedService,
    private http: HttpClient 
  ) {}

  ngOnInit() {
    this.sharedService.currentSearchTerm.subscribe((term) => {
      this.searchTerm = term;
      this.filtro = this.searchTerm;
      this.buscarProdutos(); 
    });
  }

  buscarProdutos(): void {
    const url = 'http://localhost:8090/api/produtos';
    this.http.get<Produto[]>(url).subscribe({
      next: (produtos) => {
        this.lista = produtos;
      },
      error: (err) => {
        console.error('Erro ao buscar produtos:', err);
        this.mensagem = 'Erro ao carregar produtos! :( Tente novamente mais tarde.';
      },
    });
  }

  public verDetalhe(item: Produto): void {
    localStorage.setItem('produto', JSON.stringify(item));
    window.location.href = './detalhes';
  }

  public adicionarItem(obj: Produto): void {
    let json = localStorage.getItem('cesta');
    let jsonCliente = localStorage.getItem('cliente');
    let cesta: Cesta = new Cesta();
    let item: Item = new Item();

    if (json == null) {
      item.codigo = obj.id;
      item.produto = obj;
      item.quantidade = 1;
      item.valor = obj.valor;
      cesta.codigo = 1;
      cesta.total = obj.valor;
      cesta.itens.push(item);
      if (jsonCliente != null) cesta.cliente = JSON.parse(jsonCliente);
    } else {
      let achou = false;
      cesta = JSON.parse(json);
      for (let i = 0; i < cesta.itens.length; i++) {
        if (cesta.itens[i].codigo == obj.id) {
          cesta.itens[i].quantidade += 1;
          cesta.itens[i].valor = cesta.itens[i].quantidade * cesta.itens[i].produto.valor;
          achou = true;
          break;
        }
      }
      if (!achou) {
        item.codigo = obj.id;
        item.produto = obj;
        item.quantidade = 1;
        item.valor = obj.valor;
        cesta.itens.push(item);
      }
    }

    cesta.total = 0;
    for (let i = 0; i < cesta.itens.length; i++) {
      cesta.total = cesta.itens[i].valor + cesta.total;
    }

    localStorage.setItem('cesta', JSON.stringify(cesta));
    window.location.href = './cesta';
  }
}

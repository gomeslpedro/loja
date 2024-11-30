import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  public mensagem: string = "";
  public item: Produto | null = null; 
  public areSpecificationsVisible: boolean = false;

  constructor(private router: Router) {
    let json = localStorage.getItem("produto");
    if (json != null) {
      this.item = JSON.parse(json);  
    } else {
      this.mensagem = "Produto não encontrado!";
      this.item = null;
    }  
  }

  public adicionarItem(obj: Produto) {
    let json = localStorage.getItem("cesta");
    let jsonCliente = localStorage.getItem("cliente");
    let cesta: Cesta = new Cesta();
    let item: Item = new Item();
  
    if (json == null) { 
      item.codigo = obj.id;
      item.produto = obj;
      item.quantidade = 1;
      cesta.codigo = 1;
      cesta.total = obj.preco;
      cesta.itens.push(item);
      if (jsonCliente != null) cesta.cliente = JSON.parse(jsonCliente);
    } else {  
      let achou = false;
      cesta = JSON.parse(json);
      for (let i = 0; i < cesta.itens.length; i++) {
        if (cesta.itens[i].codigo == obj.id) {  
          cesta.itens[i].quantidade += 1;
          cesta.itens[i].valor = cesta.itens[i].quantidade * cesta.itens[i].produto.preco;
          achou = true;
          break;
        }
      }
      if (!achou) {  
        item.codigo = obj.id;
        item.produto = obj;
        item.quantidade = 1;
        item.valor = obj.preco;
        cesta.itens.push(item);
      }
    }
  
    cesta.total = cesta.itens.reduce((total, it) => total + it.valor, 0);
    localStorage.setItem("cesta", JSON.stringify(cesta));
    this.router.navigate(['/cesta']); 
  }

  toggleSpecifications() {
    this.areSpecificationsVisible = !this.areSpecificationsVisible;
  }

  ngOnInit() {
    if (this.item && this.item.especificacoes) {
      if (typeof this.item.especificacoes === 'string') {
        this.item.especificacoes = JSON.parse(this.item.especificacoes);
      }
    }
  }
}
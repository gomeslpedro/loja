import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  public mensagem: string = "";
  public cesta: Cesta = new Cesta();

  constructor(){
    // Recupera a cesta do localStorage
    let json = localStorage.getItem("cesta");
    if(json != null) {
      this.cesta = JSON.parse(json);
    } else {
      this.mensagem = "Cesta vazia, adicione novos itens!";  
    } 
  }

  // Método para remover um item da cesta
  public removerItem(obj: Item) {
    // Filtra a lista de itens para remover o item desejado
    this.cesta.itens = this.cesta.itens.filter(item => item != obj);  
    
    // Recalcula o total da cesta
    this.cesta.total = 0;
    for(let i = 0; i < this.cesta.itens.length; i++) {
      this.cesta.total = this.cesta.itens[i].valor + this.cesta.total;
    }

    // Atualiza a cesta no localStorage
    localStorage.setItem("cesta", JSON.stringify(this.cesta));    
  }

  // Método para limpar toda a cesta
  public limparCesta() {
    // Remove a cesta do localStorage
    localStorage.removeItem("cesta");
    
    // Reseta a cesta local
    this.cesta = new Cesta();
    this.mensagem = "Cesta vazia, adicione novos itens!";  
  }
}

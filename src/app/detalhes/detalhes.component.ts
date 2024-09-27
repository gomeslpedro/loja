import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

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

  constructor() {
    let json = localStorage.getItem("produto");
    if (json != null) {
      this.item = JSON.parse(json);  
    } else {
      this.mensagem = "Produto não encontrado!";
      this.item = null;
    }  
  }

  toggleSpecifications() {
    this.areSpecificationsVisible = !this.areSpecificationsVisible;
  }
}

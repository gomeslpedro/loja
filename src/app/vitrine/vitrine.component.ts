import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { Produto } from '../model/produto';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {
  public mensagem: string = "Conheça as nossas promoções";
  public lista: Produto[] = [
    new Produto(1, 'Cadeira Gamer TGT Sight FA, Preta E Vermelha', 'Cadeira confortável para jogos', 700.00, 800.00, '/cadeira1.jpg', 700.00, 'A TGT Sight FA é um produto ideal se você está procurando uma cadeira gamer com ótima qualidade e custo benefício. Seu assento utiliza espuma regular, sua base é de ferro e além disso, ela utiliza um pistão de alta durabilidade, tudo para que você se sinta confortável independente se vai passar horas jogando ou trabalhando', 2, ['Cor: Azul', 'Tamanho: M', 'Material: Algodão']),
    new Produto(2, 'Samsung Smart TV 50" UHD 4K 7500UHD OLED', 'Samsung Smart TV com processador Crystal 4K', 700.00, 1800.00, '/televisao1.png', 700.00, 'A TGT Sight FA é um produto ideal se você está procurando uma cadeira gamer com ótima qualidade e custo benefício. Seu assento utiliza espuma regular, sua base é de ferro e além disso, ela utiliza um pistão de alta durabilidade, tudo para que você se sinta confortável independente se vai passar horas jogando ou trabalhando', 2, ['Cor: Azul', 'Tamanho: M', 'Material: Algodão', 'Bababa: NUNUNU', 'BABABABA', 'BBUBUBU']),
    new Produto(3, 'Mouse Gamer Redragon Storm Elite Branco ED400', 'Mouse Gamer com 16000DPI e iluminação RGB', 700.00, 1800.00, '/mouse1.jpg', 700.00, '', 2, ['Cor: Azul', 'Tamanho: M', 'Material: Algodão']),
    new Produto(4, 'Tênis Nike Mc Trainer 2 Preto Zyne Pro', 'Tênis Nike masculino, confortável e estiloso', 336.99, 419.99, '/tenis2.png', 700.00, 'A TGT Sight FA é um produto ideal se você está procurando uma cadeira gamer com ótima qualidade e custo benefício. Seu assento utiliza espuma regular, sua base é de ferro e além disso, ela utiliza um pistão de alta durabilidade, tudo para que você se sinta confortável independente se vai passar horas jogando ou trabalhando', 0, ['Cor: Azul', 'Tamanho: M', 'Material: Algodão'])
  ];

  constructor(private router: Router) {} 

  public navigateToDetalhe(item: Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    this.router.navigate(['/detalhes']); 
  }
}

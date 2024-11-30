import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutoService } from '../service/produto.service'; 
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css'],
})
export class VitrineComponent implements OnInit {
  public mensagem: string = 'Conheça as nossas promoções';
  public lista: Produto[] = []; 
  
  public countdownTime: string | null = null;  
  private timer: any;

  constructor(private router: Router, private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos(); 
    this.restoreCountdown();  
  }

  
  carregarProdutos(): void {
    this.produtoService.listarTodos().subscribe(
      (data) => {
        this.lista = data; 
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

 
  public navigateToDetalhe(item: Produto): void {
    localStorage.setItem('produto', JSON.stringify(item));
    this.router.navigate(['/detalhes']);
    window.scrollTo(0, 0);
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
      item.valor = obj.preco;
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
    localStorage.setItem('cesta', JSON.stringify(cesta));
    window.location.href = './cesta';
  }

  
  startCountdown(hours: number, minutes: number, seconds: number) {
    const targetTime = new Date().getTime() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
    
    localStorage.setItem('promo_end_time', targetTime.toString());

    this.timer = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetTime - now;
      
      if (timeRemaining <= 0) {
        clearInterval(this.timer);  
        this.countdownTime = '00:00:00';
        localStorage.removeItem('promo_end_time'); 
      } else {
        const hoursLeft = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        this.countdownTime = `${this.formatTime(hoursLeft)}:${this.formatTime(minutesLeft)}:${this.formatTime(secondsLeft)}`;
      }
    }, 1000);
  }

  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }

  restoreCountdown() {
    const savedEndTime = localStorage.getItem('promo_end_time');
    if (savedEndTime) {
      const targetTime = parseInt(savedEndTime);
      const now = new Date().getTime();
      const timeRemaining = targetTime - now;

      if (timeRemaining > 0) {
       
        this.startCountdown(0, 0, timeRemaining / 1000); 
      } else {
        this.countdownTime = '00:00:00';
        localStorage.removeItem('promo_end_time');  
      }
    } else {
      this.startCountdown(22, 0, 0);
    }
  }
}

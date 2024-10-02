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
    new Produto(2, 'Samsung Smart TV 50" UHD 4K 7500UHD OLED', 'Samsung Smart TV com processador Crystal 4K', 700.00, 1800.00, '/televisao1.png', 700.00, 'Desfrute de uma imagem mais natural e detalhada com essa tecnologia inovadora, que analisa as regiões da tela e ajusta automaticamente o contraste. O HDR aumenta o alcance dos níveis de luz na sua TV, proporcionando mais brilho, contraste e detalhes para você aproveitar o seu programa favorito tanto nas cenas mais escuras, quanto naquelas de alta luminosidade.', 2, ['Processador:  Crystal 4K', 'Tamanho: 50"', 'Frequência: 60Hz']),
    new Produto(3, 'Mouse Gamer Redragon Storm Elite Branco ED400', 'Mouse Gamer com 16000DPI e iluminação RGB', 700.00, 1800.00, '/mouse1.jpg', 700.00, 'Descubra um Estilo moderno e inovador com efeitos de iluminação Chroma RGB presente no Storm Elite. Equipado com um dos melhores sensores disponíveis no mercado, o Storm Elite é equipado com o poderosissímo Pixart PWM 3389. Tenha precisão absoluta em suas partidas com o Storm Elite. Graças a seu design no estilo colméia, o Storm Elite pesa apenas 85g', 1, [ 'Sensor: Pixart 3389', 'Peso: 85kg', 'Dimensões: 12,7 × 6,6 × 4 cm']),
    new Produto(4, 'Tênis Nike Mc Trainer 2 Preto Zyne Pro', 'Tênis Nike masculino, confortável e estiloso', 336.99, 419.99, '/tenis2.png', 700.00, 'Descubra um Estilo moderno e inovador com efeitos de iluminação Chroma RGB presente no Storm Elite. Equipado com um dos melhores sensores disponíveis no mercado, o Storm Elite é equipado com o poderosissímo Pixart PWM 3389. Tenha precisão absoluta em suas partidas com o Storm Elite. Graças a seu design no estilo colméia, o Storm Elite pesa apenas 85g', 0, ['Sensor: Pixart 3389', 'Peso: 85kg', 'Dimensões: 12,7 × 6,6 × 4 cm'])
  ];

  constructor(private router: Router) {} 

  public navigateToDetalhe(item: Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    this.router.navigate(['/detalhes']); 
  }
}

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
    new Produto(1, 'Cadeira Gamer TGT Sight FA, Preta E Vermelha', 'Cadeira 1', 700.00, 800.00, '/cadeira1.jpg', 700.00, 'A TGT Sight FA é um produto ideal se você está procurando uma cadeira gamer com ótima qualidade e custo benefício. Seu assento utiliza espuma regular, sua base é de ferro e além disso, ela utiliza um pistão de alta durabilidade, tudo para que você se sinta confortável independente se vai passar horas jogando ou trabalhando', 2, ['Cor: Azul', 'Tamanho: M', 'Material: Algodão']),
    new Produto(2, 'Samsung Smart TV 50" UHD 4K 7500UHD OLED', 'Samsung Smart TV', 700.00, 1800.00, '/televisao1.png', 700.00, 'Desfrute de uma imagem mais natural e detalhada com essa tecnologia inovadora, que analisa as regiões da tela e ajusta automaticamente o contraste. O HDR aumenta o alcance dos níveis de luz na sua TV, proporcionando mais brilho, contraste e detalhes para você aproveitar o seu programa favorito tanto nas cenas mais escuras, quanto naquelas de alta luminosidade.', 2, ['Processador:  Crystal 4K', 'Tamanho: 50"', 'Frequência: 60Hz']),
    new Produto(3, 'Mouse Gamer Redragon Storm Elite Branco ED400', 'Mouse Gamer', 700.00, 1800.00, '/mouse1.jpg', 700.00, 'Descubra um Estilo moderno e inovador com efeitos de iluminação Chroma RGB presente no Storm Elite. Equipado com um dos melhores sensores disponíveis no mercado, o Storm Elite é equipado com o poderosissímo Pixart PWM 3389. Tenha precisão absoluta em suas partidas com o Storm Elite. Graças a seu design no estilo colméia, o Storm Elite pesa apenas 85g', 1, [ 'Sensor: Pixart 3389', 'Peso: 85kg', 'Dimensões: 12,7 × 6,6 × 4 cm']),
    new Produto(4, 'Tênis Nike Mc Trainer 2 Preto Zyne Pro', 'Tênis Nike', 336.99, 419.99, '/tenis2.png', 700.00, 'Descubra um Estilo moderno e inovador com efeitos de iluminação Chroma RGB presente no Storm Elite. Equipado com um dos melhores sensores disponíveis no mercado, o Storm Elite é equipado com o poderosissímo Pixart PWM 3389. Tenha precisão absoluta em suas partidas com o Storm Elite. Graças a seu design no estilo colméia, o Storm Elite pesa apenas 85g', 0, ['Sensor: Pixart 3389', 'Peso: 85kg', 'Dimensões: 12,7 × 6,6 × 4 cm']),
    new Produto(5, 'Notebook Dell Latitude 3420 Intel Core i5 1135G7 14"', 'Notebook Dell', 8799.90, 8977.90, '/notebook.jpg', 8799.90,'O Notebook Dell Latitude 3420 Intel Core i5 1135G7 14" 8GB SSD 256 GB Windows 10 Leitor Biométrico da Dell vem com o sistema operacional Windows 10. Quanto às dimensões, o 3420 tem 32.6cm de largura, 22.6cm de profundidade e 1.76cm de altura, pesando 1.52kg. O 3420 da Dell tem tela de 14.0" e resolução HD.',5, ['Sensor: Pixart 3389', 'Peso: 85kg', 'Dimensões: 12,7 × 6,6 × 4 cm'] ),
    new Produto(6, 'Notebook Dell Latitude 3420 Intel Core i5 1135G7 14" 512GB SSD Windows 10 Leitor Biométrico', 'Notebook Dell', 8799.90, 8977.90, '/notebook1.webp', 8799.90,'O Notebook Dell Latitude 3420 Intel Core i5 1135G7 14" 8GB SSD 256 GB Windows 10 Leitor Biométrico da Dell vem com o sistema operacional Windows 10. Quanto às dimensões, o 3420 tem 32.6cm de largura, 22.6cm de profundidade e 1.76cm de altura, pesando 1.52kg. O 3420 da Dell tem tela de 14.0" e resolução HD.',5, ['Sensor: Pixart 3389', 'Peso: 85kg', 'Dimensões: 12,7 × 6,6 × 4 cm'] ),
    new Produto(7, 'Celular Samsung Galaxy S23 5G, 512GB, 8GB RAM, Câmera Tripla 50MP+12+10, Tela Infinita de 6.1"', 'Celular Samsung', 5999.90, 5799.90, '/celular.webp', 8799.90,'Smartphone Samsung Galaxy S23 5G (512GB), 512GB, 8GB, Processador Qualcomm Snapdragon 8 Gen 2 for Galaxy, Câmera Tripla Traseira de 50MP +12MP + 10MP, Selfie de 12MP, Tela Infinita de 6.1" 48-120Hz, Dual Chip, eSIM, 4 gerações de atualizações Android, 5 anos de atualizações de segurança, Cadeado Galaxy.',5, ['Sensor: Pixart 3389', 'Peso: 85kg', 'Dimensões: 12,7 × 6,6 × 4 cm'] ),
    new Produto(8, 'Cadeira Gamer - Base Giratória, Braço Ajustável e Sistema de Inclinação Avançado', 'Cadeira 2', 599.90, 379.90, '/cadeira2.avif', 8799.90,'Conforto, estilo e qualidade para seus momentos de jogos! A Cadeira Gamer Grifit é a escolha ideal para os amantes de games que buscam uma experiência de jogo excepcional. Com design moderno, esta cadeira foi projetada para oferecer o máximo de conforto durante longas horas de gameplay.',5, ['Sensor: Pixart 3389', 'Peso: 85kg', 'Dimensões: 12,7 × 6,6 × 4 cm'] )
  ];

  constructor(private router: Router) {} 

  public navigateToDetalhe(item: Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    this.router.navigate(['/detalhes']); 
    window.scrollTo(0, 0);
  }
}

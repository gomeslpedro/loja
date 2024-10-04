import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';

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
    {
        id: 1,
        nome: 'Cadeira Gamer TGT Sight FA, Preta E Vermelha',
        descricao: 'Cadeira 1',
        preco: 700.00,
        precoAntigo: 816.99,
        imagem: '/cadeira1.jpg',
        valor: 700.00,
        descritivo: 'A TGT Sight FA é um produto ideal se você está procurando uma cadeira gamer com ótima qualidade e custo benefício. Seu assento utiliza espuma regular, sua base é de ferro e além disso, ela utiliza um pistão de alta durabilidade, tudo para que você se sinta confortável independente se vai passar horas jogando ou trabalhando',
        quantidade: 2,
        especificacoes: ['Cor: Azul', 'Tamanho: M', 'Material: Algodão']
    },
    {
        id: 2,
        nome: 'Samsung Smart TV 50" UHD 4K 7500UHD OLED',
        descricao: 'Samsung Smart TV',
        preco: 2700.99,
        precoAntigo: 3800.00,
        imagem: '/televisao1.png',
        valor: 2700.99,
        descritivo: 'Desfrute de uma imagem mais natural e detalhada com essa tecnologia inovadora, que analisa as regiões da tela e ajusta automaticamente o contraste. O HDR aumenta o alcance dos níveis de luz na sua TV, proporcionando mais brilho, contraste e detalhes para você aproveitar o seu programa favorito tanto nas cenas mais escuras, quanto naquelas de alta luminosidade.',
        quantidade: 2,
        especificacoes: ['Processador: Crystal 4K', 'Tamanho: 50"', 'Frequência: 60Hz']
    },
    {
        id: 3,
        nome: 'Mouse Gamer Redragon Storm Elite Branco ED400',
        descricao: 'Mouse Gamer',
        preco: 349.99,
        precoAntigo: 480.00,
        imagem: '/mouse1.jpg',
        valor: 349.99,
        descritivo: 'Descubra um Estilo moderno e inovador com efeitos de iluminação Chroma RGB presente no Storm Elite. Equipado com um dos melhores sensores disponíveis no mercado, o Storm Elite é equipado com o poderosíssimo Pixart PWM 3389. Tenha precisão absoluta em suas partidas com o Storm Elite. Graças a seu design no estilo colméia, o Storm Elite pesa apenas 85g',
        quantidade: 1,
        especificacoes: ['Sensor: Pixart 3389', 'Peso: 85g', 'Dimensões: 12,7 × 6,6 × 4 cm']
    },
    {
        id: 4,
        nome: 'Tênis Nike Mc Trainer 2 Preto Zyne Pro',
        descricao: 'Tênis Nike',
        preco: 536.99,
        precoAntigo: 619.99,
        imagem: '/tenis2.png',
        valor: 536.99,
        descritivo: 'Tênis Nike ideal para prática de esportes e uso diário, oferecendo conforto e estilo. É um novo tênis do modelo que combina o conforto Nike com um estilo inovador.',
        quantidade: 0,
        especificacoes: ['Sensor: Pixart 3389', 'Peso: 85g', 'Dimensões: 12,7 × 6,6 × 4 cm']
    },
    {
        id: 5,
        nome: 'Notebook Dell Latitude 3420 Intel Core i5 1135G7 14"',
        descricao: 'Notebook Dell',
        preco: 8799.90,
        precoAntigo: 8977.90,
        imagem: '/notebook.jpg',
        valor: 8799.90,
        descritivo: 'O Notebook Dell Latitude 3420 Intel Core i5 1135G7 14" 8GB SSD 256 GB Windows 10 Leitor Biométrico da Dell vem com o sistema operacional Windows 10. Quanto às dimensões, o 3420 tem 32.6cm de largura, 22.6cm de profundidade e 1.76cm de altura, pesando 1.52kg. O 3420 da Dell tem tela de 14.0" e resolução HD.',
        quantidade: 5,
        especificacoes: ['Sensor: Pixart 3389', 'Peso: 85g', 'Dimensões: 12,7 × 6,6 × 4 cm']
    },
    {
        id: 6,
        nome: 'Notebook Dell Latitude 3420 Intel Core i5 1135G7 14" 512GB SSD Windows 10 Leitor Biométrico',
        descricao: 'Notebook Dell',
        preco: 8799.90,
        precoAntigo: 8977.90,
        imagem: '/notebook1.webp',
        valor: 8799.90,
        descritivo: 'Notebook Dell Latitude 3420 com 512GB SSD, ideal para produtividade e entretenimento.',
        quantidade: 5,
        especificacoes: ['Sensor: Pixart 3389', 'Peso: 85g', 'Dimensões: 12,7 × 6,6 × 4 cm']
    },
    {
        id: 7,
        nome: 'Celular Samsung Galaxy S23 5G, 512GB, 8GB RAM, Câmera Tripla 50MP+12+10, Tela Infinita de 6.1"',
        descricao: 'Celular Samsung',
        preco: 5499.90,
        precoAntigo: 5799.90,
        imagem: '/celular.webp',
        valor: 5499.90,
        descritivo: 'Smartphone Samsung Galaxy S23 5G com excelente desempenho e câmera de alta qualidade.',
        quantidade: 5,
        especificacoes: ['Sensor: Pixart 3389', 'Peso: 85g', 'Dimensões: 12,7 × 6,6 × 4 cm']
    },
    {
        id: 8,
        nome: 'Cadeira Gamer - Base Giratória, Braço Ajustável e Sistema de Inclinação Avançado',
        descricao: 'Cadeira 2',
        preco: 599.90,
        precoAntigo: 679.90,
        imagem: '/cadeira2.avif',
        valor: 599.90,
        descritivo: 'Conforto, estilo e qualidade para seus momentos de jogos! A Cadeira Gamer Grifit é a escolha ideal para os amantes de games que buscam uma experiência de jogo excepcional.',
        quantidade: 5,
        especificacoes: ['Sensor: Pixart 3389', 'Peso: 85g', 'Dimensões: 12,7 × 6,6 × 4 cm']
    }
];

  constructor(private router: Router) {} 

  public navigateToDetalhe(item: Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    this.router.navigate(['/detalhes']); 
    window.scrollTo(0, 0);
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
    window.location.href = "./cesta";
  }
}



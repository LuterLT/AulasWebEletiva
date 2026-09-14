import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  imports: [CommonModule],
  selector: 'app-carrinho',
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  subTotal: number = 0;
  total: number = 0;
  lista: Produto[] = [
    {
        codigo: 1,
        nome: "Fone de Ouvido Bluetooth Noise Cancelling",
        descricao: "Fone de ouvido sem fio com cancelamento ativo de ruído e bateria de até 30 horas.",
        variacao: "Padrão",
        quantidade: 15,
        preco: 299.90,
        promo: 249.90,
        destaque: 1,
        vendedor: ""
      },
      {
        codigo: 2,
        nome: "Teclado Mecânico RGB Switch Blue",
        descricao: "Teclado gamer mecânico com iluminação RGB customizável e layout ABNT2.",
        variacao: "Padrão",
        quantidade: 8,
        preco: 189.00,
        promo: 0,
        destaque: 1,
        vendedor: ""
      },
      {
        codigo: 3,
        nome: "Mouse Pad Extra Grande Speed",
        descricao: "Mouse pad com superfície de alta precisão e bordas costuradas (900x400mm).",
        variacao: "Padrão",
        quantidade: 45,
        preco: 59.90,
        promo: 45.00,
        destaque: 0,
        vendedor: ""
      },
      {
        codigo: 4,
        nome: "Suporte Articulado para Monitor",
        descricao: "Suporte a gás para monitores de 17 a 32 polegadas com ajuste de altura e rotação 360°.",
        variacao: "Padrão",
        quantidade: 20,
        preco: 219.90,
        promo: 0,
        destaque: 0,
        vendedor: ""
      }
    ];

  constructor() {
    this.calcularTotalSubTotal();
  }

  calcularTotalSubTotal() {  
    for (let item of this.lista) {
      this.subTotal += item.preco;
      if (item.promo > 0) {
            this.total += item.promo;
        } else {
            this.total += item.preco;
        }
    }
  }
}

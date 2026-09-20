import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-carrinho',
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  subTotal: number = 0;
  total: number = 0;
  lista: ItemCesta[] = [];

  ngOnInit() {
    if (typeof window === 'undefined') {
      return;
    }
    const textoSalvo = localStorage.getItem('cesta');
    this.lista = textoSalvo ? JSON.parse(textoSalvo) : [];
    
    this.calcularTotalSubTotal();
  }

  calcularTotalSubTotal(): void {
    this.subTotal = 0;
    this.total = 0;

    for (const item of this.lista) {
      this.subTotal += item.valorTotal;
      this.total += item.valorTotal;
    }
  }
}

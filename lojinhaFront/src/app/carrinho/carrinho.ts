import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-carrinho',
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho implements OnInit {
  private readonly chave = 'cesta';
  subTotal: number = 0;
  total: number = 0;
  lista: ItemCesta[] = [];

  ngOnInit(): void {
    this.carregarLista();
  }

  calcularTotalSubTotal(): void {
    this.subTotal = 0;
    this.total = 0;

    for (const item of this.lista) {
      this.subTotal += item.valorTotal;
      this.total += item.valorTotal;
    }
  }

  alterarQuantidade(item: ItemCesta, quantidade: number): void {
    const selecionado = this.lista.find(cesta => cesta.codigo === item.codigo);

    if (!selecionado) {
      return;
    }

    selecionado.quantidade += quantidade;

    if (selecionado.quantidade <= 0) {
      this.removerItem(selecionado.codigo);
      return;
    }

    selecionado.valorTotal = selecionado.quantidade * this.obterValorUnitario(selecionado);
    this.salvarLista();
  }

  removerItem(codigo: number): void {
    this.lista = this.lista.filter(item => item.codigo !== codigo);
    this.salvarLista();
  }

  private carregarLista(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const textoSalvo = localStorage.getItem(this.chave);

    try {
      this.lista = textoSalvo ? JSON.parse(textoSalvo) : [];
    } catch {
      this.lista = [];
    }

    this.calcularTotalSubTotal();
  }

  private salvarLista(): void {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem(this.chave, JSON.stringify(this.lista));
    this.calcularTotalSubTotal();
  }

  private obterValorUnitario(item: ItemCesta): number {
    return item.promo > 0 ? item.promo : item.preco;
  }
}

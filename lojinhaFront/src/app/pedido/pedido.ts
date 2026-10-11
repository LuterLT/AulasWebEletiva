import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-pedido',
  styleUrl: './pedido.css',
  templateUrl: './pedido.html',
})
export class Pedido implements OnInit {
  private readonly chaveCesta = 'cesta';
  private readonly chavePedido = 'pedido';

  lista: ItemCesta[] = [];
  total: number = 0;
  mensagem: string = '';

  ngOnInit(): void {
    this.carregarCesta();
  }

  confirmarPedido(): void {
    if (typeof window === 'undefined' || this.lista.length === 0) {
      return;
    }

    localStorage.setItem(this.chavePedido, JSON.stringify(this.lista));
    localStorage.removeItem(this.chaveCesta);

    this.lista = [];
    this.total = 0;
    this.mensagem = 'Pedido salvo com sucesso.';
  }

  private carregarCesta(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const textoSalvo = localStorage.getItem(this.chaveCesta);

    try {
      this.lista = textoSalvo ? JSON.parse(textoSalvo) : [];
    } catch {
      this.lista = [];
    }

    this.total = this.lista.reduce((soma, item) => soma + item.valorTotal, 0);
  }
}

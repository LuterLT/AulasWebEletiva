import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  private readonly chave = 'clientes';

  cliente: Cliente = new Cliente();
  sucesso = false;
  erro = '';

  mascararTelefone(evento: Event): void {
    const campo = evento.target as HTMLInputElement | null;

    if (!campo) {
      return;
    }

    const digitos = campo.value.replace(/\D/g, '').slice(0, 11);
    let telefone = digitos;

    if (digitos.length > 2) {
      telefone = `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
    }

    if (digitos.length > 6) {
      const prefixo = digitos.length > 10 ? digitos.slice(2, 7) : digitos.slice(2, 6);
      const sufixo = digitos.length > 10 ? digitos.slice(7) : digitos.slice(6);
      telefone = `(${digitos.slice(0, 2)}) ${prefixo}-${sufixo}`;
    }

    this.cliente.telefone = telefone;
    campo.value = telefone;
  }

  cadastrar(): void {
    this.sucesso = false;
    this.erro = '';

    if (!this.cliente.nome || !this.cliente.email || !this.cliente.telefone || !this.cliente.senha) {
      this.erro = 'Preencha todos os campos.';
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    let clientes: Cliente[] = [];

    try {
      const textoSalvo = localStorage.getItem(this.chave);
      clientes = textoSalvo ? JSON.parse(textoSalvo) : [];
    } catch {
      clientes = [];
    }

    const emailExiste = clientes.some(cliente => cliente.email === this.cliente.email);

    if (emailExiste) {
      this.erro = 'Este email já foi cadastrado.';
      return;
    }

    clientes.push({ ...this.cliente });
    localStorage.setItem(this.chave, JSON.stringify(clientes));

    this.cliente = new Cliente();
    this.sucesso = true;
  }
}

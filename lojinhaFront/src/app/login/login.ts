import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly chave = 'clientes';

  email = '';
  senha = '';
  erro = '';

  logar(): void {
    this.erro = '';

    if (!this.email || !this.senha) {
      this.erro = 'Preencha email e senha.';
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

    const cliente = clientes.find(item => item.email === this.email && item.senha === this.senha);

    if (!cliente) {
      this.erro = 'Email ou senha incorretos.';
      return;
    }

    localStorage.setItem('clienteLogado', JSON.stringify(cliente));
    window.location.href = 'vitrine';
  }
}

import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  lista: Produto[] = [
    {
      "codigo": 1,
      "nome": "Martelo de Unha 25mm",
      "descricao": "Martelo de aço com cabo de madeira, ideal para trabalhos gerais.",
      "variacao": "Padrão",
      "quantidade": 25,
      "preco": 39.90,
      "promo": 34.90,
      "destaque": 1,
      "vendedor": ""
    },
    {
      "codigo": 2,
      "nome": "Chave de Fenda 6mm",
      "descricao": "Chave de fenda com cabo ergonômico para parafusos comuns.",
      "variacao": "Padrão",
      "quantidade": 40,
      "preco": 14.90,
      "promo": 0,
      "destaque": 0,
      "vendedor": ""
    },
    {
      "codigo": 3,
      "nome": "Alicate Universal 8 Polegadas",
      "descricao": "Alicate universal em aço temperado para cortes e fixações.",
      "variacao": "Padrão",
      "quantidade": 18,
      "preco": 32.50,
      "promo": 27.90,
      "destaque": 1,
      "vendedor": ""
    },
    {
      "codigo": 4,
      "nome": "Furadeira de Impacto 650W",
      "descricao": "Furadeira elétrica de impacto com controle de velocidade.",
      "variacao": "Padrão",
      "quantidade": 8,
      "preco": 289.90,
      "promo": 259.90,
      "destaque": 1,
      "vendedor": ""
    },
    {
      "codigo": 5,
      "nome": "Jogo de Chaves Allen",
      "descricao": "Kit com 9 chaves Allen em diferentes tamanhos.",
      "variacao": "Padrão",
      "quantidade": 30,
      "preco": 24.90,
      "promo": 19.90,
      "destaque": 0,
      "vendedor": ""
    },
    {
      "codigo": 6,
      "nome": "Fita Isolante 20m",
      "descricao": "Fita isolante de PVC para instalações e reparos elétricos.",
      "variacao": "Padrão",
      "quantidade": 75,
      "preco": 8.90,
      "promo": 0,
      "destaque": 0,
      "vendedor": ""
    },
    {
      "codigo": 7,
      "nome": "Trena 5 Metros",
      "descricao": "Trena com trava e fita graduada para medições precisas.",
      "variacao": "Padrão",
      "quantidade": 35,
      "preco": 21.90,
      "promo": 17.90,
      "destaque": 1,
      "vendedor": ""
    },
    {
      "codigo": 8,
      "nome": "Parafuso Sextavado 8mm",
      "descricao": "Parafuso sextavado de aço para fixações em geral.",
      "variacao": "Padrão",
      "quantidade": 250,
      "preco": 1.50,
      "promo": 0,
      "destaque": 0,
      "vendedor": ""
    },
    {
      "codigo": 9,
      "nome": "Cimento 50kg",
      "descricao": "Cimento para obras, reformas e aplicações em construção civil.",
      "variacao": "Padrão",
      "quantidade": 60,
      "preco": 39.90,
      "promo": 36.90,
      "destaque": 1,
      "vendedor": ""
    },
    {
      "codigo": 10,
      "nome": "Luvas de Proteção",
      "descricao": "Luvas resistentes para proteção das mãos durante trabalhos manuais.",
      "variacao": "Padrão",
      "quantidade": 50,
      "preco": 12.90,
      "promo": 9.90,
      "destaque": 0,
      "vendedor": ""
    }
  ];
  adicionarCesta(produto: Produto): void {
    if (typeof window === 'undefined') {
      return;
    }
    const chave = 'cesta';
    const textoSalvo = localStorage.getItem(chave);

    let cesta: ItemCesta[] = textoSalvo ? JSON.parse(textoSalvo) : [];

    const indice = cesta.findIndex(item => item.codigo === produto.codigo);

    const valorUnitario = produto.promo > 0 ? produto.promo : produto.preco;

    if (indice === -1){
      const novoItem: ItemCesta = {
        codigo: produto.codigo,
        nome: produto.nome,
        descricao: produto.descricao,
        variacao: produto.variacao,
        quantidade: 1,
        preco: produto.preco,
        promo: produto.promo,
        destaque: produto.destaque,
        vendedor: produto.vendedor,
        valorTotal: valorUnitario
      };
      cesta.push(novoItem);
    } else {
      cesta[indice].quantidade += 1;
      cesta[indice].valorTotal = cesta[indice].quantidade * valorUnitario;
    }

    localStorage.setItem(chave, JSON.stringify(cesta));
    window.alert(`Produto "${produto.nome}" adicionado ao carrinho!`);
    
  }

}

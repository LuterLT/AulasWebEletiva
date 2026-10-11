package com.ads.lojinha;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Produto {
    private int id;
    private String nome;
    private String descricao;
    private double preco;
    private double valorPromo;
    private int quantidade;
    private int destaque;
}

package com.ads.lojinha;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
public class Cliente {
    private int id;
    private String nome;
    private String email;
    private String telefone;
    private Boolean ativo;
}

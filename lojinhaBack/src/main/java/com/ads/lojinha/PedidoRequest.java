package com.ads.lojinha;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.Data;

@Data
public class PedidoRequest {
    private LocalDateTime dataPedido;
    private BigDecimal valorTotal;
    private String status;
    private Long clienteId;
}

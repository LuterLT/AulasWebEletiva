package com.ads.lojinha;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
	@Query(value = "SELECT * FROM pedidos WHERE cliente_id = :clienteId ORDER BY data_pedido DESC", nativeQuery = true)
	List<Pedido> listarPorClienteNative(@Param("clienteId") Long clienteId);
}

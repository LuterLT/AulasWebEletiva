package com.ads.lojinha;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	@Query(value = "SELECT * FROM clientes WHERE email = :email AND senha = :senha AND ativo = true LIMIT 1", nativeQuery = true)
	Optional<Cliente> loginNative(@Param("email") String email, @Param("senha") String senha);

	@Query(value = "SELECT * FROM clientes WHERE email = :email LIMIT 1", nativeQuery = true)
	Optional<Cliente> buscarPorEmailNative(@Param("email") String email);
}

CREATE TABLE clientes (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(180) NOT NULL UNIQUE,
    telefone VARCHAR(30) NOT NULL,
    ativo BOOLEAN NOT NULL
);

CREATE TABLE pedidos (
    id BIGSERIAL PRIMARY KEY,
    data_pedido TIMESTAMP NOT NULL,
    valor_total NUMERIC(12, 2) NOT NULL,
    status VARCHAR(40) NOT NULL,
    cliente_id BIGINT NOT NULL,
    CONSTRAINT fk_pedidos_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes (id)
        ON DELETE RESTRICT
);

CREATE INDEX idx_pedidos_cliente_id ON pedidos (cliente_id);

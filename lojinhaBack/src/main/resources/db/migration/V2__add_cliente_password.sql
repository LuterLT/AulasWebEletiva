ALTER TABLE clientes
ADD COLUMN senha VARCHAR(120);

UPDATE clientes
SET senha = telefone
WHERE senha IS NULL;

ALTER TABLE clientes
ALTER COLUMN senha SET NOT NULL;

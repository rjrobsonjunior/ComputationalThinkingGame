-- Primeiro, vamos criar uma nova sequência para a coluna id_user
CREATE SEQUENCE id_user_seq;

-- Em seguida, vamos associar a sequência à coluna id_user
ALTER SEQUENCE id_user_seq OWNED BY usuarios.id_user;

-- Agora, vamos definir a coluna id_user para usar a sequência como padrão
ALTER TABLE usuarios ALTER COLUMN id_user SET DEFAULT nextval('id_user_seq');
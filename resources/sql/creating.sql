drop schema if exists crud_sd;

CREATE SCHEMA IF NOT EXISTS crud_sd;

USE crud_sd;

CREATE TABLE IF NOT EXISTS aluno (
nome		varchar(256) not null,
matricula	numeric(14) not null,
PRIMARY KEY (matricula)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS curso (
nome		varchar(256) 	not null,
codigo		varchar(7) 		not null,
PRIMARY KEY (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS curso_aluno (
matricula	numeric(14) not null,
codigo		varchar(7) 	not null,
frequencia 	numeric(6) null,
media 		DOUBLE null,
PRIMARY KEY (matricula, codigo),
FOREIGN KEY (matricula) REFERENCES aluno(matricula),
FOREIGN KEY (codigo) REFERENCES curso(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

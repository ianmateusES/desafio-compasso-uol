#!/bin/sh
export DB_USERNAME=uol # Nome do usario que deseja criar
export DB_PASSWORD=uol # Senha de acesso ao banco
export DB_DATABASE=uol # Nome do database que deseja utilizar

export DB_HOST=localhost # **Não mexer**

# Criando conteiner docker
docker run --name uol-postgres --network bridge -e POSTGRES_USER=$DB_USERNAME -e POSTGRES_PASSWORD=$DB_PASSWORD -e POSTGRES_DB=$DB_DATABASE -p 5432:5432 postgres:13-alpine

# Criando as tabalas no banco de dados:
yarn typeorm migration:run

# Criando a imagem e o container da API:
docker build -t uol-api . && docker run --name api --network bridge -p 8080:3333 uol-api

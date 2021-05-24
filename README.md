<div align="center" style="margin: 20px;">

  [![The ISC License](https://img.shields.io/badge/license-ISC-green.svg?style=flat-square)](https://github.com/ianmateusES/desafio-compasso-uol/LICENSE.md)
  ![GitHub last commit](https://img.shields.io/github/last-commit/ianmateusES/desafio-compasso-uol?color=green&style=flat-square)
  ![GitHub top language](https://img.shields.io/github/languages/top/ianmateusES/desafio-compasso-uol?style=flat-square)

  <p align="center" >
    <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a> |
    <a href="#thinking-como-contribuir"> :thinking: Como Contribuir?</a> |
    <a href="#memo-licença"> :memo: Licença </a> 
  </p>
</div>

## :barber: Projeto

Aplicação de gerenciamento de Clientes e Cidades para o desafio da Compasso UOL.

### Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Docker](https://docs.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)
- [Nginx](https://www.nginx.com)

## :zap: Executando o Projeto
1. Clone o repositório
```
git clone https://github.com/ianmateusES/desafio-compasso-uol.git
cd desafio-compasso-uol
```
2. Entre no arquivo `build.sh`, defina as credencias do banco de dados substituindo os valores `uol`. Por exemplo:
```bash
#!/bin/sh
export DB_USERNAME=root # Nome do usario que deseja criar
export DB_PASSWORD=admin123 # Senha de acesso ao banco
export DB_DATABASE=db # Nome do database que deseja utilizar

docker-compose up --build
```
3. Forneça ao arquivo `build.sh` permissões:
```
chmod +x build.sh
```
4. Start a aplicação executando:
```
./build.sh
```
5. Com a aplicação inicializada e proxy reverso do nginx pronto. Basta acessar a url `http://localhost:8080/api-docs/#/` para visualizar a documentação da API.

Para mais informações da API acesse o arquivo `api/README.md`.

## :thinking: Como Contribuir?
**Faça um fork deste repositório**

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd desafio-compasso-uol

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feat/bug/fix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

### :memo: Licença

Este projeto é desenvolvido sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
  Feito por <strong> Ian Mateus</strong>
</p>

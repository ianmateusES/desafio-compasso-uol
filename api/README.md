## Sobre API
A API visa realizar o CRUD das entidades de Clientes e Cidades.

## Requisitos da API
- [Node v14+](https://nodejs.org/en/docs/) ou [Docker](https://docs.docker.com/) / [Docker-Compose](https://docs.docker.com/compose/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/en/docs/)

## Tecnologias e Framework utilizadas
- [typescript](https://www.typescriptlang.org)
- [eslint](https://eslint.org)
- [prettier](https://prettier.io)
- [jest](https://jestjs.io/pt-BR/)
- [express](https://expressjs.com/pt-br/)
- [celebrate](https://github.com/arb/celebrate)
- [babel](https://babeljs.io)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [typeorm](https://typeorm.io/#/)
- [tsyringe](https://www.npmjs.com/package/tsyringe)

## Instalando dependências
- Usando npm
  ```bash
    npm install
  ```
- Usando yarn
  ```bash
    yarn
  ```

## Iniciando a aplicação localmente
Substitua os campos no `ormconfig.json` com as credênciais do postgres.

Crie as tabalas no banco executando:
```bash
yarn typeorm migration:run
```

Inicie a aplicação executando:
```bash
yarn dev
```

## Executando os testes da aplicação
Para executar os teste unitários, execute:
```
yarn test
```

## Docmentação e endpoints da aplicação
Com a aplicação no ar acesse a seguinte url:
 - `http://localhost:3333/api-docs/#/`

Poderar encontrar os endpoints da aplicação também em `docs/insomnia/Insomnia_2021-05-22.json`, podendo importar na ferramenta insomnia.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
  Feito por <strong> Ian Mateus</strong>
</p>

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

## Configurações iniciais
1. Faça a copia dos arquivos `ormconfig.example.json` para `ormconfig.json` e `ormconfig.build.example.json` para `ormconfig.build.json`
2. Substitua os campos com as credenciais do banco de dados postgres de teste e de produção. Por exemplo:
```json
// ormconfig.json
{
  "name": "default",
  "type": "postgres",
  "host": "localhost", // host de conexão com o banco, caso docker-compose será nome do serviço
  "port": 5432, // porta de comunicação padrão do postgres
  "username": "uol", // nome do usuário do banco de dados
  "password": "docker", // senha do banco
  "database": "uol", // nome do database no postgres
  "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
  "entities": ["./src/modules/**/infra/typeorm/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}

// ormconfig.build.json
{
  "name": "default",
  "type": "postgres",
  "host": "postgres", // host de conexão com o banco, caso docker-compose será nome do serviço, se não localhost
  "port": 5432, // porta de comunicação padrão do postgres
  "username": "uol", // nome do usuário do banco de dados
  "password": "docker", // senha do banco
  "database": "uol", // nome do database no postgres
  "migrations": ["./dist/shared/infra/typeorm/migrations/*.js"],
  "entities": ["./dist/modules/**/infra/typeorm/entities/*.js"],
  "cli": {
    "migrationsDir": "./dist/shared/infra/typeorm/migrations"
  }
}
```

## Iniciando a aplicação com Docker
Crie o container do postgres:
```bash
docker run --name uol-postgres --network bridge -e POSTGRES_USER=uol -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=uol -p 5432:5432 postgres:13-alpine
```

Substitua os campos no `ormconfig.json` e no `ormconfig.build.example.json` com as credênciais do container do postgres.

Crie as tabalas no banco executando:
```bash
yarn typeorm migration:run
```

Criando a imagem e o container da API:
```bash
docker build -t uol-api . && docker run --name api --network bridge -p 3333:3333 uol-api
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
  Feito po <strong> Ian Mateus</strong>
</p>

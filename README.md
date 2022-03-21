# Desafio Bagy

![bagy](https://user-images.githubusercontent.com/82068881/159203850-3dc21f65-9903-458a-8d44-21d9be2cab12.png)

Aplicação desenvolvida em ReactJS para o desafio técnico do processo seletivo de Pessoa Desenvolvedora Front-End na empresa Bagy. Foi desenvolvida uma 
página de dashboard com uma sidebar navegável que renderiza informações de várias lojas, tendo seus dados fornecidos por um [GraphQL fake server](https://github.com/marmelab/json-graphql-server), mostrando informações sobre destaque de loja, faturamento total, últimas vendas e um gráfico mensal de faturamento.

Você pode acessar a aplicação localmente através do clone do repositório, seguindo os passos a seguir:

## Instruções para reproduzir o projeto localmente

1. Clone o repositório
  * `git@github.com:Kevin-Ol/desafio-bagy.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd desafio-bagy`

2. Instale as dependências
  * `npm install`

3. Inicie o fake-server
  * `npm run db`

4. Inicie o projeto
  * `npm start`

5. O fake-server será iniciado na porta 3001 enquanto a aplicação iniciará na porta 3000:
  * `http://localhost:3000/`

---

## Scripts do projeto

- `npm start` inicia a aplicação localmente;
- `npm run db` inicia o fake-server;
- `npm test` inicia os arquivos de teste da aplicação;
- `npm run test:coverage` realiza os testes da aplicação gerando um relatório de cobertura;

## Bibliotecas utilizadas

- `eslint` para garantir padronização do código;
- `json-graphql-server` para rodar um servidor backend simples localmente;
- `axios` para comunicação com o back-end;
- `recharts` para gerar gráficos;
- `sass` pré-processador css;

## Contato

Email: kevin.zero@hotmail.com

Github: https://github.com/kevin-ol

LinkedIn: https://www.linkedin.com/in/kevinmendoncaoliveira/

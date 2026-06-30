# Biblioteca API

API REST desenvolvida com **AdonisJS** e **PostgreSQL** para gerenciamento de uma biblioteca. O sistema permite o cadastro de usuários, autores e livros, além do controle de empréstimos e devoluções.

Este projeto foi desenvolvido como atividade acadêmica com o objetivo de aplicar conceitos de desenvolvimento backend, organização de rotas, uso de controllers, models, migrations, autenticação e relacionamentos com Lucid ORM.

---

## Descrição do Projeto

A Biblioteca API é uma aplicação backend voltada para o gerenciamento de livros, autores, usuários e empréstimos. A API segue o padrão REST e utiliza requisições HTTP para realizar operações de cadastro, consulta, atualização e exclusão de dados.

O sistema permite:

- Cadastrar usuários;
- Realizar login e gerar token de autenticação;
- Cadastrar, listar, atualizar e excluir autores;
- Cadastrar, listar, atualizar e excluir livros;
- Associar livros a autores;
- Registrar empréstimos de livros;
- Registrar devoluções;
- Impedir empréstimos de livros indisponíveis;
- Proteger rotas específicas com autenticação.

---

## Tecnologias Utilizadas

- **AdonisJS**
- **Node.js**
- **TypeScript**
- **PostgreSQL**
- **Lucid ORM**
- **Migrations**
- **VineJS**
- **Middleware de autenticação**
- **Git e GitHub**
- **Postman ou Insomnia**

---

## Entidades do Sistema

O projeto possui as seguintes entidades principais:

### Usuário

Representa os usuários cadastrados no sistema, responsáveis por realizar login e acessar rotas protegidas.

Principais campos:

- `id`
- `name`
- `email`
- `password`
- `created_at`
- `updated_at`

### Autor

Representa os autores cadastrados na biblioteca.

Principais campos:

- `id`
- `name`
- `nacionalidade`
- `created_at`
- `updated_at`

### Livro

Representa os livros disponíveis na biblioteca.

Principais campos:

- `id`
- `titulo`
- `data_publicacao`
- `editora`
- `quantidade`
- `author_id`
- `created_at`
- `updated_at`

### Empréstimo

Representa os registros de empréstimos realizados pelos usuários.

Principais campos:

- `id`
- `status`
- `data_emprestimo`
- `data_devolucao`
- `user_id`
- `book_id`
- `created_at`
- `updated_at`

---

## Relacionamentos

O projeto utiliza relacionamentos do **Lucid ORM** para representar as associações entre as entidades.

- Um autor possui vários livros;
- Cada livro pertence a um autor;
- Um livro pode possuir vários empréstimos;
- Cada empréstimo pertence a um livro;
- Um usuário pode possuir vários empréstimos;
- Cada empréstimo pertence a um usuário.

Representação geral:

```txt
Autor 1:N Livros
Livro 1:N Empréstimos
Usuário 1:N Empréstimos
Empréstimo N:1 Livro
Empréstimo N:1 Usuário
```

---

## Regras de Negócio

As principais regras de negócio implementadas na API são:

- Cada livro deve estar associado a um autor;
- O sistema deve permitir o cadastro de autores e livros;
- O sistema deve controlar empréstimos e devoluções;
- Um livro só pode ser emprestado se houver quantidade disponível;
- Caso a quantidade do livro seja igual ou menor que zero, o empréstimo não é permitido;
- Ao realizar um empréstimo, a quantidade disponível do livro é reduzida em uma unidade;
- Ao registrar uma devolução, a quantidade disponível do livro é aumentada em uma unidade;
- Um empréstimo já devolvido não pode ser devolvido novamente;
- As rotas de empréstimos e logout exigem autenticação.

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- PostgreSQL
- Git
- Postman ou Insomnia para testar as rotas

---

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/estermartinsbarros/biblioteca-api.git
```

### 2. Acessar a pasta do projeto

```bash
cd biblioteca-api
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar o arquivo `.env`

Crie uma cópia do arquivo `.env.example` com o nome `.env`.

No Linux ou macOS:

```bash
cp .env.example .env
```

No Windows:

```bash
copy .env.example .env
```

Depois, configure as variáveis de ambiente de acordo com o banco PostgreSQL local.

Exemplo:

```env
TZ=UTC
PORT=3333
HOST=localhost
NODE_ENV=development
LOG_LEVEL=info
APP_KEY=
APP_URL=http://${HOST}:${PORT}
SESSION_DRIVER=cookie

DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=app
```

Altere os campos `DB_USER`, `DB_PASSWORD` e `DB_DATABASE` conforme a configuração do seu PostgreSQL.

### 5. Criar o banco de dados

No PostgreSQL, crie um banco de dados com o mesmo nome informado em `DB_DATABASE`.

Exemplo:

```sql
CREATE DATABASE app;
```

### 6. Gerar a chave da aplicação

Caso o campo `APP_KEY` esteja vazio, execute:

```bash
node ace generate:key
```

### 7. Executar as migrations

```bash
node ace migration:run
```

### 8. Iniciar o servidor

```bash
npm run dev
```

A API será executada em:

```txt
http://localhost:3333
```

---

## Autenticação

A API utiliza autenticação por token. Para acessar rotas protegidas, é necessário realizar login e enviar o token no cabeçalho da requisição.

Exemplo de cabeçalho:

```txt
Authorization: Bearer token_gerado_pela_api
```

As rotas protegidas são:

- `DELETE /logout`
- `GET /loans`
- `GET /loans/:id`
- `POST /loans`
- `PUT /loans/:id`
- `DELETE /loans/:id`

---

## Rotas da API

### Rotas de Usuário

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| POST | `/register` | Cadastra um novo usuário | Não |
| POST | `/login` | Realiza login e gera token de autenticação | Não |
| DELETE | `/logout` | Encerra a sessão do usuário autenticado | Sim |

### Rotas de Autores

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| GET | `/authors` | Lista todos os autores | Não |
| GET | `/authors/:id` | Exibe um autor específico | Não |
| POST | `/authors` | Cadastra um novo autor | Não |
| PUT | `/authors/:id` | Atualiza os dados de um autor | Não |
| DELETE | `/authors/:id` | Remove um autor | Não |

### Rotas de Livros

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| GET | `/books` | Lista todos os livros | Não |
| GET | `/books/:id` | Exibe um livro específico | Não |
| POST | `/books` | Cadastra um novo livro | Não |
| PUT | `/books/:id` | Atualiza os dados de um livro | Não |
| DELETE | `/books/:id` | Remove um livro | Não |

### Rotas de Empréstimos

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| GET | `/loans` | Lista todos os empréstimos | Sim |
| GET | `/loans/:id` | Exibe um empréstimo específico | Sim |
| POST | `/loans` | Registra um novo empréstimo | Sim |
| PUT | `/loans/:id` | Registra a devolução de um livro | Sim |
| DELETE | `/loans/:id` | Remove um registro de empréstimo | Sim |

---

## Exemplos de Requisições

### Cadastro de Usuário

**POST** `/register`

```json
{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "password": "123456"
}
```

---

### Login de Usuário

**POST** `/login`

```json
{
  "email": "maria@email.com",
  "password": "123456"
}
```

Exemplo de resposta esperada:

```json
{
  "token": {
    "type": "bearer",
    "value": "token_gerado_pela_api"
  },
  "user": {
    "id": 1,
    "name": "Maria Silva",
    "email": "maria@email.com"
  }
}
```

---

### Cadastro de Autor

**POST** `/authors`

```json
{
  "name": "Machado de Assis",
  "nacionalidade": "Brasileira"
}
```

---

### Atualização de Autor

**PUT** `/authors/:id`

```json
{
  "name": "Machado de Assis",
  "nacionalidade": "Brasil"
}
```

---

### Cadastro de Livro

**POST** `/books`

```json
{
  "titulo": "Dom Casmurro",
  "dataPublicacao": "1899-01-01",
  "genero": "Romance",
  "editora": "Editora Exemplo",
  "quantidade": 3,
  "authorId": 1
}
```

> Observação: o campo `authorId` deve corresponder ao identificador de um autor já cadastrado.

---

### Atualização de Livro

**PUT** `/books/:id`

```json
{
  "titulo": "Dom Casmurro",
  "dataPublicacao": "1899-01-01",
  "genero": "Romance",
  "editora": "Editora Atualizada",
  "quantidade": 5,
  "authorId": 1
}
```

---

### Registro de Empréstimo

**POST** `/loans`

Essa rota exige autenticação.

```json
{
  "book_id": 1,
  "user_id": 1
}
```

Antes de registrar o empréstimo, o sistema verifica se o livro está disponível. Caso a quantidade seja igual ou menor que zero, o empréstimo não será realizado.

---

### Registro de Devolução

**PUT** `/loans/:id`

Essa rota exige autenticação.

Exemplo:

```txt
PUT /loans/1
```

Não é necessário enviar corpo JSON. Ao registrar a devolução, o sistema atualiza o status do empréstimo, registra a data de devolução e aumenta a quantidade disponível do livro.

---

### Exclusão de Empréstimo

**DELETE** `/loans/:id`

Essa rota exige autenticação.

Exemplo:

```txt
DELETE /loans/1
```

---

## Exemplos de Consultas

```txt
GET /authors
GET /authors/1
GET /books
GET /books/1
GET /loans
GET /loans/1
```

As rotas de autores e livros podem ser acessadas sem autenticação. As rotas de empréstimos exigem token de autenticação.

---

## Estrutura do Projeto

```txt
biblioteca-api/
├── app/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── transformers/
│   └── validators/
├── config/
├── database/
│   └── migrations/
├── start/
│   └── routes.ts
├── .env.example
├── package.json
└── README.md
```

---

## Scripts Disponíveis

### Executar em desenvolvimento

```bash
npm run dev
```

### Gerar build

```bash
npm run build
```

### Executar build

```bash
npm start
```

### Executar migrations

```bash
node ace migration:run
```

---

## Melhorias Futuras

Algumas melhorias que podem ser adicionadas futuramente:

- Implementação de documentação interativa com Swagger/OpenAPI;
- Criação de rota específica para consultar livros disponíveis;
- Adição de filtros por autor, título ou disponibilidade;
- Implementação de perfis de usuário;
- Criação de testes automatizados;
- Melhorias nas mensagens de erro;
- Validação mais detalhada das regras de empréstimo.

---

## Autoras

- Ester Martin Barros dos Santos
- Sthefania de Carla Costa Ferreira

---

## Licença

Este projeto foi desenvolvido para fins acadêmicos.

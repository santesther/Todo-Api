# 📝 Todo API

API REST para gerenciamento de tarefas (To-Do List) construída com Ruby on Rails 7.

## Tecnologias

- Ruby 3.1.2
- Rails 7.0
- PostgreSQL
- Orientação a Objetos com módulo de exceções customizado

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/v1/tasks | Lista todas as tasks |
| GET | /api/v1/tasks/:id | Busca uma task |
| POST | /api/v1/tasks | Cria uma task |
| PATCH | /api/v1/tasks/:id | Atualiza uma task |
| DELETE | /api/v1/tasks/:id | Deleta uma task |

## Como rodar localmente

**1. Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/todo-api.git
cd todo-api
```

**2. Instale as dependências:**
```bash
bundle install
```

**3. Configure o banco de dados:**
```bash
rails db:create db:migrate
```

**4. Suba o servidor:**
```bash
rails server
```

## Exemplos de uso

**Criar uma task:**
```bash
curl -X POST http://localhost:3000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -d '{"task": {"title": "Estudar Ruby on Rails"}}'
```

**Marcar como concluída:**
```bash
curl -X PATCH http://localhost:3000/api/v1/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"task": {"done": true}}'
```
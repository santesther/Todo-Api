# 📝 Todo API + Frontend

Projeto fullstack de gerenciamento de tarefas construído com Ruby on Rails 7 (API) e React (Frontend).

## Tecnologias

**Backend**
- Ruby 3.1.2
- Rails 7.0
- PostgreSQL
- Orientação a Objetos com módulo de exceções customizado

**Frontend**
- React 18
- Vite
- Axios

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/v1/tasks | Lista todas as tasks |
| GET | /api/v1/tasks?done=true | Filtra por concluídas |
| GET | /api/v1/tasks?done=false | Filtra por pendentes |
| GET | /api/v1/tasks/:id | Busca uma task |
| POST | /api/v1/tasks | Cria uma task |
| PATCH | /api/v1/tasks/:id | Atualiza uma task |
| DELETE | /api/v1/tasks/:id | Deleta uma task |

## ⚙️ Como rodar localmente

**Backend:**
```bash
bundle install
rails db:create db:migrate
rails server
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Acesse `http://localhost:5173`

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
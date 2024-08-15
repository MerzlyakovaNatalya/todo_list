const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000 

app.use(bodyParser.json())
app.use(cors())

// Изначальный массив с задачами
let todos = [
  { id: 1, title: 'Тестовое задание', completed: true },
  { id: 2, title: 'Прекрасный код', completed: true },
  { id: 3, title: 'Покрытие тестами', completed: true },
]

// Получить все задачи
app.get('/api/todos', (req, res) => {
  res.json(todos)
})

// Добавить новую задачу
app.post('/api/todos', (req, res) => {
  const newId = Date.now() + Math.floor(Math.random() * 10000)
  const newTodo = {
    id: newId,
    title: req.body.title,
    completed: false,
  }
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

// Обновить задачу
app.put('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  const updatedTodo = {
    id: todoId,
    title: req.body.title,
    completed: req.body.completed,
  }
  todos = todos.map((todo) => (todo.id === todoId ? updatedTodo : todo))
  res.json(updatedTodo)
})

// Удалить завершённые задачи
app.delete('/api/todos/completed', (req, res) => {
  todos = todos.filter((todo) => !todo.completed)
  res.status(204).send()
})

// Удалить задачу
app.delete('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  todos = todos.filter((todo) => todo.id !== todoId)
  res.status(204).send()
})

module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ITodo } from './types'

export const fetchTodos = createAsyncThunk<ITodo[]>(
  'todos/fetchAll',
  async () => {
    const response = await fetch('/api/todos')
    if (!response.ok) {
      throw new Error('Ошибка при запросе к серверу')
    }
    return (await response.json()) as ITodo[]
  }
)

export const changeTodo = createAsyncThunk<
  ITodo,
  { id: string; title: string; completed: boolean },
  { rejectValue: string }
>(
  'todo/changeTodo',
  async function ({ id, title, completed }, { rejectWithValue }) {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, completed }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return rejectWithValue('Ошибка при запросе к серверу')
    }

    const data = await response.json()
    return data
  }
)

export const addTodo = createAsyncThunk<
  ITodo,
  { title: string },
  { rejectValue: string }
>('todo/addTodo', async function ({ title }, { rejectWithValue }) {
  const response = await fetch(`/api/todos/`, {
    method: 'POST',
    body: JSON.stringify({ title }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    return rejectWithValue('Ошибка при запросе к серверу')
  }

  const data = await response.json()
  return data
})

export const deleteCompletedTodos = createAsyncThunk(
  'todos/deleteCompleted',
  async () => {
    const response = await fetch(`/api/todos/completed`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error('Ошибка при запросе к серверу')
    }
  }
)

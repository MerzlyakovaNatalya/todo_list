import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from './types'
import { addTodo, changeTodo, deleteCompletedTodos, fetchTodos } from './actionCreators'

interface TodosState {
  todos: ITodo[]
  selected: string
  count: number
  loading: boolean
  error: string | null
}

const initialState: TodosState = {
  todos: [],
  selected: 'All',
  count: 0,
  loading: false,
  error: null,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    updateCount: (state) => {
      const count = state.todos.reduce((acc, todo) => {
        if (!todo.completed) acc += 1
        return acc
      }, 0)
      state.count = count
    },
    incrementCount: (state) => {
      state.count += 1
    },
    decrementCount: (state) => {
      state.count -= 1
    },
    filterActiveTodos: (state) => {
      const activeTodos = state.todos.filter((todo) => !todo.completed)
      state.todos = activeTodos
    },
    filterCompletedTodos: (state) => {
      const completedTodos = state.todos.filter((todo) => todo.completed)
      state.todos = completedTodos
    },
    updateSelected: (state, action: PayloadAction<string>) => {
      state.selected = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchTodos.fulfilled,
        (state, action: PayloadAction<ITodo[]>) => {
          state.loading = false
          state.todos = action.payload
        }
      )
      .addCase(changeTodo.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(changeTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
        const todoIndex = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        )
        if (todoIndex !== -1) {
          state.todos[todoIndex] = action.payload
        }
        state.loading = false
      })
      .addCase(addTodo.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
        state.todos.unshift(action.payload)
        state.loading = false
      })
      .addCase(deleteCompletedTodos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteCompletedTodos.fulfilled, (state) => {
        state.todos = state.todos.filter((todo) => !todo.completed)
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export const {
  updateCount,
  incrementCount,
  decrementCount,
  filterActiveTodos,
  filterCompletedTodos,
  updateSelected
} = todoSlice.actions
export default todoSlice.reducer

function isError(action: { type: string }) {
  return action.type.endsWith('rejected')
}

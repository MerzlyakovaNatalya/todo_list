import todoReducer from '@/entities/todos/model/todoSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    todos: todoReducer
})
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks-store'
import { filterActiveTodos, updateSelected } from '@/entities/todos/model/todoSlice'
import { fetchTodos } from '@/entities/todos/model/actionCreators'
import { useEffect, useState } from 'react'

interface IUseActiveTodosReturn {
  getActiveTodos: () => void
  isActive: boolean
}

const useActiveTodos = (): IUseActiveTodosReturn => {
  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState(false)

  const selected = useAppSelector(state => state.todos.selected)

  const getActiveTodos = () => {
    dispatch(fetchTodos()).then(() => {
      dispatch(filterActiveTodos())
    })
    dispatch(updateSelected('Active'))
  }

  useEffect(() => {
    selected === 'Active' ? setIsActive(true) : setIsActive(false)
  }, [selected])

  return { isActive, getActiveTodos }
}

export default useActiveTodos



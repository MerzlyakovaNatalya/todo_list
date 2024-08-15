import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks-store'
import { fetchTodos } from '@/entities/todos/model/actionCreators'
import { useEffect, useState } from 'react'
import { updateSelected } from '@/entities/todos/model/todoSlice'

interface IUseAllTodosReturn {
  getAllTodos: () => void
  isActive: boolean
}

const useAllTodos = (): IUseAllTodosReturn => {
  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState(true)

  const selected = useAppSelector(state => state.todos.selected)

  const getAllTodos = () => {
    dispatch(fetchTodos())
    dispatch(updateSelected('All'))
  }

  useEffect(() => {
    selected === 'All' ? setIsActive(true) : setIsActive(false)
  }, [selected])

  return { isActive, getAllTodos }
}

export default useAllTodos

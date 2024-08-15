import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks-store'
import { filterCompletedTodos, updateSelected } from '@/entities/todos/model/todoSlice'
import { fetchTodos } from '@/entities/todos/model/actionCreators'
import { useEffect, useState } from 'react'

interface IUseCompletedTodosReturn {
  getCompletedTodos: () => void
  isActive: boolean
}

const useCompletedTodos = (): IUseCompletedTodosReturn => {
  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState(false)

  const selected = useAppSelector(state => state.todos.selected)

  const getCompletedTodos = () => {
    dispatch(fetchTodos()).then(() => {
      dispatch(filterCompletedTodos())
    })
    dispatch(updateSelected('Completed'))
  }

  useEffect(() => {
    selected === 'Completed' ? setIsActive(true) : setIsActive(false)
  }, [selected])

  return { isActive, getCompletedTodos }
}

export default useCompletedTodos

import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks-store'
import { deleteCompletedTodos, fetchTodos } from '@/entities/todos/model/actionCreators'
import { useEffect, useState } from 'react'
import { updateSelected } from '@/entities/todos/model/todoSlice'

interface IUseuseClearCompletedReturn {
    clearCompletedTodos: () => void
    isActive: boolean
}

const useClearCompleted = (): IUseuseClearCompletedReturn => {
  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState(false)

  const selected = useAppSelector(state => state.todos.selected)

  const clearCompletedTodos = () => {
    dispatch(fetchTodos()).then(() => {
      dispatch(deleteCompletedTodos())
    })
    dispatch(updateSelected('All'))
  }

  useEffect(() => {
    selected === 'ClearCompleted' ? setIsActive(true) : setIsActive(false)
  }, [selected])

  return { isActive, clearCompletedTodos }
}

export default useClearCompleted
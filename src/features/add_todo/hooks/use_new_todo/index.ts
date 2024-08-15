import { useState } from 'react'
import { useAppDispatch } from '@/shared/hooks/hooks-store'
import { addTodo } from '@/entities/todos/model/actionCreators'
import { incrementCount } from '@/entities/todos/model/todoSlice'

interface INewTodoReturn {
  value: string
  onChange: (e: string) => void
  onEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const useNewTodo = (): INewTodoReturn => {
  const [value, setValue] = useState('')
  const dispatch = useAppDispatch()

  const onChange = (e: string) => setValue(e)

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      dispatch(addTodo({ title: value }))
      dispatch(incrementCount())
    }
    setValue('')
  }

  return { value, onChange, onEnterPress }
}

export default useNewTodo

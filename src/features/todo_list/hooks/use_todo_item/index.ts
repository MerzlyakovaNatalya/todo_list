import { useAppDispatch } from '@/shared/hooks/hooks-store'
import { useCallback, useState } from 'react'
import { ITodo } from '@/entities/todos/model/types'
import { changeTodo } from '@/entities/todos/model/actionCreators'
import {
  decrementCount,
  incrementCount,
} from '@/entities/todos/model/todoSlice'

interface ITodoItem {
  item: ITodo
}

interface IUseTodoItemReturn {
  onCheckbox: () => void
}

const useTodoItem = ({ item }: ITodoItem): IUseTodoItemReturn => {
  const dispatch = useAppDispatch()
  const [toggleCheckbox, setToggleCheckbox] = useState(item.completed)

  const onCheckbox = useCallback(() => {
    setToggleCheckbox((prev) => {
      if (prev) {
        dispatch(incrementCount())
      } else {
        dispatch(decrementCount())
      }
      return !toggleCheckbox
    })
    dispatch(
      changeTodo({ id: item.id, title: item.title, completed: !toggleCheckbox })
    )
  }, [toggleCheckbox])

  return { onCheckbox }
}

export default useTodoItem

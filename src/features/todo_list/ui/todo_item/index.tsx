import { FC, memo, useEffect, useState } from 'react'
import Checkbox from '@/shared/ui/checkbox'
import useTodoItem from '../../hooks/use_todo_item'
import { ITodo } from '@/entities/todos/model/types'
import { StyledTodoItemText } from './styles'

interface ITodoItem {
  item: ITodo
}
const TodoItem: FC<ITodoItem> = ({ item }) => {
  const { onCheckbox } = useTodoItem({ item })

  return (
    <>
      <Checkbox handleToggle={onCheckbox} toggle={item.completed} />
      <StyledTodoItemText
        $text_decoration={item.completed ? 'line-through' : ''}
      >
        {item.title}
      </StyledTodoItemText>
    </>
  )
}

export default TodoItem

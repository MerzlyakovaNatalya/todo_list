import { FC, useCallback, useEffect } from 'react'
import TodoItem from '@/features/todo_list/ui/todo_item'
import ListTodos from '@/features/todo_list/ui/todo_list'
import { ITodo } from '@/entities/todos/model/types'
import { useAppSelector } from '@/shared/hooks/hooks-store'
import { StyledList } from './styles' 

const List: FC= () => {

  const todos = useAppSelector(state => state.todos.todos)

  const renders = {
    todoItem: useCallback(
      (item: ITodo) => <TodoItem item={item} />,
      [],
    )
  }

  return (
    <StyledList>
      <ListTodos list={todos} renderItem={renders.todoItem}/>
    </StyledList>
  )
}

export default List
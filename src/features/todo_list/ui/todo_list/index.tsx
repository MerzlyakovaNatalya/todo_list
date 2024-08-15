import { memo, FC } from 'react'
import { ITodo } from '@/entities/todos/model/types'
import { StyledTodoList, StyledTodoListItem } from './styles'

interface IListProps {
  list: ITodo[]
  renderItem: (item: ITodo) => React.ReactNode
}

const ListTodos: FC<IListProps> = ({ list, renderItem }) => {
  return (
    <StyledTodoList>
      {list.map(item => (
        <StyledTodoListItem key={item.id}>
          {renderItem(item)}
        </StyledTodoListItem>
      ))}
    </StyledTodoList>
  )
}

export default memo(ListTodos)
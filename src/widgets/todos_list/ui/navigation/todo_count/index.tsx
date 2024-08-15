import { FC, memo } from 'react'
import { StyledTodoCount } from './styles'
import { useAppSelector } from '@/shared/hooks/hooks-store'

const TodoCount: FC = () => {
  const count = useAppSelector((state) => state.todos.count)

  return <StyledTodoCount>{count} items left</StyledTodoCount>
}

export default memo(TodoCount)

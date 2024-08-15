import { FC, memo } from 'react'
import { StyledClearCompletedTodos } from './styles'
import useClearCompleted from '../hooks/use-clear-completed'

const ClearCompleted: FC = () => {
  const { isActive, clearCompletedTodos } = useClearCompleted()

  return (
    <StyledClearCompletedTodos $active={isActive} onClick={clearCompletedTodos}>
      Clear completed
    </StyledClearCompletedTodos>
  )
}

export default memo(ClearCompleted)

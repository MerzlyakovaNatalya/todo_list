import { FC, memo } from 'react'
import { StyledCompletedTodos } from './styles'
import useCompletedTodos from '../hooks/use-completed-todos'

const CompletedTodos: FC = () => {
  const { isActive, getCompletedTodos } = useCompletedTodos()

  return (
    <StyledCompletedTodos $active={isActive} onClick={getCompletedTodos}>
      Completed
    </StyledCompletedTodos>
  )
}

export default memo(CompletedTodos)

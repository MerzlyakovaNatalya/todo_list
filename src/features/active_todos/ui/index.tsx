import { FC, memo } from 'react'
import { StyledActiveTodos } from './styles'
import useActiveTodos from '../hooks/use-active-todos'

const ActiveTodos: FC = () => {
  const { isActive, getActiveTodos } = useActiveTodos()

  return (
    <StyledActiveTodos $active={isActive} onClick={getActiveTodos}>
      Active
    </StyledActiveTodos>
  )
}

export default memo(ActiveTodos)

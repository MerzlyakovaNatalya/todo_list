import { FC, memo } from 'react'
import { StyledAllTodo } from './styles'
import useAllTodos from '../hooks/all-todos'

const AllTodos: FC = () => {
  const { isActive, getAllTodos } = useAllTodos()

  return (
    <StyledAllTodo $active={isActive} onClick={getAllTodos}>
      All
    </StyledAllTodo>
  )
}

export default memo(AllTodos)

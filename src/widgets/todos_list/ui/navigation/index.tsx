import { FC } from 'react'
import TodoCount from '@/widgets/todos_list/ui/navigation/todo_count'
import AllTodos from '@/features/all_todos/ui'
import ActiveTodos from '@/features/active_todos/ui'
import CompletedTodos from '@/features/completed_todos/ui'
import ClearCompleted from '@/features/clear_completed/ui'
import { StyledNavigation, StyledWrapButton } from './styles'

const Navigation: FC = () => {
  return (
    <StyledNavigation>
      <TodoCount />
      <StyledWrapButton>
        <AllTodos />
        <ActiveTodos/>
        <CompletedTodos/>
      </StyledWrapButton>
      <ClearCompleted/>
    </StyledNavigation>
  )
}

export default Navigation

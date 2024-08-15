import { FC, useEffect } from 'react'
import LayoutList from '@/widgets/todos_list/ui/layout_list'
import { useAppDispatch } from '@/shared/hooks/hooks-store'
import { StyledTodos } from './styles'
import { fetchTodos } from '@/entities/todos/model/actionCreators'
import TopList from '@/widgets/todos_list/ui/top_list'
import List from '@/widgets/todos_list/ui/list'
import Navigation from '@/widgets/todos_list/ui/navigation'
import { updateCount } from '@/entities/todos/model/todoSlice'

const Todos: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos()).then(() => {
      dispatch(updateCount())
    })
  }, [])

  return (
    <StyledTodos>
      todos
      <LayoutList>
        <TopList />
        <List />
        <Navigation />
      </LayoutList>
    </StyledTodos>
  )
}

export default Todos

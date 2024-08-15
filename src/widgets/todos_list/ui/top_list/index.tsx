import { FC } from 'react'
import { StyledTopList } from './styles' 
import NewTodo from '@/features/add_todo/ui'
import IconCheck from '@/shared/assets/icons/check'

const TopList: FC= () => {
  return (
    <StyledTopList>
      <IconCheck/>
      <NewTodo/>
    </StyledTopList>
  )
}

export default TopList
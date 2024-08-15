import { FC, memo } from 'react'
import Input from '@/shared/ui/input'
import useNewTodo from '@/features/add_todo/hooks/use_new_todo'
import { StyledNewTodo } from './styles'

const NewTodo: FC = () => {
  const { value, onChange, onEnterPress } = useNewTodo()

  return (
    <StyledNewTodo>
      <Input
        value={value}
        onChangeName={onChange}
        handleKeyDown={onEnterPress}
      />
    </StyledNewTodo>
  )
}

export default memo(NewTodo)

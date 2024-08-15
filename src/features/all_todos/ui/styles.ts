import styled from 'styled-components'

interface ActiveProps {
  $active: boolean
}

export const StyledAllTodo = styled.button<ActiveProps>`
  width: 29px;
  height: 29px;
  border: ${props => (props.$active ? '1px solid #f1cfcf70' : 'none')};
  margin-left: 10px;
  border-radius: 5px;
  background-color: white;
  color: #0a0a0abf;
  cursor: pointer;
`

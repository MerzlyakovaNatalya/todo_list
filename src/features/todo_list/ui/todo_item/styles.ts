import styled from 'styled-components'

export const StyledTodoItemText = styled.div<{ $text_decoration?: string }>`
   width: 90%;
   text-decoration: ${(props) => (props.$text_decoration ? props.$text_decoration : 'none')};
   margin-left: 10px;
   white-space: nowrap;    
   overflow: hidden;       
   text-overflow: ellipsis;
  }
`
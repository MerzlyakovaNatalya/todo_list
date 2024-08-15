import { FC, ReactNode } from 'react'
import { StyledLayoutList } from './styles' 

interface ILayoutList {
  children: ReactNode
}

const LayoutList: FC<ILayoutList> = ({children}) => {
  return (
    <StyledLayoutList>
      {children}
    </StyledLayoutList>
  )
}

export default LayoutList
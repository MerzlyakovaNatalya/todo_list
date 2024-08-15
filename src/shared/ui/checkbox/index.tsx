import { FC, memo, useEffect, useState } from 'react'
import { CheckPart1, CheckPart2, StyledCheckbox, WrapCheck } from './styles'

interface ICheckbox {
  handleToggle: () => void
  toggle?: boolean
}

const Checkbox: FC<ICheckbox> = ({ handleToggle, toggle = true }) => {
  const [isToggle, setIsToggle] = useState(true)

  const onClickCheckbox = () => {
    setIsToggle(!isToggle)
    handleToggle()
  }

  useEffect(() => {
    setIsToggle(toggle)
  }, [toggle])

  return (
    <StyledCheckbox onClick={onClickCheckbox}>
      {'  '}
      <WrapCheck>
        <CheckPart1 id="check-part-1" $active={isToggle} />
        <CheckPart2 id="check-part-2" $active={isToggle} />
      </WrapCheck>
    </StyledCheckbox>
  )
}

export default memo(Checkbox)

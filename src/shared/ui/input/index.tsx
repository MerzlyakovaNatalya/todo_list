import { FC, memo, useEffect, useState } from 'react'
import { StyledInput } from './styles'

interface IInput {
  value: string
  onChangeName: (e: string) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({ value, onChangeName, handleKeyDown }) => {
  const [textValue, setTextValue] = useState(value)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeName(e.target.value)
    setTextValue(e.target.value)
  }

  useEffect(() => setTextValue(value), [value])

  return (
    <>
      <StyledInput
        placeholder="What needs to be done?"
        value={textValue}
        onChange={(e) => onChange(e)}
        onKeyDown={handleKeyDown}
      />
    </>
  )
}

export default memo(Input)

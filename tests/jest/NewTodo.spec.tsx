import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import NewTodo from '@/features/add_todo/ui'
import useNewTodo from '@/features/add_todo/hooks/use_new_todo'

jest.mock('@/features/add_todo/hooks/use_new_todo') 

describe('NewTodo Component', () => {
  const mockUseNewTodo = {
    value: '',
    onChange: jest.fn(),
    onEnterPress: jest.fn(),
  }

  beforeEach(() => {
    ;(useNewTodo as jest.Mock).mockReturnValue(mockUseNewTodo)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the component correctly', () => {
    render(<NewTodo />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('calls onChange when input value changes', () => {
    render(<NewTodo />)
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'New Todo' } })

    expect(mockUseNewTodo.onChange).toHaveBeenCalledWith('New Todo')
  })

  it('calls onEnterPress when Enter key is pressed', () => {
    render(<NewTodo />)
    const input = screen.getByRole('textbox')

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(mockUseNewTodo.onEnterPress).toHaveBeenCalled()
  })
})

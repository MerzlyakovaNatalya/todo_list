import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import CompletedTodos from '@/features/completed_todos/ui'
import useCompletedTodos from '@/features/completed_todos/hooks/use-completed-todos'

jest.mock('@/features/completed_todos/hooks/use-completed-todos')

describe('CompletedTodos Component', () => {
  const mockUseCompletedTodos = {
    isActive: false,
    getCompletedTodos: jest.fn(),
  }

  beforeEach(() => {
    ;(useCompletedTodos as jest.Mock).mockReturnValue(mockUseCompletedTodos)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the button correctly', () => {
    render(<CompletedTodos />)
    const button = screen.getByText('Completed')
    expect(button).toBeInTheDocument()
  })

  it('applies the active style when isActive is true', () => {
    ;(useCompletedTodos as jest.Mock).mockReturnValue({
      ...mockUseCompletedTodos,
      isActive: true,
    })

    render(<CompletedTodos />)
    const button = screen.getByText('Completed')

    expect(button).toHaveStyle('border: 1px solid #f1cfcf70')
  })

  it('calls getCompletedTodos when button is clicked', () => {
    render(<CompletedTodos />)
    const button = screen.getByText('Completed')

    fireEvent.click(button)

    expect(mockUseCompletedTodos.getCompletedTodos).toHaveBeenCalled()
  })
})

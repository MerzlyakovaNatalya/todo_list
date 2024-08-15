import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ClearCompleted from '@/features/clear_completed/ui'
import useClearCompleted from '@/features/clear_completed/hooks/use-clear-completed'

jest.mock('@/features/clear_completed/hooks/use-clear-completed') 

describe('ClearCompleted Component', () => {
  const mockUseClearCompleted = {
    isActive: false,
    clearCompletedTodos: jest.fn(),
  }

  beforeEach(() => {
    (useClearCompleted as jest.Mock).mockReturnValue(mockUseClearCompleted)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the button correctly', () => {
    render(<ClearCompleted />)
    const button = screen.getByText('Clear completed')
    expect(button).toBeInTheDocument()
  })

  it('calls clearCompletedTodos when button is clicked', () => {
    render(<ClearCompleted />)
    const button = screen.getByText('Clear completed')

    fireEvent.click(button)

    expect(mockUseClearCompleted.clearCompletedTodos).toHaveBeenCalled()
  })
})
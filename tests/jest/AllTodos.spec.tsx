import { render, screen, fireEvent } from '@testing-library/react'
import AllTodos from '@/features/all_todos/ui'
import useAllTodos from '@/features/all_todos/hooks/all-todos'

jest.mock('@/features/all_todos/hooks/all-todos') 

describe('AllTodos Component', () => {
  const mockUseAllTodos = {
    isActive: false,
    getAllTodos: jest.fn(),
  }

  beforeEach(() => {
    (useAllTodos as jest.Mock).mockReturnValue(mockUseAllTodos)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the button correctly', () => {
    render(<AllTodos />)
    expect(screen.getByText('All')).toBeInTheDocument()
  })

  it('applies the active class when isActive is true', () => {
    (useAllTodos as jest.Mock).mockReturnValue({
      ...mockUseAllTodos,
      isActive: true,
    })

    render(<AllTodos />)
    const button = screen.getByText('All')
    
    expect(button).toHaveStyle('border: 1px solid #f1cfcf70') 
  })

  it('calls getAllTodos when button is clicked', () => {
    render(<AllTodos />)
    const button = screen.getByText('All')

    fireEvent.click(button)

    expect(mockUseAllTodos.getAllTodos).toHaveBeenCalled()
  })
})
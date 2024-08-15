import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import useActiveTodos from '@/features/active_todos/hooks/use-active-todos'
import ActiveTodos from '@/features/active_todos/ui'

// Мокаем хук useActiveTodos
jest.mock('@/features/active_todos/hooks/use-active-todos')

const mockUseActiveTodos = useActiveTodos as jest.Mock

describe('ActiveTodos Component', () => {
  beforeEach(() => {
    // Сбрасываем моки перед каждым тестом
    mockUseActiveTodos.mockReset()
  })

  it('should render with inactive state', () => {
    mockUseActiveTodos.mockReturnValue({
      isActive: false,
      getActiveTodos: jest.fn(),
    })

    render(<ActiveTodos />)

    const activeTodosElement = screen.getByText('Active')

    expect(activeTodosElement).toBeInTheDocument()
    expect(activeTodosElement).toHaveStyle('cursor: pointer')
  })

  it('should render with active state', () => {
    mockUseActiveTodos.mockReturnValue({
      isActive: true,
      getActiveTodos: jest.fn(),
    })

    render(<ActiveTodos />)

    const activeTodosElement = screen.getByText('Active')
    expect(activeTodosElement).toHaveStyle('border: 1px solid #f1cfcf70')
  })

  it('should call getActiveTodos on click', () => {
    const mockGetActiveTodos = jest.fn()

    mockUseActiveTodos.mockReturnValue({
      isActive: false,
      getActiveTodos: mockGetActiveTodos,
    })

    render(<ActiveTodos />)

    const activeTodosElement = screen.getByText('Active')
    fireEvent.click(activeTodosElement)

    // Проверяем, что getActiveTodos был вызван
    expect(mockGetActiveTodos).toHaveBeenCalled()
  })
})

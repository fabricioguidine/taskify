import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // para os matchers customizados
import App from '../App';

describe('Taskify App', () => {
  it('adds a task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add task');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Learn Testing' } });
    fireEvent.click(button);

    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
  });

  it('removes a task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add task');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Task to Remove' } });
    fireEvent.click(button);

    const removeBtn = screen.getByText('Remove');
    fireEvent.click(removeBtn);

    expect(screen.queryByText('Task to Remove')).not.toBeInTheDocument();
  });
});

it('does not add an empty task', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add task');
  const button = screen.getByText('Add');

  // Tenta adicionar com campo vazio
  fireEvent.change(input, { target: { value: '   ' } });
  fireEvent.click(button);

  // Não deve mostrar nenhuma tarefa
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
});

it('clears input after adding a task', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add task') as HTMLInputElement;
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  expect(input.value).toBe('');
});

it('adds multiple tasks', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add task');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'Task 1' } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: 'Task 2' } });
  fireEvent.click(button);

  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();
});

it('does not add empty or whitespace-only tasks', () => {
  render(<App />)
  const input = screen.getByPlaceholderText('Add task')
  const button = screen.getByText('Add')

  fireEvent.change(input, { target: { value: '    ' } })
  fireEvent.click(button)

  expect(screen.queryByText('    ')).not.toBeInTheDocument()
})

it('allows adding duplicate tasks', () => {
  render(<App />)
  const input = screen.getByPlaceholderText('Add task')
  const button = screen.getByText('Add')

  fireEvent.change(input, { target: { value: 'Duplicate Task' } })
  fireEvent.click(button)
  fireEvent.change(input, { target: { value: 'Duplicate Task' } })
  fireEvent.click(button)

  const tasks = screen.getAllByText('Duplicate Task')
  expect(tasks.length).toBe(2)
})

it('removing a task when list is empty does not crash', () => {
  render(<App />)
  expect(() => {
    const removeBtn = screen.queryByText('Remove')
    if (removeBtn) fireEvent.click(removeBtn)
  }).not.toThrow()
})

it('can add and remove multiple tasks sequentially', () => {
  render(<App />)
  const input = screen.getByPlaceholderText('Add task')
  const button = screen.getByText('Add')

  const taskNames = ['Task 1', 'Task 2', 'Task 3']
  taskNames.forEach(task => {
    fireEvent.change(input, { target: { value: task } })
    fireEvent.click(button)
  })

  taskNames.forEach(task => {
    expect(screen.getByText(task)).toBeInTheDocument()
  })

  // Remove Task 2
  fireEvent.click(screen.getAllByText('Remove')[1])
  expect(screen.queryByText('Task 2')).not.toBeInTheDocument()
  expect(screen.getByText('Task 1')).toBeInTheDocument()
  expect(screen.getByText('Task 3')).toBeInTheDocument()
})

it('clears input after adding a task', () => {
  render(<App />)
  const input = screen.getByPlaceholderText('Add task') as HTMLInputElement
  const button = screen.getByText('Add')

  fireEvent.change(input, { target: { value: 'Task to Add' } })
  fireEvent.click(button)

  expect(input.value).toBe('')
})

it('adds task with special characters', () => {
  render(<App />)
  const input = screen.getByPlaceholderText('Add task')
  const button = screen.getByText('Add')

  const specialTask = '!@#$%^&*()_+12345'
  fireEvent.change(input, { target: { value: specialTask } })
  fireEvent.click(button)

  expect(screen.getByText(specialTask)).toBeInTheDocument()
})

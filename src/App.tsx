import { useState } from 'react'

type Task = {
  id: string
  text: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  function addTask() {
    if (inputValue.trim() !== '') {
      const newTask = { id: crypto.randomUUID(), text: inputValue.trim() }
      setTasks([...tasks, newTask])
      setInputValue('')
    }
  }

  function removeTask(taskToRemove: Task) {
    setTasks(tasks.filter(task => task.id !== taskToRemove.id))
  }

  return (
    <div>
      <input
        placeholder="Add task"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

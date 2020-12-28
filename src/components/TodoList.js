import { useState } from 'react'
import TodoItem from './TodoItem'
import { tasks } from '../data/data'

const TodoList = () => {

  const [todos, setTodos] = useState(tasks)

  const todoList = todos
    .map(todo => <TodoItem 
      key={todo.task} 
      todo={todo}
    />)

  return (
    <div className="card column">
      {todoList}
      <div className="card-item secondary">
        <p>5 items left</p>
        <p>Clear Completed</p>
      </div>
    </div>
  )
}

export default TodoList

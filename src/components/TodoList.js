import { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import { tasks } from '../data/data'

const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [itemsLeft, setItemsLeft] = useState(0)

  useEffect(() => {
    setTodos(tasks)
  }, [])

  useEffect(() => {
    setItemsLeft(todos.filter(todo => !todo.completed).length)
  }, [todos])

  const handleClick = (task, e) => {
    let newTodos
    if(e.target.parentElement.classList.contains('cross')) {
      newTodos = todos.filter(todo => todo.task !== task)
    } else {
      newTodos = todos.map(todo => {
        if(todo.task === task) {
          return {
            completed: !todo.completed,
            task
          }
        } else {
          return todo
        }
      })
    }

    setTodos(newTodos)
  }

  const clearCompleted = () => setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
    
  const todoList = todos
    .map(todo => <TodoItem 
      handleClick={handleClick}
      key={todo.task} 
      todo={todo}
    />)

  return (
    <div className="card column">
      {todoList}
      <div className="card-item secondary">
        <p>{itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left</p>
        <p onClick={clearCompleted}>Clear Completed</p>
      </div>
    </div>
  )
}

export default TodoList

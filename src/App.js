
import { useState, useEffect } from 'react'
import { tasks } from './data/data'
import Heading from './components/Heading'
import TodoList from './components/TodoList'

const App = () => {

  const [todos, setTodos] = useState([])
  const [itemsLeft, setItemsLeft] = useState(0)
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    setTodos(tasks)
  }, [])

  useEffect(() => {
    setItemsLeft(todos.filter(todo => !todo.completed).length)
  }, [todos])

  const handleInputChange = e => setNewTodo(e.target.value)

  const handleSubmit = e => {
    if(e.keyCode === 13 && newTodo) {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          task: e.target.value,
          completed: false
        }
      
      ])

      setNewTodo('')
    }
  }

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

  return (
    <div className="App">
      <Heading 
        handleSubmit={handleSubmit} 
        newTodo={newTodo}
        handleInputChange={handleInputChange}
      />
      <TodoList
        todos={todos}
        itemsLeft={itemsLeft}
        handleClick={handleClick}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;

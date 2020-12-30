import { useState, useEffect } from 'react'
import { tasks } from './data/data'
import Heading from './components/Heading'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

const App = () => {

  const [todos, setTodos] = useState([])
  const [itemsLeft, setItemsLeft] = useState(0)
  const [newTodo, setNewTodo] = useState('')
  const [view, setView] = useState('All')
  const [todosView, setTodosView] = useState([])
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    setTodos(tasks)
    setTodosView(tasks)
  }, [])

  useEffect(() => {
    setItemsLeft(todos.filter(todo => !todo.completed).length)
  }, [todos])

  useEffect(() => {
    if (view === 'All') {
      setTodosView(todos)
    } else if (view === 'Active') {
      setTodosView(todos.filter(todo => !todo.completed))
    } else if (view === 'Completed') {
      setTodosView(todos.filter(todo => todo.completed))
    }
  }, [todos, view])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.add('light')
      setDarkMode(false)
    } else {
      document.body.classList.remove('light')
      setDarkMode(true)
    }
    
    
  }

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

  const toggleView = e => {
    const textView = e.target.textContent
    const footerTexts = document.querySelectorAll('.footer-text')
    
    footerTexts.forEach(text => {
      text.classList.remove('selected')

      if (text === e.target) text.classList.add('selected')
    })

    if (textView === 'All') {
      setView(textView)
    } else if (textView === 'Active') {
      setView(textView)
    } else if (textView === 'Completed') {
      setView(textView)
    }
  }

  return (
    <div className="App">
      <Heading 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleSubmit={handleSubmit} 
        newTodo={newTodo}
        handleInputChange={handleInputChange}
      />
      <TodoList
        todos={todos}
        todosView={todosView}
        itemsLeft={itemsLeft}
        handleClick={handleClick}
        clearCompleted={clearCompleted}
      />
      <Footer toggleView={toggleView} />
    </div>
  );
}

export default App;

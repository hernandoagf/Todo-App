import { useState, useEffect } from 'react'
import { tasks } from './data/data'
import { DragDropContext } from 'react-beautiful-dnd'

import Heading from './components/Heading'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

const App = () => {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [view, setView] = useState('All')
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    setTodos(tasks)
  }, [])

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

  const onDragEnd = result => {
    const { destination, source } = result

    if (!destination) return

    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) return

    const draggedTask = todos[source.index]
    const newTasks = Array.from(todos)
    
    newTasks.splice(source.index, 1)
    newTasks.splice(destination.index, 0, draggedTask)
    
    setTodos(newTasks)

    
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
      <DragDropContext onDragEnd={onDragEnd}>
        <TodoList
          todos={todos}
          view={view}
          handleClick={handleClick}
          clearCompleted={clearCompleted}
        />
      </DragDropContext>
      <Footer toggleView={toggleView} />
    </div>
  );
}

export default App;

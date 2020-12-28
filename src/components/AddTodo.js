import { useState } from 'react'

const AddTodo = () => {

  const [newTodo, setNewTodo] = useState('')

  return (
    <div className="card">
      <div className="card-item">
        <div className="check-circle"></div>
        <input 
          className="todo-input"
          type="text" 
          value={newTodo} 
          onChange={e => setNewTodo(e.target.value)} 
          placeholder="Create a new todo..." 
          />
      </div>
    </div>
  )
}

export default AddTodo

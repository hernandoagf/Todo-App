const AddTodo = ({ handleSubmit, newTodo, handleInputChange }) => {

  return (
    <div className="card">
      <div className="card-item">
        <div className="check-circle"></div>
        <input 
          className="todo-input"
          type="text" 
          title="New Todo input"
          value={newTodo} 
          onChange={handleInputChange} 
          onKeyUp={handleSubmit}
          placeholder="Create a new todo..." 
          />
      </div>
    </div>
  )
}

export default AddTodo

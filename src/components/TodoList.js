import TodoItem from './TodoItem'

const TodoList = ({ todos, itemsLeft, handleClick, clearCompleted }) => {

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

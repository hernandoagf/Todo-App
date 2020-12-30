import TodoItem from './TodoItem'

const TodoList = ({todos, todosView, itemsLeft, handleClick, clearCompleted }) => {

  const todoList = todosView
    .map(todo => <TodoItem 
      handleClick={handleClick}
      key={todo.task} 
      todo={todo}
    />)

  return (
    <div className="card column">
      {todoList}
      <div className="card-item secondary">
        <h4>{itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left</h4>
        <h4 className="clear-completed" onClick={clearCompleted}>Clear Completed</h4>
      </div>
    </div>
  )
}

export default TodoList

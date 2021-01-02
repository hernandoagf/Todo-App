import TodoItem from './TodoItem'
import { Droppable } from 'react-beautiful-dnd'

const TodoList = ({todos, view, handleClick, clearCompleted }) => {

  const itemsLeft = todos.filter(todo => !todo.completed).length

  const todoList = todos
    .map((todo, index) => <TodoItem
      handleClick={handleClick}
      key={Math.floor(Math.random() * 10000)} 
      todo={todo}
      view={view}
      index={index}
    />)

  return (
    <div className="card column">
      <Droppable droppableId="tasks">
        {provided => (
          <div
            
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todoList}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="card-item secondary">
        <h4>{itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left</h4>
        <h4 className="clear-completed" onClick={clearCompleted}>Clear Completed</h4>
      </div>
    </div>
  )
}

export default TodoList

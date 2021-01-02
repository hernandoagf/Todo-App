import cross from '../icons/icon-cross.svg'
import checkImg from '../icons/icon-check.svg'
import { Draggable } from 'react-beautiful-dnd'

const TodoItem = ({ todo: { task, completed }, view, handleClick, index }) => {
  const checkIcon = <img src={checkImg} alt="check-icon"/>
  const checkFill = <div className="check-circle-fill" />

  const taskClasses = () => {
    if (view === 'Active' && completed) return 'card-item list invisible'
    else if (view === 'Completed' && !completed) return 'card-item list invisible'
    else return 'card-item list visible'
  }

  return (
    <Draggable draggableId={String(Math.floor(Math.random() * 10000))} index={index}>
      {provided => (
        <div 
          className={taskClasses()}
          onClick={(e) => handleClick(task, e)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={completed ? 'check-circle completed' : 'check-circle'}>
            {completed ? checkIcon : checkFill}
          </div>
          <p className={completed ? 'task-completed' : ''}>{task}</p>
          <div className="cross">
            <img src={cross} alt="close cross"/>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default TodoItem

import cross from '../icons/icon-cross.svg'
import checkImg from '../icons/icon-check.svg'

const TodoItem = ({ todo: { task, completed }, handleClick }) => {
  const checkIcon = <img src={checkImg} alt="check-icon"/>
  
  return (
    <div className="card-item list" onClick={(e) => handleClick(task, e)}>
      <div className={completed ? 'check-circle completed' : 'check-circle'}>
        {completed ? checkIcon : ''}
      </div>
      <span><p className={completed ? 'task-completed' : ''}>{task}</p></span>
      <div className="cross">
        <img src={cross} alt="close cross"/>
      </div>
    </div>
  )
}

export default TodoItem

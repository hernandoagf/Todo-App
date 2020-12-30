import AddTodo from './AddTodo'

const Heading = ({ handleSubmit, newTodo, handleInputChange }) => {
  return (
    <div className="heading">
      <div className="heading-first">
        <h1>TODO</h1>
        <div>switch</div>
      </div>
      <AddTodo 
        handleSubmit={handleSubmit} 
        newTodo={newTodo}
        handleInputChange={handleInputChange}
      />
    </div>
  )
}

export default Heading

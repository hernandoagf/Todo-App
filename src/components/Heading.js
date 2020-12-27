import AddTodo from './AddTodo'

const Heading = () => {
  return (
    <div className="heading">
      <div className="heading-first">
        <h1>TODO</h1>
        <div>switch</div>
      </div>
      <AddTodo />
    </div>
  )
}

export default Heading

import AddTodo from './AddTodo'
import iconSun from '../icons/icon-sun.svg'
import iconMoon from '../icons/icon-moon.svg'

const Heading = ({ darkMode, toggleDarkMode, handleSubmit, newTodo, handleInputChange }) => {

  const imgSun = <img src={iconSun} alt="sun-icon"/>
  const imgMoon = <img src={iconMoon} alt="moon-icon"/>

  return (
    <div className="heading">
      <div className="heading-first">
        <h1>TODO</h1>
        <div 
          id="theme-switch" 
          onClick={toggleDarkMode}
        >
          {darkMode ? imgSun : imgMoon}
        </div>
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

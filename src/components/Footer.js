const Footer = ({ toggleView }) => {
  return (
    <div className="footer-container">
      <div id="footer" className="card">
        <div className="card-item">
          <h3 onClick={toggleView} className="footer-text selected">All</h3>
          <h3 onClick={toggleView} className="footer-text">Active</h3>
          <h3 onClick={toggleView} className="footer-text">Completed</h3>
        </div>
      </div>
        <h5 className="footer-instructions">Drag and drop to reorder list</h5>
    </div>
  )
}

export default Footer

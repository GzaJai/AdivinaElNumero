import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="name__footer">
        <a href="https://github.com/GzaJai/"><h3>Gonzalo Jaime</h3>
          <h4>Developer</h4></a>
      </div>
      <div className="links">
        <a href="https://github.com/GzaJai/" target="_blank"><i className='bx bxl-github' ></i></a>
        <a href="https://www.linkedin.com/in/gjaimeguinazu/" target="_blank"><i className='bx bxl-linkedin' ></i></a>
      </div>
    </footer>
  )
}

export default Footer
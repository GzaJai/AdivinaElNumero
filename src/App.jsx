import React from 'react'
import './styles/App.css'
import LogicaJuego from './components/LogicaJuego'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    
      <div className='game-div'>
        <div className="game-heading">
          <h2 className='game-title'>Adivina el número</h2>
          <div className="game-info-wrap">
            <p className='game-info'>En este tienes que tratar de adivinar el número.</p>
            <span className='more-info'>Saber más</span>
          </div>
        </div>
        <div className='game-wrap'>
          <LogicaJuego />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
import React, { useState } from 'react'
import './styles/App.css'
import LogicaJuego from './components/LogicaJuego'
import Footer from './components/Footer'
import MasInfo from './components/MasInfo'


const App = () => {

  const [isMasInfoOpen, setIsMasInfoOpen] = useState(false)

  const handleSaberMas = () => {
    setIsMasInfoOpen(!isMasInfoOpen);
  }
  return (
    <>
      <div className='game-div'>
        <div className="game-heading">
          <h2 className='game-title'>Adivina el número</h2>
          <div className="game-info-wrap">
            <p className='game-info'>En este tienes que tratar de adivinar el número.</p>
            <button className='more-info' onClick={handleSaberMas}>Saber más</button>
          </div>
        </div>
        <MasInfo isOpen={isMasInfoOpen} handleClose={handleSaberMas}/>
        <div className='game-wrap'>
          <LogicaJuego />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
import React, { useState } from 'react'
import './styles/App.css'
import LogicaJuego from './components/LogicaJuego'
import Footer from './components/Footer'
import RulesDialog from './components/RulesDialog'
import { QuestionMark } from './components/icons/questionMark'
import { Sparkles } from 'lucide-react'


const App = () => {

  const [showRules, setShowRules] = useState(false)

  return (
    <div className=''>
      <header className='w-full flex fixed top-0 py-8 border-b border-indigo-500/60 bg-slate-800'>
        <div className='w-full flex justify-between items-center px-8 md:w-1/2 md:mx-auto'>
          <Sparkles className='text-indigo-600'/>
          <h1 className='text-2xl font-bold'>Adivina el número</h1>
          <button onClick={() => setShowRules(true)} className='rounded-full p-1 bg-slate-400 hover:bg-indigo-400 duration-75'>
            <QuestionMark width={24} height={24} stroke={'#ffffff'} strokeWidth={3}/>
          </button>
        </div>
      </header>
      <div className='mt-28 md:mt-36'>
        <RulesDialog isOpen={showRules} onClose={() => setShowRules(false)} title={"Como jugar"} />
        <LogicaJuego />
      </div>
      <Footer />
    </div>
  )
}

export default App
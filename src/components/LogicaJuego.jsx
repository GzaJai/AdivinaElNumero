import React,{useState, useEffect, useCallback} from "react";
import { DigitInput } from "./DigitInput";
import { GuessHistory } from "./GuessHistory";
import { Eye, EyeOff } from 'lucide-react'
import { cn } from "../utils/cn";

function generateSecret() {
    let result = ""
    for (let i = 0; i < 4; i++) {
      result += Math.floor(Math.random() * 10).toString()
    }
    return result
  }

  function evaluateGuess(guess, secret) {
    let bien = 0
    let regular = 0
    const secretArr = secret.split("")
    const guessArr = guess.split("")
    const secretRemaining = []
    const guessRemaining = []

    for (let i = 0; i < 4; i++) {
      if (guessArr[i] === secretArr[i]) {
        bien++
      } else {
        secretRemaining.push(secretArr[i])
        guessRemaining.push(guessArr[i])
      }
    }

    for (const g of guessRemaining) {
      const idx = secretRemaining.indexOf(g)
      if (idx !== -1) {
        regular++
        secretRemaining.splice(idx, 1)
      }
    }

    return { bien, regular }
  }

const LogicaJuego = () => {
  
  const [secret, setSecret] = useState(() => generateSecret())
  const [digits, setDigits] = useState(["","","",""])
  const [guesses, setGuesses] = useState([])
  const [showSecret, setShowSecret] = useState(false);
  
  const handleSubmit = useCallback(() => {
    const guessStr = digits.join("")
    const result = evaluateGuess(guessStr, secret)
    const newGuess = { number: guessStr, ...result }
    
    setGuesses((prev) => [...prev, newGuess])
    setDigits(["","","",""])

    if (result.bien === 4) {
      setGameWon(true)
    }
    
  }, [digits, secret])

  return (
    <>
      <div className="w-[90%] flex flex-col gap-4 items-center py-8 mt-8 mx-auto border border-indigo-500/60 rounded-2xl">
        <h2 className="text-lg font-semibold">Ingresa tu numero</h2>
        <div className="flex flex-col gap-8 items-center">
          <DigitInput value={digits} onChange={setDigits} disabled={false}/>
          <button className="w-1/2 font-semibold p-4 bg-indigo-600/40 rounded-lg hover:bg-indigo-600 duration-75" onClick={handleSubmit}>Adivinar</button>
        </div>
      </div>
      <div className="w-[90%] flex flex-col gap-4 items-center py-8 mt-4 mx-auto border border-indigo-500/60 rounded-2xl">
        <GuessHistory guesses={guesses}/>
      </div>
      <div className="w-[80%] flex flex-col items-center mx-auto py-4">
        <button className={cn("p-2 rounded-lg hover:bg-indigo-600 duration-100", showSecret && "text-indigo-400 hover:text-white")}
        onClick={() => setShowSecret(!showSecret)}>
          {showSecret ? (
            <span className="flex items-center gap-2">
              <EyeOff className="w-4 h-4"/>
              Ocultar: <span>{secret}</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4"/>
              Mostrar numero oculto
            </span>
          )}
        </button>
      </div>
    </>

  )
}

export default LogicaJuego
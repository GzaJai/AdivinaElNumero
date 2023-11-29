import React,{useState, useEffect} from "react";
import { gameLogic } from "../utils/logica-juego";
import '../styles/LogicaJuego.css'
import { getRandomNumber } from "../utils/getRadomNumber";
import { getPlayerNumber } from "../utils/getPlayerNumber";
import { intentoObjectCreator } from "../utils/intentoObjetoCreator";
import LogResults from "./logResults";
import { inputHandler } from "../utils/inputEnterHandler";



const LogicaJuego = () => {
  
  const [currentNumber, setCurrentNumber] = useState(0);
  const [showNumber, setShowNumber] = useState(false);
  const [cantBien,setCantBien] = useState(0);
  const [cantReg,setCantReg] = useState(0);
  const [cantIntentos,setCantIntentos] = useState(0);
  const [finalizo,setFinalizo] = useState(false);
  const [playerNumber,setPlayerNumber] = useState(0);
  const [intentosData, setIntentosData] = useState([]);

  const generateRandomNumber = () =>{
    setCurrentNumber(getRandomNumber());
  }
  useEffect(()=>{
    generateRandomNumber()
    inputHandler(cilckHandle)
  }, [])
  useEffect(()=>{
    console.log(intentosData);
  }, [intentosData])

  const handleShowNumber = () => {
    setShowNumber(!showNumber)
  }

  const updatePlayerNumber =()=>{
    setPlayerNumber(getPlayerNumber());
  }
  const setData =()=>{
    let dataJuego = gameLogic(currentNumber, playerNumber);
    setCantBien(dataJuego.cantBien);
    setCantReg(dataJuego.cantRegular);
    setCantIntentos(dataJuego.intentos);
    setFinalizo(dataJuego.finalizo);
    createIntentoObject(playerNumber, dataJuego.cantBien, dataJuego.cantRegular)
  }
  const createIntentoObject = (parNumero, parNumsBien, parNumsReg) =>{
    let newObject = intentoObjectCreator(parNumero, parNumsBien, parNumsReg)

    setIntentosData((prevArray) => [...prevArray, newObject])
  }
  const cilckHandle = ()=>{
    setData()
  }

  return (
    <>
      <div className="input-wrap">
        <label className="input-label" htmlFor="player-input">Ingresa tu número</label>
        <span className="input-label"><i className='bx bxs-down-arrow'></i></span>
        <input className="player-input" type="number" 
        name="player-input" id="player-number" onChange={updatePlayerNumber}/>
      </div>
      <button id="runGameButton" className="rungame-button" onClick={cilckHandle}>Comenzar Juego</button>
      <div id="results-div">
        <div className="res-titles-wrap">
          <p className="res-title numero">Número</p>
          <p className="res-title bien">Bien</p>
          <p className="res-title regular">Regular</p>
        </div>
        {intentosData.map((element, index)=>{
            return(<LogResults key={index} numero={element.resultado.numero} bien={element.resultado.bien} regular={element.resultado.regular}/>)})}
      </div>
        <button className="show-number" onClick={handleShowNumber}>Mostrar Número Oculto</button>
        { showNumber && (<p>{currentNumber}</p>) }
    </>
  )
}


export default LogicaJuego



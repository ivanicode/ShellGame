import {useState} from 'react'
import { calculateBallLeft, getRandomIntInclusive } from './helpers'

export function useGame(){
  const positionConfigurations = [
    [100, 210, 320],
    [100, 320, 210],
    [210, 320, 100],
    [210, 100, 320],
    [320, 210, 100],
    [320, 100, 210]
  ]
      
  const [newKittyPosition, setNewKittyPosition] = useState(positionConfigurations[0])
  const [kittyWithBall, setKittyWithBall] = useState(-1)
  const [kittyWithBallIsVisible, setKittyWithBallIsVisible] = useState(false)
  const [ballLeft, setBallLeft] = useState(0)
  const [message, setMessage] = useState("")
  const [disabledButton, setDisabledButton] = useState(false)

  const whichKitty = getRandomIntInclusive(0, 2)

  function buttonClicked(){
    setNewKittyPosition(positionConfigurations[0])
    setDisabledButton(true)
    setMessage("")
    setKittyWithBall(whichKitty)
    setBallLeft(calculateBallLeft(whichKitty))
    setKittyWithBallIsVisible(true)
    
    window.setTimeout(() => {
      let counter = 0;
      setKittyWithBallIsVisible(false)

      const intervalHandler = window.setInterval(() => {
        setNewKittyPosition(positionConfigurations[getRandomIntInclusive(1, 5)])
        counter++
        if(counter >= 10){
          clearInterval(intervalHandler)
        }
      }, 500)
    }, 1000)
  }

  function clickedKitty(event){
    if(kittyWithBall === parseInt(event.target.dataset.nr, 10)){
      setBallLeft(newKittyPosition[kittyWithBall] + 36)
      setKittyWithBallIsVisible(true)
      setMessage("You won!")
    } else {
      setMessage("You lose...")
    }
    setDisabledButton(false)
  }

  return { buttonClicked, clickedKitty, message, disabledButton, ballLeft, kittyWithBallIsVisible, newKittyPosition }
  
}


  
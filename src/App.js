import happy from './happy.svg';
import wool from './wool.svg';
import './App.css';
import {useState} from 'react'

function App() {

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

  function getRandomIntInclusive(min, max) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }  while (randomNumber === getRandomIntInclusive.last)
    getRandomIntInclusive.last = randomNumber
    return randomNumber;
  }
  const whichKitty = getRandomIntInclusive(0, 2)
  function buttonClicked(){
    setNewKittyPosition(positionConfigurations[0])
    setDisabledButton(true)
    setMessage("")
    setKittyWithBall(whichKitty) 
    setBallLeft((whichKitty * 110) + 136)
    setKittyWithBallIsVisible(true)
    window.setTimeout(() => {
        setKittyWithBallIsVisible(false)
    }, 2000)
    window.setTimeout(() => {
      const numberOfSwitches = 5;
      for(let i = 0; i < numberOfSwitches; i++){
        setKittyWithBallIsVisible(false)
        window.setTimeout(() => {
          setNewKittyPosition(positionConfigurations[getRandomIntInclusive(1, 5)])
        }, i * 1000)
      }
    }, 2000)
  }

  function clickedKitty(event){
    if(kittyWithBall == event.target.dataset.nr){
      setBallLeft(newKittyPosition[kittyWithBall] + 36)
      setKittyWithBallIsVisible(true)
      setMessage("Wygrana!")
    } else {
      setMessage("Przegrana...")
    }
    setDisabledButton(false)
  }

  return (
    <div className="App">
      <div className="copyright">Icons made by <a href="https://www.flaticon.com/authors/smashicons" 
      title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div className="game">
        <img src={happy} style={{left: newKittyPosition[0]}} className="kitty first" alt="kitty" data-nr={0} onClick={clickedKitty} />
        <img src={happy} style={{left: newKittyPosition[1]}} className="kitty second" alt="kitty" data-nr={1} onClick={clickedKitty} />
        <img src={happy} style={{left: newKittyPosition[2]}} className="kitty third" alt="kitty" data-nr={2} onClick={clickedKitty} />
        <img src={wool} id="wool" style={{left: ballLeft}} className={kittyWithBallIsVisible ? "visibleWool" : "wool"} alt="wool" />
        {console.log(disabledButton)}
        <button className="button" onClick={buttonClicked} disabled={disabledButton}>Start</button>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;

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
  function foo(event){
    console.log(event.target.dataset.nr)
    console.log(event.target.getAttribute('data-nr'))
    /*Array.from(event.currentTarget.children).forEach((el) => {
      el.className === 
    })*/
  }
  function getRandomIntInclusive(min, max) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }  while (randomNumber === getRandomIntInclusive.last)
    getRandomIntInclusive.last = randomNumber
    return randomNumber;
  }
  function buttonClicked(){
    const whichKitty = getRandomIntInclusive(0, 2)
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
        }, i * 2000)
      }
    }, 2000)
  }

  return (
    <div className="App">
      <div className="copyright">Icons made by <a href="https://www.flaticon.com/authors/smashicons" 
      title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div className="game" onClick={foo}>
        <img src={happy} style={{left: newKittyPosition[0]}} className="kitty first" alt="kitty" data-nr={0}/>
        <img src={happy} style={{left: newKittyPosition[1]}} className="kitty second" alt="kitty" data-nr={1}/>
        <img src={happy} style={{left: newKittyPosition[2]}} className="kitty third" alt="kitty" data-nr={2}/>
        <img src={wool} id="wool" style={{left: ballLeft}} className={kittyWithBallIsVisible ? "visibleWool" : "wool"} alt="wool" />
        <button className="button" onClick={buttonClicked}>Start</button>
      </div>
    </div>
  );
}

export default App;

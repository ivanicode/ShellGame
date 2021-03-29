import happy from './happy.svg';
import wool from './wool.svg';
import './App.css';
import { useGame } from './appHooks'

function App() {

  const { buttonClicked, clickedKitty, message, disabledButton, ballLeft, kittyWithBallIsVisible, newKittyPosition, ableToClickKitty } = useGame()
  

  return (
    <div className="App">
      <div className="copyright">Icons made by <a href="https://www.flaticon.com/authors/smashicons" 
      title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div className="game">
        <img src={happy} style={{left: newKittyPosition[0]}} className="kitty first" label="kitty1" alt="kittyOne" data-nr={0} onClick={ableToClickKitty ? clickedKitty : null} />
        <img src={happy} style={{left: newKittyPosition[1]}} className="kitty second" label="kitty1" alt="kittyTwo" data-nr={1} onClick={ableToClickKitty ? clickedKitty : null} />
        <img src={happy} style={{left: newKittyPosition[2]}} className="kitty third" label="kitty1" alt="kittyThree" data-nr={2} onClick={ableToClickKitty ? clickedKitty : null} />
        <img src={wool} id="wool" style={{left: ballLeft}} className={kittyWithBallIsVisible ? "visibleWool" : "wool"} alt="wool" />
        <button className="button" onClick={buttonClicked} disabled={disabledButton}>Start</button>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;

import  { useEffect, useReducer } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import fetchData from './utils/fetchData';

import {
  gameReducer,
  createInitialGameState,
  ACTIONS,
} from './utils/gameReducer';

function App() {
  const [gameState, dispatch] = useReducer(
    gameReducer,
    [],
    createInitialGameState
  );

  useEffect(() => {
    console.log(gameState); // This will show the gameState in the console whenever it updates
  }, [gameState]);

  useEffect(() => {
    const loadCardData = async () => {
      const cardData = await fetchData(); // Fetch card data
      console.log(cardData);
      dispatch({ type: ACTIONS.SET_CARDS, payload: cardData }); // Add a new action to handle this
    };

    loadCardData();
  }, []); // Runs only on component mount

  // Save high score to local storage
  useEffect(() => {
    localStorage.setItem(
      'highScoreMemory',
      JSON.stringify(gameState.highScore)
    );
  }, [gameState.highScore]);

  /* // Save allow sound preference
  useEffect(() => {
    localStorage.setItem(
      'allowSoundsMemory',
      JSON.stringify(gameState.allowSounds)
    );
  }, [gameState.allowSounds]); */

  // Checks win condition
  useEffect(() => {
    if (gameState.characters.length > 0 && gameState.characters.every((char) => char.isClicked)) {

      dispatch({ type: ACTIONS.WIN_GAME });
    }
  }, [gameState.characters]);

  /* const toggleSound = () => {
    dispatch({ type: ACTIONS.TOGGLE_SOUND });
  }; */

  return (
    <>
      

      {!gameState.isGameStart && (
        <StartScreen /* soundOn={gameState.allowSounds} */ dispatch={dispatch} />
      )}

      {gameState.isGameStart && !gameState.isGameOver && (
        <GameScreen gameState={gameState} dispatch={dispatch} />
      )}

      {gameState.isGameOver && (
        <EndScreen gameState={gameState} dispatch={dispatch} />
      )}

      {/* <button type="button" className="btn__toggle-sound" onClick={toggleSound}>
        <div className="material-symbols-outlined">
          {gameState.allowSounds ? 'volume_up' : 'volume_off'}
        </div>
      </button> */}

      
    </>
  );
  
}

export default App;

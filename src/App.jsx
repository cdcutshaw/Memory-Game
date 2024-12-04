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
    const loadCardData = async () => {
      const cardData = await fetchData(); 
      dispatch({ type: ACTIONS.SET_CARDS, payload: cardData }); 
    };

    loadCardData();
  }, []); 

  
  useEffect(() => {
    localStorage.setItem(
      'highScoreMemory',
      JSON.stringify(gameState.highScore)
    );
  }, [gameState.highScore]);

  
  useEffect(() => {
    if (gameState.characters.length > 0 && gameState.characters.every((char) => char.isClicked)) {

      dispatch({ type: ACTIONS.WIN_GAME });
    }
  }, [gameState.characters]);


  return (
    <>
      {!gameState.isGameStart && (
        <StartScreen  dispatch={dispatch} />
      )}

      {gameState.isGameStart && !gameState.isGameOver && (
        <GameScreen gameState={gameState} dispatch={dispatch} />
      )}

      {gameState.isGameOver && (
        <EndScreen gameState={gameState} dispatch={dispatch} />
      )}

    </>
  );
  
}

export default App;

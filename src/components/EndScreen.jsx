import Scoreboard from './Scoreboard';
import { ACTIONS } from '../utils/gameReducer';

export default function EndScreen({ gameState, dispatch }) {
  const isWin = gameState.characters.length > 0 && 
                gameState.characters.every((char) => char.isClicked);

  return (
    <>
      <div className="modalOverlay"></div>
      <div className="endScreen">
        
        {isWin ? (
          <h1>Congratulations! You won the game!</h1>
        ) : (
          <h1>Game Over! Better luck next time!</h1>
        )}
        <button 
          onClick={() => dispatch({ type: ACTIONS.START_GAME })}
          className="restartBtn"
        >
          Play Again
        </button>
      </div>
    </>
  );
}

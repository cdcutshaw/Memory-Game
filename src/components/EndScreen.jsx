import Scoreboard from './Scoreboard';

export default function EndScreen ({ gameState, dispatch }) {
    return (
        <div className="endScreen">
            <Scoreboard 
                score={gameState.score}
                highScore={gameState.highScore}
            />
            <h1>Game Over!</h1>
            <button 
            onClick={() => dispatch({ type: 'START_GAME'})}
            className="restartBtn"
            >
                Play Again
            </button>
        </div>
    );
}
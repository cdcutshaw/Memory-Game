export default function EndScreen ({ gameState, dispatch }) {
    return (
        <div className="endScreen">
            <h1>Game Over!</h1>
            <button 
            onClick={() => dispatch({ type: 'RESTART_GAME'})}
            className="restartBtn"
            >
                Play Again
            </button>
        </div>
    );
}
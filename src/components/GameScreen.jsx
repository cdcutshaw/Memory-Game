import Scoreboard from './Scoreboard';
import CardGrid from './CardGrid'; 

export default function GameScreen ({gameState, dispatch}) {
    return (
        <div className="gameScreen">
            <Scoreboard 
                score={gameState.score}
                highScore={gameState.highScore}
            />
            <CardGrid 
                cards={gameState.characters}
                dispatch={dispatch}
            />
            <button
                onClick={() => dispatch({type: 'END_GAME'})}
                className='endBtn'
            >
                End Game
            </button>
        </div>
    );
};
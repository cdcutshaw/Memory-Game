import Scoreboard from './Scoreboard';
import CardGrid from './CardGrid'; 

export default function GameScreen ({gameState, dispatch}) {
    return (
        <div className="screen gameScreen">
            <img className="arcaneLogo" src="/src/assets/arcane_logo.png" alt="" />
            <div>
                <Scoreboard
                    className="gameScore"
                    score={gameState.score}
                    highScore={gameState.highScore}
                />
                <CardGrid
                    className="cardGrid"
                    cards={gameState.characters}
                    dispatch={dispatch}
                />
                <button
                    onClick={() => dispatch({type: 'RESTART_GAME'})}
                    className='restartBtn'
                >
                    Restart Game
                </button>
            </div>
        </div>
    );
};
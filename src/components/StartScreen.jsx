

export default function StartScreen ({dispatch}) {
return (
    <div className="startScreen">
        <p>your objective is to select a new character each turn to earn points. If you select the same character twice, its game over...</p>
        <button
            onClick={() => dispatch ({type: 'START_GAME'})}
            className="startBtn"
        >
            Start Game
        </button>
    </div>
)
}
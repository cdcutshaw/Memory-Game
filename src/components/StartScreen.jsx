

export default function StartScreen ({dispatch}) {
return (
    <div 
        className="screen startScreen"
    >
        <img className="arcaneLogo" src="/src/assets/arcane_logo.png" alt="" />
        <div className="startPrompt">
        <p>You have fallen victim to the twisted experiments of the mad scientist Singed, transformed into a mindless, raging beast. To reclaim your memories and return to your true self, you must conquer this memory game.</p>
        <p>How to play: Select a new character each turn to earn points. But beware—choosing the same character twice will end the game. Test your memory and see if you can break free from Singed's grasp!</p>
        <button
                onClick={() => dispatch ({type: 'START_GAME'})}
                className="startBtn"
            >
                Start Game
            </button>
        </div>
    </div>
)
}
export default function Scoreboard ({score, highScore}) {

    return(
        <div className="scoreboard">
            <h2>Current Score : {score} </h2>
            <h2>High Score : {highScore} </h2>
        </div>
    )
}
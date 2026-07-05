import { useGameState } from "../../game/useGameState";
import GuessInput from "./GuessInput";
import GuessGrid from "./GuessGrid";
import WinScreen from "./WinScreen";

function GuessTheAnime() {
    const { target, guesses, won, makeGuess, resetGame } = useGameState();

    if (!target) return <p>Loading...</p>;

    return (
        <div>
            {!won && <GuessInput onGuess={makeGuess} />}

            {won && (
                <WinScreen
                    target={target}
                    guessCount={guesses.length}
                    onReset={resetGame}
                />
            )}

            <GuessGrid guesses={guesses} />
        </div>
    );
}

export default GuessTheAnime;
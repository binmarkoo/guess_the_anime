import { useGameState } from "../../game/useGameState";
import compareAnime from "../../game/compareAnime";
import GuessInput from "./GuessInput";
import GuessGrid from "./GuessGrid";
import GuessRow from "./GuessRow";
import WinScreen from "./WinScreen";

function GuessTheAnime() {
    const { target, guesses, won, revealed, makeGuess, giveUp, resetGame } = useGameState();

    if (!target) return <p>Loading...</p>;

    // build a "perfect" row: the target compared against itself -> all green
    const solutionRow = { anime: target, result: compareAnime(target, target) };

    return (
        <div>
            {!won && !revealed && (
                <div className="flex flex-col items-center gap-3">
                    <GuessInput onGuess={makeGuess} />
                    {guesses.length > 0 && (
                        <button
                            onClick={giveUp}
                            className="text-sm text-pink-500 dark:text-pink-300 hover:underline"
                        >
                            Aufgeben & auflösen
                        </button>
                    )}
                </div>
            )}

            {won && (
                <WinScreen
                    target={target}
                    guessCount={guesses.length}
                    onReset={resetGame}
                />
            )}

            {revealed && (
                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 text-white text-center shadow-lg glow-box">
                    <h2 className="text-2xl font-bold mb-3">🌸 Die Lösung war...</h2>
                    <img
                        src={target.image}
                        alt={target.title}
                        className="w-32 rounded-xl mx-auto mb-3 shadow-md ring-2 ring-white/50"
                    />
                    <p className="text-lg mb-4">
                        <strong>{target.title}</strong>
                    </p>
                    <button
                        onClick={resetGame}
                        className="px-6 py-2 rounded-lg bg-white text-pink-600 font-bold hover:opacity-90 transition"
                    >
                        Nochmal spielen
                    </button>
                </div>
            )}

            {/* show the solution row when the game is over */}
            {(won || revealed) && (
                <div className="mt-6 overflow-x-auto">
                    <p className="text-sm font-bold text-pink-500 dark:text-pink-300 mb-2">
                        Lösung:
                    </p>
                    <GuessRow guess={solutionRow} />
                </div>
            )}

            <GuessGrid guesses={guesses} />
        </div>
    );
}

export default GuessTheAnime;
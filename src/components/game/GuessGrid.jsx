import { categories, CELL_WIDTH } from "../../game/categories";
import GuessRow from "./GuessRow";

function GuessGrid({ guesses }) {
    // empty state: nothing guessed yet
    if (guesses.length === 0) {
        return (
            <div className="text-center mt-16 text-gray-400 dark:text-gray-600">
                <div className="text-5xl mb-3">🔍</div>
                <p>Tippe oben einen Anime ein, um zu starten!</p>
            </div>
        );
    }

    return (
        <div className="mt-6 overflow-x-auto">
            {/* header row */}
            <div className="flex gap-1.5 mb-1.5">
                <div className={`${CELL_WIDTH} shrink-0`} />
                {categories.map((cat) => (
                    <div
                        key={cat.key}
                        className={`${CELL_WIDTH} shrink-0 text-center text-[10px] font-bold text-gray-600 dark:text-gray-400`}
                    >
                        {cat.label}
                    </div>
                ))}
            </div>

            {/* one row per guess */}
            {guesses.map((guess, index) => (
                <GuessRow key={index} guess={guess} />
            ))}
        </div>
    );
}

export default GuessGrid;
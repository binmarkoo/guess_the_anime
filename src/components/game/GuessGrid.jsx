import { categories, CELL_WIDTH } from "../../game/categories";
import GuessRow from "./GuessRow";

function GuessGrid({ guesses }) {
    if (guesses.length === 0) return null;

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
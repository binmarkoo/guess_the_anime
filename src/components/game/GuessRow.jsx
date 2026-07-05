import { categories, CELL_WIDTH } from "../../game/categories";
import CategoryCell from "./CategoryCell";

function GuessRow({ guess }) {
    const { anime, result } = guess;

    return (
        <div className="flex gap-1.5 mb-1.5 items-stretch">
            {/* anime image on the left */}
            <div className={`${CELL_WIDTH} shrink-0 flex items-center justify-center`}>
                <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-16 rounded-lg shadow-md"
                />
            </div>

            {/* one cell per category */}
            {categories.map((cat) => (
                <CategoryCell
                    key={cat.key}
                    label={cat.label}
                    value={formatValue(anime[cat.key])}
                    status={result[cat.key]}
                />
            ))}
        </div>
    );
}

function formatValue(value) {
    if (Array.isArray(value)) return value.join(", ");
    if (value == null) return "?";
    return value;
}

export default GuessRow;
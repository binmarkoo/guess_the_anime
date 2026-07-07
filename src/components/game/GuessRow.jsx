import { motion } from "motion/react";
import { categories, CELL_WIDTH } from "../../game/categories";
import CategoryCell from "./CategoryCell";

function GuessRow({ guess }) {
    const { anime, result } = guess;

    return (
        <motion.div
            className="flex gap-1.5 mb-1.5 items-stretch"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* anime image on the left */}
            <div className={`${CELL_WIDTH} shrink-0 flex items-center justify-center`}>
                <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-16 rounded-lg shadow-md"
                />
            </div>

            {/* one cell per category */}
            {categories.map((cat, index) => (
                <CategoryCell
                    key={cat.key}
                    label={cat.label}
                    value={formatValue(anime[cat.key])}
                    status={result[cat.key]}
                    index={index}
                />
            ))}
        </motion.div>
    );
}

function formatValue(value) {
    if (Array.isArray(value)) return value.join(", ");
    if (value == null) return "?";
    return value;
}

export default GuessRow;
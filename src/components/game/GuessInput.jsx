import { useState } from "react";
import animeList from "../../data/animeList.json";

function GuessInput({ onGuess }) {
    const [query, setQuery] = useState("");

    const suggestions =
        query.length > 0
            ? animeList
                .filter((anime) =>
                    anime.title.toLowerCase().includes(query.toLowerCase())
                )
                .slice(0, 8)
            : [];

    function handleSelect(anime) {
        onGuess(anime);
        setQuery("");
    }

    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type an anime..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-purple-500"
            />

            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
                    {suggestions.map((anime) => (
                        <li
                            key={anime.id}
                            onClick={() => handleSelect(anime)}
                            className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <img
                                src={anime.image}
                                alt={anime.title}
                                className="w-8 h-10 object-cover rounded"
                            />
                            <span className="text-gray-900 dark:text-gray-100">
                                {anime.title}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default GuessInput;
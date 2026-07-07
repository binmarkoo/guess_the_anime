import { useTheme } from "./hooks/useTheme";
import GuessTheAnime from "./components/game/GuessTheAnime";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* top bar */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="text-xl font-bold tracking-tight">AnimeGuessr</span>
          </div>
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition text-sm"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* main content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* hero */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Guess the Anime
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Rate einen Anime und errate den geheimen Titel anhand seiner Eigenschaften.
          </p>
        </div>

        <GuessTheAnime />
      </main>
    </div>
  );
}

export default App;
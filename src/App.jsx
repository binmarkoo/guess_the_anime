import { useTheme } from "./hooks/useTheme";
import GuessTheAnime from "./components/game/GuessTheAnime";
import PetalRain from "./components/PetalRain";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-pink-100 dark:from-[#1a1626] dark:via-[#221a35] dark:to-[#1a1626] text-gray-800 dark:text-pink-50 transition-colors">
      {/* floating petals in the background */}
      <PetalRain />

      {/* soft glowing orbs for atmosphere */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-pink-300/30 dark:bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-300/30 dark:bg-purple-500/20 blur-3xl" />

      {/* everything sits above the background */}
      <div className="relative z-10">
        {/* top bar */}
        <header className="border-b border-pink-200/50 dark:border-pink-400/10 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌸</span>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                AnimeGuessr
              </span>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded-lg bg-pink-100/80 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-400/20 hover:bg-pink-200 dark:hover:bg-pink-500/20 transition text-sm"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </header>

        {/* main content */}
        <main className="max-w-5xl mx-auto px-6 py-12">
          {/* hero */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent text-glow">
              Guess the Anime
            </h1>
            <p className="text-gray-500 dark:text-pink-200/70">
              Rate einen Anime und errate den geheimen Titel anhand seiner Eigenschaften.
            </p>
          </div>

          <GuessTheAnime />
        </main>
      </div>
    </div>
  );
}

export default App;
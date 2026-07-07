function WinScreen({ target, guessCount, onReset }) {
    return (
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 text-white text-center shadow-lg glow-box">
            <h2 className="text-2xl font-bold mb-3">🌸 Erraten!</h2>
            <img
                src={target.image}
                alt={target.title}
                className="w-32 rounded-xl mx-auto mb-3 shadow-md ring-2 ring-white/50"
            />
            <p className="text-lg">
                Es war <strong>{target.title}</strong>
            </p>
            <p className="opacity-90 mb-4">Du hast {guessCount} Versuche gebraucht.</p>
            <button
                onClick={onReset}
                className="px-6 py-2 rounded-lg bg-white text-pink-600 font-bold hover:opacity-90 transition"
            >
                Nochmal spielen
            </button>
        </div>
    );
}

export default WinScreen;
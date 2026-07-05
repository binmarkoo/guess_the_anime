function WinScreen({ target, guessCount, onReset }) {
    return (
        <div className="mt-6 p-6 rounded-2xl bg-green-500 text-white text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-3">🎉 You got it!</h2>
            <img
                src={target.image}
                alt={target.title}
                className="w-32 rounded-xl mx-auto mb-3 shadow-md"
            />
            <p className="text-lg">
                It was <strong>{target.title}</strong>
            </p>
            <p className="opacity-90 mb-4">You needed {guessCount} guesses.</p>
            <button
                onClick={onReset}
                className="px-6 py-2 rounded-lg bg-white text-green-700 font-bold hover:opacity-90 transition"
            >
                Play again
            </button>
        </div>
    );
}

export default WinScreen;